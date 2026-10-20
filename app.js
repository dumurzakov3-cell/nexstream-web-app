// NexStream Main Application Logic
document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentView = "shorts"; // default to shorts as in Stitch or can be set to 'home'
  let currentCategory = "Barchasi";
  let currentShortIndex = 0;
  let isShortsPlaying = true;
  let isMuted = false;
  let activeSearchQuery = "";

  // DOM Elements
  const mainViews = {
    home: document.getElementById("view-home"),
    shorts: document.getElementById("view-shorts"),
    subscriptions: document.getElementById("view-subscriptions"),
    explore: document.getElementById("view-explore"),
    library: document.getElementById("view-library"),
    profile: document.getElementById("view-profile")
  };

  const navLinks = document.querySelectorAll("[data-nav-target]");
  const sidebar = document.getElementById("app-sidebar");
  const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
  const searchInput = document.getElementById("main-search-input");
  const toastContainer = document.getElementById("toast-container");

  // Init Application
  initCategoryChips();
  renderHomeFeed();
  renderShortsPlayer();
  renderSubscriptionsFeed();
  renderExploreHub();
  renderLibraryView();
  renderProfileView();
  setupGlobalEvents();
  setupUploadModal();
  setupVideoModal();

  // Navigation Logic
  function switchView(viewName) {
    if (!mainViews[viewName]) return;
    currentView = viewName;

    // Toggle active views
    Object.keys(mainViews).forEach(key => {
      if (mainViews[key]) {
        if (key === viewName) {
          mainViews[key].classList.remove("hidden");
        } else {
          mainViews[key].classList.add("hidden");
        }
      }
    });

    // Update Nav Link styles
    navLinks.forEach(link => {
      const target = link.getAttribute("data-nav-target");
      if (target === viewName) {
        link.classList.add("bg-surface-container-high", "text-primary", "font-semibold");
        link.classList.remove("text-on-surface-variant");
        const dot = link.querySelector(".active-dot");
        if (dot) dot.classList.remove("hidden");
      } else {
        link.classList.remove("bg-surface-container-high", "text-primary", "font-semibold");
        link.classList.add("text-on-surface-variant");
        const dot = link.querySelector(".active-dot");
        if (dot) dot.classList.add("hidden");
      }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 1. Home Feed Render
  function initCategoryChips() {
    const container = document.getElementById("category-chips-container");
    if (!container) return;
    container.innerHTML = NexData.categories.map(cat => `
      <button class="category-chip shrink-0 px-4 py-1.5 rounded-full text-label-md font-label-md font-medium transition-all ${
        cat === currentCategory
          ? "bg-gradient-to-r from-secondary-container to-primary-container text-white shadow-[0_0_12px_rgba(6,182,212,0.3)]"
          : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
      }" data-category="${cat}">
        ${cat}
      </button>
    `).join("");

    container.querySelectorAll(".category-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        currentCategory = chip.getAttribute("data-category");
        initCategoryChips();
        renderHomeFeed();
      });
    });
  }

  function renderHomeFeed() {
    const grid = document.getElementById("home-videos-grid");
    const shortsGrid = document.getElementById("home-shorts-carousel");
    if (!grid) return;

    let filtered = NexData.videos;
    if (currentCategory !== "Barchasi") {
      filtered = filtered.filter(v => v.category === currentCategory);
    }
    if (activeSearchQuery.trim()) {
      const q = activeSearchQuery.toLowerCase();
      filtered = filtered.filter(v => v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-on-surface-variant">
          <span class="material-symbols-outlined text-[48px] mb-2 text-primary/50">search_off</span>
          <p class="text-headline-sm">Hech qanday video topilmadi</p>
          <p class="text-body-sm text-outline mt-1">Boshqa so'z yoki toifa bo'yicha qidirib ko'ring</p>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(v => `
        <div class="video-card cursor-pointer group flex flex-col" data-video-id="${v.id}">
          <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-container-low mb-3 border border-outline-variant/30">
            <img src="${v.thumbnail}" class="video-card-thumb w-full h-full object-cover" alt="${v.title}">
            <span class="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-white text-[11px] font-bold">
              ${v.duration}
            </span>
          </div>
          <div class="flex gap-3 items-start">
            <img src="${v.channelAvatar}" class="w-9 h-9 rounded-full object-cover shrink-0 ring-1 ring-white/10" alt="${v.channel}">
            <div class="flex-1 min-w-0">
              <h3 class="text-body-md font-semibold text-on-surface line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                ${v.title}
              </h3>
              <div class="flex items-center gap-1 mt-1 text-body-sm text-on-surface-variant">
                <span class="truncate hover:text-white">${v.channel}</span>
                ${v.verified ? `<span class="material-symbols-outlined text-primary text-[14px] fill" style="font-variation-settings:'FILL' 1;">verified</span>` : ""}
              </div>
              <p class="text-[12px] text-outline mt-0.5">
                ${v.views} • ${v.time}
              </p>
            </div>
            <button class="text-on-surface-variant hover:text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="material-symbols-outlined text-[20px]">more_vert</span>
            </button>
          </div>
        </div>
      `).join("");

      grid.querySelectorAll(".video-card").forEach(card => {
        card.addEventListener("click", () => {
          const vId = card.getAttribute("data-video-id");
          const video = NexData.videos.find(x => x.id === vId);
          if (video) openVideoModal(video);
        });
      });
    }

    // Shorts Shelf on Home
    if (shortsGrid) {
      shortsGrid.innerHTML = NexData.shorts.map((s, idx) => `
        <div class="shrink-0 w-48 rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 cursor-pointer group relative aspect-[9/16]" data-short-index="${idx}">
          <img src="${s.videoThumb}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${s.title}">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 flex flex-col justify-between">
            <span class="self-start px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-primary text-[10px] font-bold">
              ${s.tag}
            </span>
            <div>
              <p class="text-white text-body-sm font-semibold line-clamp-2 drop-shadow mb-1">
                ${s.title}
              </p>
              <span class="text-white/70 text-[11px] font-medium flex items-center gap-1">
                <span class="material-symbols-outlined text-[13px]">visibility</span> ${s.views}
              </span>
            </div>
          </div>
        </div>
      `).join("");

      shortsGrid.querySelectorAll("[data-short-index]").forEach(card => {
        card.addEventListener("click", () => {
          currentShortIndex = parseInt(card.getAttribute("data-short-index"), 10);
          switchView("shorts");
          renderShortsPlayer();
        });
      });
    }
  }

  // 2. Shorts Cinema Player Render
  function renderShortsPlayer() {
    const s = NexData.shorts[currentShortIndex];
    if (!s) return;

    // Elements in Shorts Cinema
    const thumbEl = document.getElementById("shorts-video-bg");
    const tagEl = document.getElementById("shorts-tag");
    const viewsEl = document.getElementById("shorts-views");
    const creatorAvatar = document.getElementById("shorts-creator-avatar");
    const creatorHandle = document.getElementById("shorts-creator-handle");
    const subscribeBtn = document.getElementById("shorts-subscribe-btn");
    const captionEl = document.getElementById("shorts-caption");
    const audioTrackEl = document.getElementById("shorts-audio-track");
    const likeCountEl = document.getElementById("shorts-like-count");
    const likeBtn = document.getElementById("shorts-like-btn");
    const dislikeBtn = document.getElementById("shorts-dislike-btn");
    const commentsCountEl = document.getElementById("shorts-comments-count");
    const commentsHeaderCount = document.getElementById("comments-header-count");
    const commentsStream = document.getElementById("comments-stream");

    if (thumbEl) thumbEl.style.backgroundImage = `url('${s.videoThumb}')`;
    if (tagEl) tagEl.textContent = s.tag;
    if (viewsEl) viewsEl.textContent = s.views;
    if (creatorAvatar) creatorAvatar.src = s.authorAvatar;
    if (creatorHandle) creatorHandle.textContent = s.handle;
    if (captionEl) captionEl.innerHTML = s.caption;
    if (audioTrackEl) audioTrackEl.textContent = s.audioTrack + " • " + s.audioTrack;
    if (likeCountEl) likeCountEl.textContent = s.liked ? (s.likes + 1).toLocaleString() : s.likes.toLocaleString();
    if (commentsCountEl) commentsCountEl.textContent = s.comments.length.toLocaleString();
    if (commentsHeaderCount) commentsHeaderCount.textContent = s.comments.length.toLocaleString();

    // Subscribe state
    if (subscribeBtn) {
      if (s.isSubscribed) {
        subscribeBtn.textContent = "Obuna bo'lingan";
        subscribeBtn.className = "px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-bright text-label-md font-label-md font-medium transition-all active:scale-95";
      } else {
        subscribeBtn.textContent = "Obuna bo'lish";
        subscribeBtn.className = "px-4 py-1.5 rounded-full bg-white text-black hover:bg-white/90 text-label-md font-label-md font-bold shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all active:scale-95";
      }
    }

    // Like btn state
    if (likeBtn) {
      const heartIcon = likeBtn.querySelector(".material-symbols-outlined");
      if (s.liked) {
        likeBtn.classList.add("bg-primary/20", "border-primary", "text-primary");
        if (heartIcon) {
          heartIcon.style.fontVariationSettings = "'FILL' 1";
          heartIcon.classList.add("text-primary");
        }
      } else {
        likeBtn.classList.remove("bg-primary/20", "border-primary", "text-primary");
        if (heartIcon) {
          heartIcon.style.fontVariationSettings = "'FILL' 0";
          heartIcon.classList.remove("text-primary");
        }
      }
    }

    // Dislike btn state
    if (dislikeBtn) {
      const icon = dislikeBtn.querySelector(".material-symbols-outlined");
      if (s.disliked) {
        dislikeBtn.classList.add("bg-white/20", "text-white");
        if (icon) icon.style.fontVariationSettings = "'FILL' 1";
      } else {
        dislikeBtn.classList.remove("bg-white/20", "text-white");
        if (icon) icon.style.fontVariationSettings = "'FILL' 0";
      }
    }

    // Comments render
    if (commentsStream) {
      commentsStream.innerHTML = s.comments.map(c => `
        <div class="flex items-start gap-space-sm group ${c.isPinned ? "p-3 rounded-lg bg-surface-container-low/70 border border-primary/20" : ""}">
          <img src="${c.avatar}" class="w-7 h-7 rounded-full object-cover shrink-0 ring-1 ${c.isPinned ? "ring-primary" : "ring-white/10"}" alt="${c.author}">
          <div class="flex-1">
            ${c.isPinned ? `<div class="flex items-center gap-1 text-[11px] text-primary font-semibold mb-1"><span class="material-symbols-outlined text-[13px]">push_pin</span> Muallif qadagan</div>` : ""}
            <div class="flex items-center gap-1.5">
              <span class="text-label-sm font-label-sm text-white font-bold">${c.handle}</span>
              ${c.isPinned ? `<span class="material-symbols-outlined text-primary text-[14px] fill" style="font-variation-settings: 'FILL' 1;">verified</span>` : ""}
              <span class="text-[10px] text-on-surface-variant">${c.time}</span>
            </div>
            <p class="text-body-sm font-body-sm text-on-surface mt-1 leading-snug">
              ${c.text}
            </p>
            <div class="flex items-center gap-3 mt-2 text-on-surface-variant text-label-sm font-label-sm">
              <button class="comment-like-btn flex items-center gap-1 hover:text-primary transition-colors" data-comment-id="${c.id}">
                <span class="material-symbols-outlined text-[15px]">thumb_up</span>
                <span>${c.likes}</span>
              </button>
              <button class="hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[15px]">thumb_down</span>
              </button>
              <button class="hover:text-white transition-colors">Javob berish</button>
            </div>
          </div>
        </div>
      `).join("");

      // Comment likes
      commentsStream.querySelectorAll(".comment-like-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const cId = btn.getAttribute("data-comment-id");
          const targetComment = s.comments.find(x => x.id === cId);
          if (targetComment) {
            targetComment.likes += 1;
            renderShortsPlayer();
            showToast("Izohga layk bosildi");
          }
        });
      });
    }
  }

  // 3. Subscriptions Feed Render
  function renderSubscriptionsFeed() {
    const storyBar = document.getElementById("sub-story-bar");
    const grid = document.getElementById("subscriptions-video-grid");
    if (!storyBar || !grid) return;

    // Stories bar
    storyBar.innerHTML = NexData.subscriptions.map(sub => `
      <div class="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group w-20 text-center">
        <div class="p-0.5 rounded-full ${sub.hasNew ? "bg-gradient-to-tr from-secondary-container via-primary-container to-primary" : "bg-outline-variant/40"} group-hover:scale-105 transition-transform">
          <img src="${sub.avatar}" class="w-14 h-14 rounded-full object-cover border-2 border-surface-container-lowest" alt="${sub.name}">
        </div>
        <span class="text-body-sm font-medium text-on-surface-variant group-hover:text-white truncate w-full text-[11px]">
          ${sub.name}
        </span>
      </div>
    `).join("");

    // Videos from subscriptions
    grid.innerHTML = NexData.videos.slice(0, 6).map(v => `
      <div class="video-card cursor-pointer group flex flex-col" data-video-id="${v.id}">
        <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-container-low mb-3 border border-outline-variant/30">
          <img src="${v.thumbnail}" class="video-card-thumb w-full h-full object-cover" alt="${v.title}">
          <span class="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-white text-[11px] font-bold">
            ${v.duration}
          </span>
        </div>
        <div class="flex gap-3 items-start">
          <img src="${v.channelAvatar}" class="w-9 h-9 rounded-full object-cover shrink-0 ring-1 ring-white/10" alt="${v.channel}">
          <div class="flex-1 min-w-0">
            <h3 class="text-body-md font-semibold text-on-surface line-clamp-2 group-hover:text-primary transition-colors leading-snug">
              ${v.title}
            </h3>
            <div class="flex items-center gap-1 mt-1 text-body-sm text-on-surface-variant">
              <span class="truncate hover:text-white">${v.channel}</span>
              ${v.verified ? `<span class="material-symbols-outlined text-primary text-[14px] fill" style="font-variation-settings:'FILL' 1;">verified</span>` : ""}
            </div>
            <p class="text-[12px] text-outline mt-0.5">
              ${v.views} • ${v.time}
            </p>
          </div>
        </div>
      </div>
    `).join("");

    grid.querySelectorAll(".video-card").forEach(card => {
      card.addEventListener("click", () => {
        const vId = card.getAttribute("data-video-id");
        const video = NexData.videos.find(x => x.id === vId);
        if (video) openVideoModal(video);
      });
    });
  }

  // 4. Explore Hub Render
  function renderExploreHub() {
    const list = document.getElementById("explore-trending-list");
    if (!list) return;

    list.innerHTML = NexData.videos.slice(0, 4).map((v, i) => `
      <div class="video-card flex gap-4 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/20 cursor-pointer transition-colors" data-video-id="${v.id}">
        <span class="text-headline-md font-bold text-primary/60 shrink-0 w-6 flex items-center justify-center">
          #${i + 1}
        </span>
        <div class="relative w-48 aspect-video rounded-lg overflow-hidden bg-black shrink-0">
          <img src="${v.thumbnail}" class="w-full h-full object-cover" alt="${v.title}">
          <span class="absolute bottom-1 right-1 px-1 rounded bg-black/80 text-white text-[10px]">
            ${v.duration}
          </span>
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-body-md font-semibold text-white line-clamp-1 group-hover:text-primary">
            ${v.title}
          </h4>
          <p class="text-body-sm text-on-surface-variant mt-1">${v.channel} • ${v.views}</p>
          <p class="text-body-sm text-outline mt-1 line-clamp-2 text-[12px]">${v.description}</p>
        </div>
      </div>
    `).join("");

    list.querySelectorAll(".video-card").forEach(card => {
      card.addEventListener("click", () => {
        const vId = card.getAttribute("data-video-id");
        const video = NexData.videos.find(x => x.id === vId);
        if (video) openVideoModal(video);
      });
    });
  }

  // 5. Library Render
  function renderLibraryView() {
    const historyList = document.getElementById("library-history-list");
    const playlistsGrid = document.getElementById("library-playlists-grid");
    if (historyList) {
      historyList.innerHTML = NexData.history.map(h => `
        <div class="shrink-0 w-64 group cursor-pointer">
          <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-outline-variant/20 mb-2">
            <img src="${h.thumbnail}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="${h.title}">
            <div class="absolute bottom-0 left-0 w-full h-1 bg-white/20">
              <div class="h-full bg-primary" style="width: ${h.progress}%;"></div>
            </div>
          </div>
          <h4 class="text-body-sm font-semibold text-on-surface line-clamp-2 group-hover:text-primary leading-tight">
            ${h.title}
          </h4>
          <p class="text-[12px] text-on-surface-variant mt-1">${h.channel}</p>
        </div>
      `).join("");
    }

    if (playlistsGrid) {
      playlistsGrid.innerHTML = NexData.playlists.map(p => `
        <div class="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/20 cursor-pointer group transition-all">
          <div class="relative aspect-video rounded-lg overflow-hidden bg-black mb-3">
            <img src="${p.thumb}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="${p.title}">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="material-symbols-outlined text-[36px] text-white">play_arrow</span>
            </div>
          </div>
          <h4 class="text-body-md font-bold text-white">${p.title}</h4>
          <div class="flex items-center justify-between text-body-sm text-outline mt-1">
            <span>${p.videoCount} ta video</span>
            <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">${p.icon}</span> ${p.privacy}</span>
          </div>
        </div>
      `).join("");
    }
  }

  // 6. Profile Render
  function renderProfileView() {
    const nameEl = document.getElementById("profile-name");
    const handleEl = document.getElementById("profile-handle");
    const bioEl = document.getElementById("profile-bio");
    const statsSubs = document.getElementById("profile-stat-subs");
    const statsPlaylists = document.getElementById("profile-stat-playlists");
    const statsSaved = document.getElementById("profile-stat-saved");

    if (nameEl) nameEl.textContent = NexData.currentUser.name;
    if (handleEl) handleEl.textContent = NexData.currentUser.handle;
    if (bioEl) bioEl.textContent = NexData.currentUser.bio;
    if (statsSubs) statsSubs.textContent = NexData.currentUser.subscriptionsCount;
    if (statsPlaylists) statsPlaylists.textContent = NexData.currentUser.playlistsCount;
    if (statsSaved) statsSaved.textContent = NexData.currentUser.savedCount;
  }

  // Global Event Listeners
  function setupGlobalEvents() {
    // Navigation clicks
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("data-nav-target");
        switchView(target);
      });
    });

    // Profile click
    const userAvatarBtn = document.getElementById("user-profile-header-btn");
    if (userAvatarBtn) {
      userAvatarBtn.addEventListener("click", () => switchView("profile"));
    }

    // Sidebar Toggle
    if (sidebarToggleBtn && sidebar) {
      sidebarToggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
      });
    }

    // Search input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        activeSearchQuery = e.target.value;
        if (currentView !== "home" && currentView !== "explore") {
          switchView("home");
        }
        renderHomeFeed();
      });
    }

    // Voice search simulation
    const voiceSearchBtn = document.getElementById("voice-search-btn");
    if (voiceSearchBtn) {
      voiceSearchBtn.addEventListener("click", () => {
        showToast("Ovozli qidiruv tinglanmoqda...");
        setTimeout(() => {
          if (searchInput) searchInput.value = "Prompt Engineering";
          activeSearchQuery = "Prompt Engineering";
          switchView("home");
          renderHomeFeed();
          showToast("'Prompt Engineering' bo'yicha qidirilmoqda");
        }, 1200);
      });
    }

    // Shorts Like Button
    const shortsLikeBtn = document.getElementById("shorts-like-btn");
    if (shortsLikeBtn) {
      shortsLikeBtn.addEventListener("click", () => {
        const s = NexData.shorts[currentShortIndex];
        if (!s) return;
        s.liked = !s.liked;
        if (s.liked) s.disliked = false;
        renderShortsPlayer();
        showToast(s.liked ? "Shorts yoqdi!" : "Layk bekor qilindi");
      });
    }

    // Shorts Dislike Button
    const shortsDislikeBtn = document.getElementById("shorts-dislike-btn");
    if (shortsDislikeBtn) {
      shortsDislikeBtn.addEventListener("click", () => {
        const s = NexData.shorts[currentShortIndex];
        if (!s) return;
        s.disliked = !s.disliked;
        if (s.disliked) s.liked = false;
        renderShortsPlayer();
      });
    }

    // Shorts Subscribe Button
    const subscribeBtn = document.getElementById("shorts-subscribe-btn");
    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", () => {
        const s = NexData.shorts[currentShortIndex];
        if (!s) return;
        s.isSubscribed = !s.isSubscribed;
        renderShortsPlayer();
        showToast(s.isSubscribed ? "@hadisa_codes kanaliga obuna bo'lindi!" : "Obuna bekor qilindi");
      });
    }

    // Shorts Audio Toggle
    const audioToggleBtn = document.getElementById("shorts-audio-toggle-btn");
    if (audioToggleBtn) {
      audioToggleBtn.addEventListener("click", () => {
        isMuted = !isMuted;
        const icon = audioToggleBtn.querySelector(".material-symbols-outlined");
        if (icon) icon.textContent = isMuted ? "volume_off" : "volume_up";
        showToast(isMuted ? "Ovoz o'chirildi" : "Ovoz yoqildi");
      });
    }

    // Shorts Share Button
    const shortsShareBtn = document.getElementById("shorts-share-btn");
    if (shortsShareBtn) {
      shortsShareBtn.addEventListener("click", () => {
        navigator.clipboard?.writeText(window.location.href);
        showToast("Havola buferga nusxalandi!");
      });
    }

    // Shorts Play/Pause trigger
    const playTrigger = document.getElementById("shorts-play-trigger");
    if (playTrigger) {
      playTrigger.addEventListener("click", () => {
        isShortsPlaying = !isShortsPlaying;
        const icon = playTrigger.querySelector(".material-symbols-outlined");
        if (icon) icon.textContent = isShortsPlaying ? "pause" : "play_arrow";
        showToast(isShortsPlaying ? "Ijro davom etmoqda" : "To'xtatildi");
      });
    }

    // Next / Previous Shorts
    const nextShort = () => {
      if (currentShortIndex < NexData.shorts.length - 1) {
        currentShortIndex++;
      } else {
        currentShortIndex = 0; // loop
      }
      renderShortsPlayer();
    };

    const prevShort = () => {
      if (currentShortIndex > 0) {
        currentShortIndex--;
      } else {
        currentShortIndex = NexData.shorts.length - 1;
      }
      renderShortsPlayer();
    };

    const nextBtn = document.getElementById("shorts-next-btn");
    const prevBtn = document.getElementById("shorts-prev-btn");
    if (nextBtn) nextBtn.addEventListener("click", nextShort);
    if (prevBtn) prevBtn.addEventListener("click", prevShort);

    // Keyboard Shortcuts (ArrowUp / ArrowDown / Space)
    window.addEventListener("keydown", (e) => {
      if (currentView !== "shorts") return;
      if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        nextShort();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        prevShort();
      } else if (e.code === "Space") {
        e.preventDefault();
        if (playTrigger) playTrigger.click();
      }
    });

    // Add Comment in Shorts
    const addCommentInput = document.getElementById("shorts-add-comment-input");
    const submitCommentBtn = document.getElementById("shorts-submit-comment-btn");

    const handleCommentSubmit = () => {
      if (!addCommentInput) return;
      const text = addCommentInput.value.trim();
      if (!text) return;

      const s = NexData.shorts[currentShortIndex];
      if (s) {
        s.comments.unshift({
          id: "c_" + Date.now(),
          author: NexData.currentUser.name,
          handle: NexData.currentUser.handle,
          avatar: NexData.currentUser.avatar,
          time: "Hozirgina",
          text: text,
          likes: 0,
          isPinned: false
        });
        addCommentInput.value = "";
        renderShortsPlayer();
        showToast("Izohingiz qo'shildi!");
      }
    };

    if (submitCommentBtn) submitCommentBtn.addEventListener("click", handleCommentSubmit);
    if (addCommentInput) {
      addCommentInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") handleCommentSubmit();
      });
    }

    // Comments Panel Toggle
    const commentsToggleBtn = document.getElementById("shorts-comments-toggle-btn");
    const commentsCloseBtn = document.getElementById("comments-panel-close-btn");
    const commentsPanel = document.getElementById("desktop-comments-panel");

    if (commentsToggleBtn && commentsPanel) {
      commentsToggleBtn.addEventListener("click", () => {
        commentsPanel.classList.toggle("hidden");
      });
    }
    if (commentsCloseBtn && commentsPanel) {
      commentsCloseBtn.addEventListener("click", () => {
        commentsPanel.classList.add("hidden");
      });
    }
  }

  // Upload Video Modal
  function setupUploadModal() {
    const modal = document.getElementById("upload-modal");
    const openBtn = document.getElementById("header-create-btn");
    const closeBtn = document.getElementById("upload-modal-close");
    const form = document.getElementById("upload-form");

    if (openBtn && modal) {
      openBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
      });
    }

    if (form && modal) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("upload-title").value.trim();
        const category = document.getElementById("upload-category").value;
        const type = document.querySelector("input[name='upload-type']:checked")?.value || "video";

        if (type === "short") {
          NexData.shorts.unshift({
            id: "s_" + Date.now(),
            title: title,
            tag: category,
            views: "1 ko'rish",
            likes: 1,
            liked: true,
            disliked: false,
            commentsCount: 0,
            sharesCount: "0",
            author: NexData.currentUser.name,
            handle: NexData.currentUser.handle,
            authorAvatar: NexData.currentUser.avatar,
            subscribers: "1.4K",
            isSubscribed: false,
            audioTrack: "Original Audio - " + NexData.currentUser.name,
            videoThumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
            caption: title + " #nexstream #vibecoding #hadisa",
            comments: []
          });
          showToast("Yangi Short muvaffaqiyatli yuklandi!");
          modal.classList.add("hidden");
          currentShortIndex = 0;
          switchView("shorts");
          renderShortsPlayer();
        } else {
          NexData.videos.unshift({
            id: "v_" + Date.now(),
            title: title,
            channel: NexData.currentUser.name + " Tech",
            handle: NexData.currentUser.handle,
            channelAvatar: NexData.currentUser.avatar,
            verified: true,
            category: category,
            duration: "10:00",
            views: "1 ko'rish",
            time: "Hozirgina",
            thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            description: title
          });
          showToast("Video muvaffaqiyatli yuklandi!");
          modal.classList.add("hidden");
          switchView("home");
          renderHomeFeed();
        }
        form.reset();
      });
    }
  }

  // 16:9 Video Modal Player
  function setupVideoModal() {
    const modal = document.getElementById("video-modal");
    const closeBtn = document.getElementById("video-modal-close");
    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        const videoEl = document.getElementById("modal-video-element");
        if (videoEl) videoEl.pause();
      });
    }
  }

  function openVideoModal(video) {
    const modal = document.getElementById("video-modal");
    if (!modal) return;

    const videoEl = document.getElementById("modal-video-element");
    const titleEl = document.getElementById("modal-video-title");
    const channelNameEl = document.getElementById("modal-channel-name");
    const channelAvatarEl = document.getElementById("modal-channel-avatar");
    const viewsTimeEl = document.getElementById("modal-video-views-time");
    const descEl = document.getElementById("modal-video-desc");

    if (videoEl) {
      videoEl.src = video.videoUrl;
      videoEl.play().catch(() => {});
    }
    if (titleEl) titleEl.textContent = video.title;
    if (channelNameEl) channelNameEl.textContent = video.channel;
    if (channelAvatarEl) channelAvatarEl.src = video.channelAvatar;
    if (viewsTimeEl) viewsTimeEl.textContent = `${video.views} • ${video.time}`;
    if (descEl) descEl.textContent = video.description;

    modal.classList.remove("hidden");
  }

  // Toast Notification
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast-animate flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container-high/95 text-white border border-primary/40 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md text-body-sm font-medium z-50";
    toast.innerHTML = `
      <span class="material-symbols-outlined text-primary text-[18px]">info</span>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
});

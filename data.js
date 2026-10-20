// NexStream Mock Database
const NexData = {
  currentUser: {
    name: "Hadisa",
    handle: "@hadijan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    bio: "Informatika va axborot tizimlari 1-kurs talabasi | IT Live Prompt Engineering & Vibe Coding ishqibozi",
    subscribers: "1.4K",
    subscriptionsCount: 24,
    playlistsCount: 5,
    savedCount: 142
  },

  categories: [
    "Barchasi",
    "Dasturlash",
    "Sun'iy Intellekt",
    "Prompt Engineering",
    "Vibe Coding",
    "Algoritmlar",
    "Web Dizayn",
    "Talabalik Hayoti",
    "Podkastlar"
  ],

  videos: [
    {
      id: "v1",
      title: "Google Stitch va Vibe Coding bilan 10 daqiqada Web Ilova yaratish",
      channel: "Hadisa Tech",
      handle: "@hadisa_codes",
      channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "Vibe Coding",
      duration: "14:20",
      views: "24.5K ko'rish",
      time: "2 soat oldin",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description: "Ushbu darsda biz Google Stitch orqali prompt yozib, zamonaviy UI interfeys yaratamiz va uni to'liq ishlaydigan veb ilovaga aylantiramiz."
    },
    {
      id: "v2",
      title: "Informatika 1-kurs talabalari uchun Algoritmlar va Ma'lumotlar Tuzilmasi",
      channel: "IT Live Academy",
      handle: "@it_live_academy",
      channelAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "Algoritmlar",
      duration: "32:45",
      views: "89.1K ko'rish",
      time: "1 kun oldin",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description: "Murakkab algoritmlarni sodda tushunish: Big-O notatsiyasi, massivlar, bog'langan ro'yxatlar va daraxtlar."
    },
    {
      id: "v3",
      title: "Obsidian va AI: Qanday qilib Shaxsiy 'Ikkinchi Miya' qurish mumkin?",
      channel: "Hadisa Tech",
      handle: "@hadisa_codes",
      channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "Prompt Engineering",
      duration: "21:10",
      views: "18.3K ko'rish",
      time: "3 kun oldin",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description: "Obsidian Markdown tizimi va Prompt Engineering yordamida o'quv konspektlarini tizimlashtirish sirlari."
    },
    {
      id: "v4",
      title: "Prompt Engineering: 5 Savol va Formula bilan AI'dan 100% natija olish",
      channel: "AI Mastery Lab",
      handle: "@ai_mastery",
      channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "Prompt Engineering",
      duration: "27:15",
      views: "64.2K ko'rish",
      time: "5 kun oldin",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description: "Rol, Vazifa, Kontekst, Format va Cheklovlar: professional prompt anatomiyasi."
    },
    {
      id: "v5",
      title: "Python Dasturlash Tili: 0 dan Birinchi Loyihagacha To'liq Qo'llanma",
      channel: "IT Live Academy",
      handle: "@it_live_academy",
      channelAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "Dasturlash",
      duration: "58:30",
      views: "142K ko'rish",
      time: "1 hafta oldin",
      thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      description: "Python asoslari, sintaksis, funksiyalar va mini amaliy topshiriqlar."
    },
    {
      id: "v6",
      title: "Tailwind CSS va Modern UI Dizayn: 2026-yil trendlari va Glassmorphism",
      channel: "DesignPulse",
      handle: "@design_pulse",
      channelAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
      verified: false,
      category: "Web Dizayn",
      duration: "16:40",
      views: "12.8K ko'rish",
      time: "2 hafta oldin",
      thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
      description: "Zamonaviy Dark mode, neon aksentlar va responsive veb-ilova yaratish qoidalari."
    },
    {
      id: "v7",
      title: "Talabalar uchun Samaradorlik (Productivity) sirlari va Vaqtni boshqarish",
      channel: "Hadisa Tech",
      handle: "@hadisa_codes",
      channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "Talabalik Hayoti",
      duration: "19:05",
      views: "9.5K ko'rish",
      time: "3 hafta oldin",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      description: "O'qish, kodlash va shaxsiy rivojlanishni qanday qilib intizom bilan birga olib borish mumkin?"
    },
    {
      id: "v8",
      title: "Make.com va AI orqali Jarayonlarni Avtomatlashtirish darsi",
      channel: "Automation Hero",
      handle: "@automation_hero",
      channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      verified: true,
      category: "Sun'iy Intellekt",
      duration: "25:50",
      views: "31.4K ko'rish",
      time: "1 oy oldin",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      description: "Telegram bot, Google Sheets va OpenAI API modullarini no-code orqali birlashtirish."
    }
  ],

  shorts: [
    {
      id: "s1",
      title: "Dasturlashda 1-kursda qilinadigan 3 ta eng katta xato!",
      tag: "Dasturlash & Maslahat",
      views: "382K",
      likes: 145000,
      liked: false,
      disliked: false,
      commentsCount: 1420,
      sharesCount: "8.2K",
      author: "Hadisa",
      handle: "@hadisa_codes",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      subscribers: "480K",
      isSubscribed: true,
      audioTrack: "Hadisa Beats • Lo-Fi Coding Synth • Original Audio",
      videoThumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      caption: "3 critical mistakes 1st-year CS students make #coding #tech #computerscience #tips #hadisa",
      comments: [
        {
          id: "c1",
          author: "Hadisa",
          handle: "@hadisa_codes",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
          time: "2 soat oldin",
          text: "To'liq yo'l xaritasi va GitHub ombori profilimda! Siz 1-semestrda qanday xatoga yo'l qo'ygansiz? Izohlarda yozib qoldiring 👇",
          likes: 1800,
          isPinned: true
        },
        {
          id: "c2",
          author: "Marcus Dev",
          handle: "@marcus_dev",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
          time: "4 soat oldin",
          text: "2-xato to'ppa-to'g'ri... Haqiqiy algoritmlarni yozish o'rniga 4 kun Neovim sozlash bilan o'tgan kunlarim esimga tushdi 💀",
          likes: 428,
          isPinned: false
        },
        {
          id: "c3",
          author: "Elena UI",
          handle: "@elena_ui",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
          time: "6 soat oldin",
          text: "Orqadagi saundtrek juda ajoyib chiqibdi 🔥 Qaysi darsda audio generatsiyani o'rgangansiz?",
          likes: 89,
          isPinned: false
        }
      ]
    },
    {
      id: "s2",
      title: "Google Stitch va Vibe Coding bilan 5 daqiqada UI dizayn!",
      tag: "Vibe Coding",
      views: "214K",
      likes: 92300,
      liked: false,
      disliked: false,
      commentsCount: 840,
      sharesCount: "5.1K",
      author: "Hadisa",
      handle: "@hadisa_codes",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      subscribers: "480K",
      isSubscribed: true,
      audioTrack: "Cyberpunk Ambient Wave • Tech Synthesizer",
      videoThumb: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      caption: "Figma chizish shart emas! Faqat to'g'ri prompt bering va Google Stitch barcha ekranlarni yaratib beradi ✨ #vibecoding #googlestitch #uiux",
      comments: [
        {
          id: "c201",
          author: "Zack Builds",
          handle: "@zack_builds",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
          time: "1 soat oldin",
          text: "Google Stitch promptining to'liq matnini bering iltimos, juda chiroyli chiqibdi!",
          likes: 312,
          isPinned: false
        }
      ]
    },
    {
      id: "s3",
      title: "Obsidian'da Ikkinchi Miya qurish formulasi (11-dars)",
      tag: "Ikkinchi Miya",
      views: "178K",
      likes: 67400,
      liked: false,
      disliked: false,
      commentsCount: 520,
      sharesCount: "3.9K",
      author: "IT Live Academy",
      handle: "@it_live_academy",
      authorAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80",
      subscribers: "120K",
      isSubscribed: false,
      audioTrack: "Deep Focus Ambient • Calm Alpha Waves",
      videoThumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      caption: "Qaydlar → AI tahlili → Inson tekshiruvi → Obsidian saqlash. Eng samarali o'rganish formulasi! #obsidian #pkm #itlive",
      comments: [
        {
          id: "c301",
          author: "Hadisa",
          handle: "@hadisa_codes",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
          time: "3 soat oldin",
          text: "Kursdagi eng sevimli darslarimdan biri bo'ldi! Barcha dars konspektlarim shu tizimda saqlanmoqda 🧠",
          likes: 540,
          isPinned: true
        }
      ]
    }
  ],

  subscriptions: [
    {
      name: "IT Live Academy",
      handle: "@it_live_academy",
      avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80",
      hasNew: true,
      subscribers: "120K"
    },
    {
      name: "Google Developers",
      handle: "@googledevs",
      avatar: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=100&q=80",
      hasNew: true,
      subscribers: "2.4M"
    },
    {
      name: "Andrej Karpathy",
      handle: "@karpathy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
      hasNew: false,
      subscribers: "850K"
    },
    {
      name: "DesignCourse",
      handle: "@designcourse",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
      hasNew: true,
      subscribers: "1.1M"
    },
    {
      name: "Fireship",
      handle: "@fireship",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      hasNew: false,
      subscribers: "3.2M"
    }
  ],

  playlists: [
    {
      id: "p1",
      title: "Python & Algoritmlar 2026",
      videoCount: 18,
      privacy: "Shaxsiy",
      icon: "lock",
      thumb: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "p2",
      title: "Prompt Engineering Mastery",
      videoCount: 12,
      privacy: "Ommaviy",
      icon: "public",
      thumb: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "p3",
      title: "UI/UX & Vibe Coding",
      videoCount: 9,
      privacy: "Ommaviy",
      icon: "public",
      thumb: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
    }
  ],

  history: [
    {
      id: "h1",
      title: "Google Stitch va Vibe Coding bilan 10 daqiqada Web Ilova yaratish",
      channel: "Hadisa Tech",
      views: "24.5K",
      progress: 85,
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "h2",
      title: "Informatika 1-kurs talabalari uchun Algoritmlar va Ma'lumotlar Tuzilmasi",
      channel: "IT Live Academy",
      views: "89.1K",
      progress: 60,
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "h3",
      title: "Obsidian va AI: Qanday qilib Shaxsiy 'Ikkinchi Miya' qurish mumkin?",
      channel: "Hadisa Tech",
      views: "18.3K",
      progress: 100,
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

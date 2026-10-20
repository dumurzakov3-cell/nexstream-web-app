# Loyiha — NexStream: Video va Shorts Web Ilovasi

## Manba
- IT Live Academy — Prompt Engineering & Vibe Coding kursi
- Bo'lajak 12–13 darslar: **Vibe coding (Google Stitch) → Antigravity: dizayndan ilovaga**
- Muallif: [[Men haqimda]] (Hadisa / @hadijan)

## Qisqa mazmun
Ushbu loyiha Google Stitch orqali prompt asosida dizayn prototipini yaratish va Antigravity agenti yordamida uni to'liq ishlaydigan, interaktiv **Desktop Web ilovaga** (Single Page Application) aylantirish jarayonini aks ettiradi.

## Loyiha arxitekturasi va tarkibi
| Fayl | Tavsif |
|---|---|
| `index.html` | Barcha 6 ta sahifani o'z ichiga olgan asosiy Web interfeys (Tailwind CSS + Material Symbols) |
| `app.js` | Dinamik navigatsiya, Shorts almashinuvi, layk/dislayk hisobi, izohlar tizimi va qidiruv mantiqi |
| `data.js` | Foydalanuvchi profili, videolar, shorts, obunalar, pleylistlar va izohlar ma'lumotlar bazasi |
| `style.css` | Cyberpunk dark rejim, glassmorphism effektlari, silliq animatsiyalar va progress-barlar |
| `DESIGN.md` | Google Stitch tomonidan yaratilgan Material 3 ranglar palitrasi va tipografiya tokenlari |
| `code.html` | Google Stitch'dan olingan dastlabki xom eksport kodi |
| `screen.png` | Google Stitch dizayn prototipi tasviri |

## Asosiy imkoniyatlar
1. **Asosiy sahifa (Home Feed):**
   - 9 ta mavzu bo'yicha toifalar filtri (Barchasi, Dasturlash, Sun'iy Intellekt, Algoritmlar...).
   - Jonli qidiruv tizimi (Sarlavha va kanal nomi bo'yicha darhol filtrlash).
   - 4 ustunli video kartochkalar va tezkor Shorts karuseli.
   - Har qanday videoni bosganda 16:9 formatdagi modal videopleyer ochiladi.

2. **Shorts Cinema Player (Google Stitch dizayni asosida):**
   - 9:16 vertikal video formati va ambient nurli orqa fon.
   - Interaktiv dinamik layk / dislayk tugmalari (hisoblagichlar oshib boradi).
   - Klaviaturadagi `↑` / `↓` tugmalari yoki on-screen tugmalar orqali videolarni almashtirish.
   - **360px Izohlar paneli:** Yangi izoh yozish (darhol Hadisa nomidan tushadi), mavjud izohlarga layk bosish.
   - Ovozni yoqish / o'chirish va havolani buferga nusxalash (Toast bildirishnomasi bilan).

3. **Obunalar (Subscriptions):**
   - Obuna bo'lingan kanallar storis-karuseli va ularning yangi videolari lentasi.

4. **Kashfiyot (Explore):**
   - Trenddagi toifalar gridi va eng mashhur videolar reytingi (#1, #2, #3...).

5. **Kutubxona (Library):**
   - Ko'rilgan videolar tarixi (qizil progress-bar bilan) va pleylistlar to'plami.

6. **Profil va Sozlamalar:**
   - Hadisa shaxsiy kabineti, statistika va ilova parametrlari.

7. **Yangi kontent qo'shish (+ Yuklash):**
   - Yuqori paneldagi "Yuklash" tugmasi orqali yangi Video yoki Short qo'shish imkoniyati.

## Qanday ishga tushiriladi?
- Brauzerda to'g'ridan-to'g'ri ochish: `02-Loyihalar/NexStream-Web-App/index.html` faylini sichqoncha bilan ikki marta bosing.
- Mahalliy server orqali ochish:
  ```bash
  python -m http.server 3000
  ```
  va brauzerda `http://localhost:3000` ga kiring.

## Loyiha holati
- [x] Google Stitch uchun Master prompt va 6 sahifali Web arxitekturasi ishlab chiqildi
- [x] Google Stitch prototipi eksport qilindi (`DESIGN.md`, `code.html`, `screen.png`)
- [x] To'liq dinamik SPA veb-ilovasi dasturlandi (`index.html`, `app.js`, `data.js`, `style.css`)
- [x] Izohlar, layklar, qidiruv, modal pleer va navigatsiya integratsiya qilindi
- [ ] Kelgusida backend va haqiqiy video bazaga (Firebase/Supabase) ulash

## Bog'liq qaydlar
- [[Kurs xaritasi]]
- [[Men haqimda]]
- [[Kurs — Vositalar]]
- [[Kurs — Formulalar]]

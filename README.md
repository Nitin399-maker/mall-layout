# 🛍️ Mall Analytics — Interactive Shopper Journey Simulator

> **This is a demo. It contains no confidential data/IP.**

A **single-page web app** that visualizes an **interactive U-shaped mall walkway** and simulates **shopper movement + persona-based notifications** in real time.

You can:
- 🧭 Click anywhere on the walkway to move the shopper avatar
- 👤 Switch shopper personas (Fashion / Tech / Family / Foodie / Wellness)
- 🔔 Get **personalized notifications** when the shopper gets close to relevant shops
- 📍 See **current closest shop** + **nearby shops**
- 🎚️ Control walking speed with a fixed bottom slider

---

## ✨ Features

- 🗺️ **Interactive SVG mall layout** with a U-shaped path and 60 shop hotspots
- 🧍 **Moving shopper avatar** along the SVG path 
- 🧠 **Persona-driven notifications** (rules per shop per persona)
- 🧾 **Persistent notifications panel** with importance badges and “Why this appeared” reasoning
- 🧰 Shop hover tooltips + nearest-shop highlighting
- 🌙 **Light/Dark/Auto** theme toggle (Bootstrap + dark theme helper)

---

## 🗂️ Project Structure

A typical folder layout:

```
mall-analytics/
├─ index.html
├─ script.js
├─ utils.js
└─ image/
   ├─ <background mall screenshot>
   ├─ jane-doe.webp
   ├─ david-lee.webp
   ├─ emily-turner.webp
   ├─ michael-brown.webp
   └─ sarah-martinez.webp
```

- `index.html`: UI layout (SVG mall map + right-side analytics panel + speed control)
- `script.js`: movement logic, nearest shops detection, notifications panel rendering
- `utils.js`: personas + notification rules + SVG path helpers

---

## ✅ Requirements

- A modern browser (Chrome/Edge/Firefox)
- A local static server (recommended so images load correctly)

No build step required — Bootstrap and icons are loaded via CDN.

---

## 🧭 How to Use

1. **Pick a persona** from the dropdown (top of the right panel).
2. **Click on the walkway** inside the mall SVG to start a journey.
3. Watch:
   - 📍 **Current Location** (closest shop + distance)
   - 🧭 **Nearby Shops** (next 2 closest)
   - 🔔 **Personalized Notifications** (cards appear when relevant shops are nearby)
4. Adjust **Walk Speed** using the bottom slider (Fast ↔ Slow).

---

## 👤 Personas & Notifications

### Personas

Personas are defined in `utils.js`:
- 👗 Emma Chen — Fashion Enthusiast
- 💻 Michael Rodriguez — Tech Professional
- 👩‍👧‍👦 Sarah Johnson — Busy Mom
- ☕ David Kim — Foodie & Coffee Lover
- 🧘‍♀️ Lisa Thompson — Wellness Focused

Each persona has:
- name, type, emoji
- avatar and avatarSmall
- description

---

## 📜 License

Internal / demo use (update as needed).

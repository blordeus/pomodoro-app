# Frontend Mentor — Pomodoro App

![Challenge Difficulty](https://img.shields.io/badge/Difficulty-Advanced-red?style=flat-square)
![Status](https://img.shields.io/badge/Status-Completed-4F8EF7?style=flat-square)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

This is my solution to the [Pomodoro App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G).

## 📸 Preview

![App Preview](./preview.jpg)

## ✅ Features

- Three timer modes — Pomodoro (25 min), Short Break (5 min), Long Break (15 min)
- Animated SVG circular progress ring that drains as time counts down
- START / PAUSE / RESUME / RESTART timer controls
- Settings modal with:
  - Adjustable times for each mode via custom +/− inputs
  - Three font options (Kumbh Sans, Roboto Slab, Space Mono)
  - Three accent color options (Red, Cyan, Purple)
- Settings persist across sessions via localStorage
- Font and color apply globally on the fly without page reload
- Fully responsive — mobile, tablet, and desktop layouts

## 🛠️ Built With

- React 18 (functional components, custom hooks)
- Vite
- CSS3 (custom properties, flexbox)
- SVG `stroke-dashoffset` for the circular progress ring

## 💡 What I Learned

- **SVG circular progress** — calculating `stroke-dasharray` and `stroke-dashoffset` to animate a ring that drains clockwise from 12 o'clock
- **Custom hooks** — separating timer logic (`useTimer`) and settings persistence (`useSettings`) into reusable hooks keeps `App.jsx` clean
- **CSS custom properties at runtime** — applying font and color changes globally by setting `--accent` and `--font-app` on `:root` via `document.documentElement.style.setProperty`
- **Timer state machine** — managing idle → running → paused → complete states cleanly with `useEffect` and `useRef` for the interval

## 🚀 Getting Started

```bash
git clone https://github.com/blordeus/pomodoro-app.git
cd pomodoro-app
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## 🔗 Links

- [Live Demo](https://pomodoro-app-one-phi.vercel.app/)
- [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G)

## 👤 Author

**Bryan Lordeus**
[Portfolio](https://bryanlordeus.com) · [Frontend Mentor](https://www.frontendmentor.io/profile/blordeus) · [GitHub](https://github.com/blordeus)
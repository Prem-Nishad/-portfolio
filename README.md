# Prem Nishad — Portfolio

A code-editor / terminal-inspired developer portfolio, built with React + Vite.

## Stack

- React 18
- Vite 5 (dev server + build tool)
- Plain CSS (no framework, custom design tokens in `src/styles.css`)

## Project structure

```
portfolio-react/
├── index.html              # Vite entry HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx             # React root
    ├── App.jsx              # page layout, wires sections together
    ├── data.js              # skills, projects, nav content
    ├── styles.css            # all styling (design tokens + components)
    ├── assets/
    │   └── prem.jpg          # profile photo
    └── components/
        ├── Sidebar.jsx
        ├── Hero.jsx
        ├── TypedLine.jsx
        ├── SectionHead.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        └── Contact.jsx
```

## Run it locally

You'll need [Node.js](https://nodejs.org) (v18 or newer) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static, deployable site into the `dist/` folder. Preview it with:

```bash
npm run preview
```

## Deploying

The `dist/` folder from `npm run build` can be deployed as-is to Vercel, Netlify, GitHub Pages, or any static host.

## Editing content

Almost everything text-based (skills, the one project, nav labels) lives in `src/data.js` — edit that file to update content without touching component code. Section text (About bio, contact details) lives directly inside each component in `src/components/`.

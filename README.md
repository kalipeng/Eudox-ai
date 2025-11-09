# Eudox AI

Eudox AI is a front-end prototype that recreates a deal-sourcing workspace inspired by modern diligence tools. The interface focuses on a Kanban-style project dashboard and a guided "Create New Project" flow.

## Preview

- Deal overview cards with Apple-style typography and subtle gradients
- Responsive layout with left navigation and project creation drawer
- Accent colors tuned to the user's blue-green palette

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

The Vite dev server will print a local URL (typically `http://localhost:5173`).

## Tech Stack

- React 18
- Vite 5
- CSS Modules (global styles)

## Project Structure

```
frontend/
├─ src/
│  ├─ App.jsx        # Main layout and components
│  ├─ App.css        # Styling for dashboard and drawer
│  ├─ index.css      # Global typography and resets
│  └─ main.jsx       # React entry point
├─ index.html
├─ package.json
└─ vite.config.js
```

## Design Notes

- Typography follows Inter to echo the Apple design language.
- Cards and buttons use high-radius corners and layered shadows for depth.
- The "Create New Project" drawer highlights key fields: basic info, Excel upload, and instructions.

## Deployment

This repository currently contains only the front-end. To deploy, build with Vite and serve the static output or integrate into a larger full-stack setup.

```bash
npm run build
```

The generated files will be written to `frontend/dist/`.

---

Maintained by [kalipeng](https://github.com/kalipeng/).

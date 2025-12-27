# AVAXCHRONICLES
g

This repository has been separated into two subprojects:

- `frontend` — Vite + React application. Run with `npm install` then `npm run dev` inside the `frontend` folder.
- `backend` — Express API server. Run with `npm install` then `npm start` inside the `backend` folder.

Quick start:

1. Install dependencies for both projects:

```bash
cd frontend
npm install
cd ../backend
npm install
```

2. Run backend (default port 4000):

```bash
cd backend
npm start
```

3. Run frontend dev server:

```bash
cd frontend
npm run dev
```

The frontend expects the backend at `/api/*` on the same host — during development use a dev server proxy or run the backend on the same origin (or configure CORS). The backend will also serve the built frontend from `../frontend/dist` when present.

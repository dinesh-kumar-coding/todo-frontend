# ✅ Todo App — Frontend (Full-Stack)

The React frontend for a full-stack to-do application. Add, complete, reorder, and delete tasks — all persisted to a real cloud database via a custom backend API. Tasks survive page refreshes and are stored permanently.

🔗 **Live app:** [todo-frontend live link](https://todo-frontend-din-dev.vercel.app)
🔗 **Backend repo:** [todo-backend](https://github.com/dinesh-kumar-coding/todo-backend)

---

## Features

- **Add tasks** that save to a cloud database
- **Mark tasks complete** (persists across refreshes)
- **Delete tasks** (removed from the database)
- **Reorder tasks** (move up/down)
- **Live count** of remaining tasks
- Clean, warm, minimal UI
- Full **persistence** — refresh the page and your todos are still there (loaded from the database)

## Built with

- **React** (functional components + hooks)
- **Vite** (build tooling)
- **Fetch API** for communicating with the backend
- Custom **Express + MongoDB** backend (see [backend repo](https://github.com/dinesh-kumar-coding/todo-backend))
- Deployed on **Vercel**

## What I learned / concepts used

- Connecting a React frontend to a custom backend API with `fetch`
- **All HTTP methods from the client side:** GET (load todos), POST (create), PUT (toggle complete), DELETE (remove) — using `fetch` with method, headers, and a JSON body
- Managing server data in React state and keeping the UI in sync after each operation
- `useEffect` for loading data on mount; `async/await` with proper error handling
- Working with MongoDB's `_id` field for identifying records
- **Environment variables** (`VITE_API_URL`) to configure the backend URL per environment (local vs deployed)
- **Full-stack deployment** — frontend on Vercel, pointing at a backend deployed separately, talking to a cloud database

## Running locally

```bash
npm install
```

Create a `.env` file in the project root:
```
VITE_API_URL=http://localhost:3000
```
(Point this at your local backend, or your deployed backend URL.)

Then:
```bash
npm run dev
```

> **Note:** this requires the [backend](https://github.com/dinesh-kumar-coding/todo-backend) to be running (locally or deployed) for the app to load and save todos.

## Architecture

```
This App (React)  →  Backend API (Express)  →  MongoDB (Atlas)
```

This is the frontend of a full-stack application — my first project connecting a React UI to a backend and database I built myself.

# 📦 Fullstack Labs Monorepo

A monorepo structure for a fullstack application consisting of an Express + TypeScript API and infrastructure setup for development.

---

## 🗂️ Folder Structure

```
FULLSTACK-LABS-MONOREPO/
├── apps/
│   └── api/                 # Express.js + TypeScript API
│       ├── src/            # Source files
│       │   └── server.ts   # Main server entry point
│       ├── .env            # Environment variables
│       ├── package.json    # API dependencies and scripts
│       └── tsconfig.json   # TypeScript config
├── infra/                  # Infrastructure files (Docker, etc.)
│   └── docker-compose.yml  # Docker Compose config
├── packages/               # (Reserved for shared packages)
├── package.json            # Root-level (optional scripts/deps)
└── .editorconfig, .gitignore, etc.
```

---

## 🚀 Getting Started

### 1. **Install Dependencies**

At root:
```bash
npm install
```

Then inside the API app:
```bash
cd apps/api
npm install
```

---

### 2. **Environment Setup**

Create a `.env` file in `apps/api/`:

```env
PORT=3000
```

---

### 3. **Run the API in Dev Mode**

```bash
cd apps/api
npm run dev
```

Runs with `nodemon` + `ts-node`. Watches `src/` folder for `.ts` file changes.

---

## 📡 API Endpoints

| Method | Route       | Description        |
|--------|-------------|--------------------|
| GET    | `/health`   | Health check route |

---

## ⚙️ Tech Stack

- **Node.js + Express**
- **TypeScript**
- **Zod** (for validation)
- **dotenv**
- **Prisma** (setup ready, optional)
- **Nodemon** + **ts-node** (dev tooling)
- **Docker Compose** (infra)

---

## 🐳 Docker (Optional Setup)

To spin up services with Docker Compose:
```bash
docker-compose up --build
```

Make sure `Dockerfile` and service entries are defined under `infra/docker-compose.yml`.

---

## 🧪 Future Ideas

- Add Prisma schema and migrations.
- Add tests and GitHub Actions.
- Add a shared `utils` or `ui` package inside `packages/`.

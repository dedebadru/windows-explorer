# Windows Explorer

## Project Overview
Folder and file explorer using `ElysiaJS` and `Vue.js`.

## Prerequisites
- Docker
- Docker Compose
- Bun
- MySQL

## Getting Started

### Running the Application
Clone the repository:
```bash
git clone https://github.com/dedebadru/windows-explorer.git
cd windows-explorer
```

Install dependency:
```bash
bun install:all
```

Run seed data:
```bash
bun seed
```

Start the application:
```bash
bun dev
```

### Backend (Bun)
- Located in `./backend`
- Uses `ElysiaJS` framework
- Runs on port `8080`

### Frontend (Bun)
- Located in `./frontend`
- Uses `Vue.js`
- Runs on port `8088`

## Technologies
- Backend: Bun, ElysiaJS, TypeScript
- Frontend: Bun, Vue.js, TypeScript
- Database: MySQL
- Containerization: Docker, Docker Compose

# Windows Explorer

<img width="100%" alt="Windows Explorer" src="https://github.com/user-attachments/assets/7ad86cd0-14e2-4c85-9c98-e2c50d2d116d" />

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

Running Tests:
```bash
bun test
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

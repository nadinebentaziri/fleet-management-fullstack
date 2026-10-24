# Flotty — Fleet Management Web Application

**Full-stack academic project | React · Node.js · Express · PostgreSQL**

Flotty is a fleet management web application developed as an academic final-year project. It brings together an administrative dashboard, user management, assignment workflows, incident reports, and alerts in a web-based interface.

The project demonstrates the integration of a React frontend with a REST-style Express API and a PostgreSQL database managed through Sequelize.

## Key Features

- **Administrative dashboard:** interface with charts and summary components for fleet-related information.
- **User management:** user-related API operations, including registration and account management.
- **Role-aware interface:** additional navigation and views for administrators.
- **Assignments:** view and manage assignment-related information.
- **Incident reports and alerts:** dedicated screens and backend routes for reporting and monitoring.
- **Authentication:** JWT-based login flow and bcrypt password hashing in the backend.

> Features listed above are based on the repository's source code. Complete end-to-end behavior has not yet been independently validated.

## Technology Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 18, JavaScript, Material UI, React Router |
| State & API | Redux Toolkit, Axios |
| Data visualization | Nivo charts, MUI Data Grid |
| Backend | Node.js, Express.js |
| Database | PostgreSQL, Sequelize ORM |
| Authentication | JSON Web Tokens (JWT), bcrypt |
| Version control | Git, GitHub |

## Project Structure

```text
fleet-management-fullstack/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── Api/
│       ├── components/
│       ├── scenes/
│       ├── service/
│       └── state/
├── PFE-backend/            # Express backend
│   ├── config/
│   ├── controller/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   └── server.js
├── .gitignore
└── README.md
```

## Run Locally

### Prerequisites

- Node.js and npm
- PostgreSQL
- Git

### 1. Clone the repository

```bash
git clone https://github.com/nadinebentaziri/fleet-management-fullstack.git
cd fleet-management-fullstack
```

### 2. Configure PostgreSQL

Create a local PostgreSQL database named `flotty` or choose your own database name.

Use `PFE-backend/.env.example` as a reference for the configuration values:

```dotenv
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=flotty
DB_USER=postgres
DB_PASSWORD=your_local_password
JWT_SECRET=your_long_random_secret
```

**Important:** The backend currently reads environment variables through `process.env` but does not automatically load a `.env` file. Configure these variables in your local process environment before starting the API. Never commit real credentials.

### 3. Start the backend

```bash
cd PFE-backend
npm ci
node server.js
```

The API listens on `http://127.0.0.1:3006` by default.

### 4. Start the frontend

In a second terminal, from the repository root:

```bash
cd client
npm ci
npm start
```

The frontend's Axios configuration currently points to `http://127.0.0.1:3006`.

**Setup note:** Database tables, seed data and a working login account may require additional local setup. The project has not been verified as a one-command installation.

## Screenshots

Screenshots of the dashboard, login page and management workflows will be added after local verification. No demo images are included in this repository yet.

## What This Project Demonstrates

- Building a modular frontend with reusable React components.
- Connecting client-side screens to backend API endpoints.
- Modeling application data with Sequelize and PostgreSQL.
- Implementing authentication-related functionality.
- Presenting business information in dashboard views and data grids.
- Structuring and documenting a full-stack application with Git and GitHub.

## Current Status & Limitations

This is an **academic portfolio project**, not a production deployment. Its source code has been prepared for sharing, but full end-to-end tests, automated test coverage, authorization/security review and deployment verification are still pending. Do not deploy with real personal or company data without additional review.

## Author

Developed as a final-year academic project.

GitHub: [@nadinebentaziri](https://github.com/nadinebentaziri)

## License

No open-source license has been selected yet. The source code is publicly viewable; reuse rights are not granted unless a license is added.

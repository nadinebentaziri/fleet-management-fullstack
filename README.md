# Flotty — Fleet Management Web Application

Academic full-stack project featuring an administrative dashboard, user management, vehicle/resource assignments, incident reports, and alerts.

## Tech stack
- **Frontend:** React 18, Material UI, Redux Toolkit, Nivo charts, Axios
- **Backend:** Node.js, Express, Sequelize, JWT, bcrypt
- **Database:** PostgreSQL (configure locally)

## Structure
- `client/` — React user interface
- `PFE-backend/` — Express API and Sequelize models

## Local setup
1. Install Node.js, npm and PostgreSQL.
2. Create an empty PostgreSQL database.
3. Copy `PFE-backend/.env.example` to `PFE-backend/.env` and supply your own credentials.
4. Export the environment variables from that file before running the backend (the app does not load `.env` automatically).
5. In `PFE-backend/`, run `npm ci` then `node server.js` (API default port `3006`).
6. In `client/`, run `npm ci` then `npm start`.

**Important:** The project was cleaned for sharing, but end-to-end execution has not been validated. Schema initialization/seed data may still be necessary. The existing routes should be reviewed for authorization before any public deployment. Development use only; not production hardened.

## GitHub publishing
The repository excludes `node_modules`, Git history, local secrets and generated builds. Only publish media and code you have permission to share.

## Portfolio summary
Built a full-stack fleet administration application with dashboard visualizations, user administration, resource assignment, complaints and alerts.

// Supply secrets using environment variables; never commit local credentials.
const common = {dialect: 'postgres', logging: false};
module.exports = Object.fromEntries(['development','test','production'].map(env => [env, {
  ...common, username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD, database: process.env.DB_NAME || 'flotty',
  host: process.env.DB_HOST || '127.0.0.1', port: Number(process.env.DB_PORT || 5432)
}]));

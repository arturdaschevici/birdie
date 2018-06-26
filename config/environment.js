module.exports = {
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.BIRDIE_HOST,
    user: process.env.BIRDIE_USER,
    password: process.env.BIRDIE_PASSWORD,
    port: process.env.BIRDIE_PORT,
    database: process.env.BIRDIE_NAME
  }
};

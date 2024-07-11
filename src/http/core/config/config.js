module.exports = {
  development: {
    host: "127.0.0.1",
    dialect: "sqlite",
    storage: "./src/http/core/db/database.sqlite"
  },
  test: {
    host: "127.0.0.1",
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    host: process.env.TASK_HOST,
    dialect: process.env.TASK_DIALET,
    protocol: "sqlite",
    storage: process.env.TASK_PATH,
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false // Use false apenas se você confia na rede
      }
  }
  }
}
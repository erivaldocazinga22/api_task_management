module.exports = {
  development: {
    host: "127.0.0.1",
    dialect: "sqlite",
    storage: "./src/http/core/db/database.db"
  },
  test: {
    host: "127.0.0.1",
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    dialect: process.env.TASK_DIALET,
    storage: process.env.TASK_PATH 
  }
}


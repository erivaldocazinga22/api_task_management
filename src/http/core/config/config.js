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
    dialect: "sqlite",
    protocol: "sqlite",
    storage: "./src/http/core/db/database.sqlite",
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false // Use false apenas se você confia na rede
      }
  }
  }
}
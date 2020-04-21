// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename:
        "C:/Users/poker/Desktop/LambdaSchoolWork/Backend/node-auth2-project/knex/users.sqlite3",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      filename: "./migrations",
    },
    seeds: {
      filename: "./seeds",
    },
  },
};
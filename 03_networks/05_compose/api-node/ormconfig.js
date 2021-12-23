const isDev = process.env.NODE_ENV == "development";

const path = !isDev ? "./build/src" : "./src";

module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${path}/models/*.ts`],
  migrations: [`${path}/database/migrations/*.ts`],
  cli: {
    migrationsDir: `${path}/database/migrations`,
  },
};

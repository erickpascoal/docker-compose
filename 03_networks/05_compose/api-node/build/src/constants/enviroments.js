"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviroments = void 0;
exports.enviroments = {
    NODE_ENV: process.env.NODE_ENV,
    database: {
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_DATABASE: process.env.DB_DATABASE,
    },
};

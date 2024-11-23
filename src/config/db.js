import { config } from "dotenv";
config();
export const DB = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    name: process.env.PG_NAME,
    password: process.env.PG_PASSWORD,
};

import knex from "knex";
import { DB } from "../config/index.js";
export const erp = knex({
    client: "pg",
    connection: {
        user: DB.user,
        database: DB.name,
        host: DB.host,
        port: DB.port,
        password: DB.password,
    },
});
export default erp;

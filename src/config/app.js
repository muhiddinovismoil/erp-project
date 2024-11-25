import { config } from "dotenv";
config();
export const application = {
    port: process.env.PORT,
    clinetId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
};

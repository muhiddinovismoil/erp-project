import app from "./src/app.js";
import { logger } from "./src/utils/index.js";
import { application } from "./src/config/index.js";
const bootstrap = async () => {
    try {
        app.listen(application.port, async () => {
            logger.info(`SERVER IS RUNNING ON PORT: ${application.port}`);
        });
    } catch (error) {
        logger.error(error.message);
    }
};
bootstrap();

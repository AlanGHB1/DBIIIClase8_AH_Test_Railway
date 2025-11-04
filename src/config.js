import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.resolve(__dirname, ".env") });

export const PORT_AH = process.env.PORT || process.env.PORT_AH || 3000;
export const DB_HOST_AH = process.env.DB_HOST_AH;
export const DB_USER_AH = process.env.DB_USER_AH;
export const DB_PASSWORD_AH = process.env.DB_PASSWORD_AH || "";
export const DATABASE_AH = process.env.DATABASE_AH;
export const DB_PORT_AH = process.env.DB_PORT_AH;

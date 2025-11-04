import { createPool } from "mysql2/promise";
import {
  DATABASE_AH,
  DB_HOST_AH,
  DB_PASSWORD_AH,
  DB_PORT_AH,
  DB_USER_AH,
} from "./config.js";

export const pool_ah = createPool({
  host: DB_HOST_AH,
  user: DB_USER_AH,
  password: DB_PASSWORD_AH,
  port: DB_PORT_AH,
  database: DATABASE_AH,
});

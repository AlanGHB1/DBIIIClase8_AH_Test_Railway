import { pool_ah } from "../db.js";

export const index_ah = (req, res) =>
  res.json({ message: "Bienvenido a la API" });

export const ping_ah = async (req, res) => {
  const [result] = await pool_ah.query('SELECT "pong" as result');
  res.json(result[0]);
};

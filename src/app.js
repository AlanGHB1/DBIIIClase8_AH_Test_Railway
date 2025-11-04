import express from "express";
import morgan from "morgan";

import rutasEmpleados_ah from "./routes/empleados.routes.js";
import rutasIndice_ah from "./routes/index.routes.js";

const app_ah = express();

app_ah.use(morgan("dev"));
app_ah.use(express.json());

app_ah.use("/", rutasIndice_ah);
app_ah.use("/api", rutasEmpleados_ah);

app_ah.use((req, res, next) => {
  res.status(404).json({ message: "No encontrado" });
});

export default app_ah;

import { Router } from "express";
import {
  crearEmpleado_ah,
  eliminarEmpleado_ah,
  obtenerEmpleado_ah,
  obtenerEmpleados_ah,
  actualizarEmpleado_ah,
} from "../controllers/empleados.controller.js";

const router_ah = Router();

// Obtener todos los empleados
router_ah.get("/empleados", obtenerEmpleados_ah);

// Obtener un empleado
router_ah.get("/empleados/:id", obtenerEmpleado_ah);

// Eliminar un empleado
router_ah.delete("/empleados/:id", eliminarEmpleado_ah);

// Crear un empleado
router_ah.post("/empleados", crearEmpleado_ah);

// Actualizar un empleado
router_ah.put("/empleados/:id", actualizarEmpleado_ah);

export default router_ah;

import { pool_ah } from "../db.js";

export const obtenerEmpleados_ah = async (req, res) => {
  try {
    const [rows] = await pool_ah.query(
      "SELECT id_ah AS id, nombre_ah AS nombre, salario_ah AS salario FROM td_empleados_ah"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error en obtenerEmpleados_ah:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const obtenerEmpleado_ah = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool_ah.query(
      "SELECT id_ah AS id, nombre_ah AS nombre, salario_ah AS salario FROM td_empleados_ah WHERE id_ah = ?",
      [id]
    );

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error en obtenerEmpleado_ah:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const eliminarEmpleado_ah = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool_ah.query(
      "DELETE FROM td_empleados_ah WHERE id_ah = ?",
      [id]
    );

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Error en eliminarEmpleado_ah:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const crearEmpleado_ah = async (req, res) => {
  try {
    const { nombre, salario } = req.body;
    const [rows] = await pool_ah.query(
      "INSERT INTO td_empleados_ah (nombre_ah, salario_ah) VALUES (?, ?)",
      [nombre, salario]
    );
    res.status(201).json({ id: rows.insertId, nombre, salario });
  } catch (error) {
    console.error("Error en crearEmpleado_ah:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const actualizarEmpleado_ah = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, salario } = req.body;

    const [result] = await pool_ah.query(
      "UPDATE td_empleados_ah SET nombre_ah = IFNULL(?, nombre_ah), salario_ah = IFNULL(?, salario_ah) WHERE id_ah = ?",
      [nombre, salario, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Empleado no encontrado" });

    const [rows] = await pool_ah.query(
      "SELECT id_ah AS id, nombre_ah AS nombre, salario_ah AS salario FROM td_empleados_ah WHERE id_ah = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (error) {
    console.error("Error en actualizarEmpleado_ah:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

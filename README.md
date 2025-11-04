# Clase N°8 – API REST (Railway) + Sequelize CLI

Proyecto dividido en 2 fases:

- Fase 1: API REST con Node.js, Express y MySQL, desplegada en Railway.
- Fase 2: Aplicación generada con `sequelize-cli` (Express + HBS) con contenido educativo en `views/index.hbs` sobre buenas prácticas en APIs REST.

---

## Demo (Railway)

- Base de la API: `https://dbiiiclase8ahtestrailway-production.up.railway.app`
- Endpoint de ejemplo: `https://dbiiiclase8ahtestrailway-production.up.railway.app/api/empleados`

---

## Requisitos

- `Node.js >= 16`
- `npm >= 8`
- MySQL 5.7/8.x

---

## Estructura del repositorio

- `src/` API REST (Fase 1)
  - `app.js` configuración de Express
  - `index.js` arranque del servidor
  - `config.js` variables de entorno
  - `db.js` pool de MySQL (`mysql2/promise`)
  - `controllers/` lógica de negocio (empleados, índice)
  - `routes/` rutas de Express (`/api/empleados`, `/`, `/ping`)
- `db/db_company_ah.sql` script de base de datos inicial
- `video-2/sequelize_cli/` proyecto `sequelize-cli` (Fase 2)
  - `app.js`, `bin/www` servidor Express clásico
  - `config/config.json` configuración de Sequelize
  - `models/`, `migrations/`, `seeders/` estructura de ORM
  - `views/index.hbs` contenido educativo de buenas prácticas

---

## Fase 1: API REST (Node.js + Express + MySQL)

### Instalación y configuración local

1) Clona el repo e instala dependencias:

```bash
npm install
```

2) Crea la base de datos local usando el script:

```sql
-- Archivo: db/db_company_ah.sql
CREATE DATABASE IF NOT EXISTS db_company_ah;
USE db_company_ah;
-- Tabla y datos de ejemplo incluidos en el script
```

3) Configura las variables de entorno en `src/.env` (el proyecto las carga desde `src/config.js`):

```env
PORT_AH=3000
DB_HOST_AH=127.0.0.1
DB_USER_AH=root
DB_PASSWORD_AH=
DB_PORT_AH=3306
DATABASE_AH=db_company_ah
```

4) Ejecuta en desarrollo:

```bash
npm run dev
```

5) Arranque en producción/local:

```bash
npm start
```

El servidor escucha en `http://localhost:PORT_AH` y expone los endpoints bajo `/api`.

### Endpoints principales

- `GET /` → `{ message: "Bienvenido a la API" }`
- `GET /ping` → `{ result: "pong" }` (salud de DB)
- CRUD de empleados (prefijo `/api`):
  - `GET /api/empleados` → lista de empleados
  - `GET /api/empleados/:id` → detalle de un empleado
  - `POST /api/empleados` → crea empleado
    - Body JSON: `{ "nombre": string, "salario": number }`
  - `PUT /api/empleados/:id` → actualiza empleado (parcial con `IFNULL`)
    - Body JSON: `{ "nombre"?: string, "salario"?: number }`
  - `DELETE /api/empleados/:id` → elimina empleado

Ejemplo de creación:

```bash
curl -X POST http://localhost:3000/api/empleados \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Ada Lovelace","salario":90000}'
```

### Formato de respuestas y manejo de errores

Basado en las buenas prácticas del material (`views/index.hbs`):

- Éxito: `200/201` → `{ ok: true, data: ... }`
- Error de dominio/validación: `400/409` → `{ ok: false, error: { code, message, details } }`
- No encontrado: `404` → `{ ok: false, error: { code: "NOT_FOUND", message } }`
- Interno: `500` → `{ ok: false, error: { code: "INTERNAL_ERROR", message } }`
- Útil incluir `X-Request-Id` para trazabilidad.

Nota: En el código actual, las respuestas de error son mensajes simples. El contenido de `index.hbs` sirve como guía para evolucionar el manejo de errores hacia un formato uniforme.

### Pruebas

- Scripts disponibles:
  - `npm test` → corre `jest` (usa `supertest` para endpoints)
  - `npm run dev` → desarrollo con `nodemon`

Si agregas tests, colócalos bajo una convención compatible con `jest`.

### Despliegue en Railway

- Variables de entorno: configura las mismas de `src/.env` en el panel de Railway (`PORT`, `DB_HOST_AH`, `DB_USER_AH`, `DB_PASSWORD_AH`, `DB_PORT_AH`, `DATABASE_AH`).
- Comando de inicio: `npm start` (apunta a `node src/index.js`).
- Base de datos: puedes usar un plugin MySQL de Railway o un servicio externo. Asegúrate de que la app tenga acceso de red a la DB.

---

## Fase 2: Proyecto Sequelize CLI (Express + HBS)

Ubicación: `video-2/sequelize_cli`

### Objetivo

- Demostrar estructura de un proyecto con `sequelize-cli` y exponer contenido educativo sobre buenas prácticas de APIs REST en `views/index.hbs` usando `Tailwind` y `HBS`.

### Instalación

```bash
cd video-2/sequelize_cli
npm install
```

### Configuración de Sequelize

- Archivo: `config/config.json`
- Dialecto: `mysql`
- Ambientes: `development`, `test`, `production`
- Ajusta `username`, `password`, `database`, `host` según tu entorno local o servicio gestionado.

### Comandos comunes

```bash
# Ejecutar servidor (Express clásico en puerto 3000 por defecto)
npm start

# Migraciones y seeds (si defines modelos/migraciones/semillas)
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npx sequelize-cli db:migrate:undo
```

### Vistas

- `views/index.hbs` contiene la guía de buenas prácticas:
  - Patrón de respuesta `{ ok, data, error, requestId }`
  - Manejo de errores centralizados
  - Códigos HTTP consistentes

Acceso local: `http://localhost:3000/`

---

## Autor y crédito

- Autor: `Alan Hidalgo`
- Universidad Nueva Esparta

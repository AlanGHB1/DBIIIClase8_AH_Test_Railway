import app_ah from "./app.js";
import { PORT_AH } from "./config.js";

app_ah.listen(PORT_AH);
console.log(`Server on port http://localhost:${PORT_AH}`);

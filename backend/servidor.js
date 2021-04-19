import express from "express";
import dotenv from "dotenv";
import conndb from "./db/db.js";
import rutasProductos from "./rutas/rutasProducto.js";
import rutasUsu from "./rutas/rutasUsu.js";

dotenv.config();
conndb();

const app = express();
// app.use(express.json);
app.get("/", (req, res) => {
  res.send("API ");
});

app.use("/api/productos", rutasProductos);
app.use("/api/usu", rutasUsu);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`servidor en puerto: ${PORT}`));

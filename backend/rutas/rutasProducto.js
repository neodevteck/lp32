import express from "express";
import {
  getProductos,
  getProductosxId,
} from "../controladores/controladorProducto.js";
import Producto from "../modelos/modeloProducto.js";
const router = express.Router();

router.route("/").get(getProductos);
router.route("/:id").get(getProductosxId);

export default router;

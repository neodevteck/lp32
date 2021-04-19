import express from "express";
import { getUsu } from "../controladores/controladorUsu.js";
import Usu from "../modelos/modeloUsu.js";
const router = express.Router();

router.route("/login").post(getUsu);

export default router;

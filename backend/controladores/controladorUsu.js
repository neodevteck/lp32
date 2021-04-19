import Usu from "../modelos/modeloUsu.js";

const getUsu = async (req, res) => {
  const { email, clave } = req.body;
  res.send({
    email,
    clave,
  });
};

export { getUsu };

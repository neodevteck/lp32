import Producto from "../modelos/modeloProducto.js";

const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find({});
    res.json(productos);
  } catch (error) {
    res.json({ error });
  }
};

const getProductosxId = async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ msg: "producto no encontrado" });
  }
};
export { getProductos, getProductosxId };

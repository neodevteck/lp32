import mongoose from "mongoose";

const resenaSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    calificacion: {
      type: String,
      required: true,
    },
    comentario: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productoSchema = mongoose.Schema(
  {
    usu: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Usu",
    },
    nombre: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    resenas: [resenaSchema],
    calificacion: {
      type: Number,
      required: true,
      default: 0,
    },
    numResenas: {
      type: Number,
      required: true,
      default: 0,
    },
    precio: {
      type: Number,
      required: true,
      default: 0,
    },
    cantidadEnBodega: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;

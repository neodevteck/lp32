import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema(
  {
    usu: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Usu",
    },
    pedidoProductos: [
      {
        nombre: { type: String, required: true },
        cantidad: { type: Number, required: true },
        img: { type: String, required: true },
        precio: { type: Number, required: true },
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Producto",
        },
      },
    ],
    direccionEnvio: {
      direccion: { type: String, required: true },
      ciudad: { type: String, required: true },
      pais: { type: String, required: true },
      codigoPostal: { type: String, required: true },
      detalleResidencia: { type: String, required: true },
    },
    metodoPago: {
      type: String,
      required: true,
    },
    resultadoPago: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    valorImpuesto: {
      type: Number,
      required: true,
      default: 0,
    },
    valorEnvio: {
      type: Number,
      required: true,
      default: 0,
    },
    valorTotal: {
      type: Number,
      required: true,
      default: 0,
    },
    validaPago: {
      type: Boolean,
      required: true,
      default: false,
    },
    pagadoEn: {
      type: Date,
    },
    validaEntrega: {
      type: Boolean,
      required: true,
      default: false,
    },
    entregadoEn: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;

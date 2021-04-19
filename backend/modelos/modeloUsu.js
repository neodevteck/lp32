import mongoose from "mongoose";

const usuSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    clave: {
      type: String,
      required: true,
    },
    validaAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Usu = mongoose.model("Usu", usuSchema);

export default Usu;

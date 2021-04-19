import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Estrellas from "../componentes/Estrellas";
const Producto = ({ producto }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/producto/${producto._id}`}>
        <Card.Img src={producto.img} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/producto/${producto._id}`}>
          <Card.Title as="div">
            <strong>{producto.nombre}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as="div">
        <div className="py-3">
          <Estrellas
            valor={producto.calificacion}
            texto={`${producto.numResenas} reseñas`}
            colorEstrella="#c1ad65"
          />
        </div>
      </Card.Text>
      <Card.Text as="h3">${producto.precio}</Card.Text>
    </Card>
  );
};

export default Producto;

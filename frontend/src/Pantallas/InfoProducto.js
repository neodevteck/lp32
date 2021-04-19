import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Estrellas from "../componentes/Estrellas";

const InfoProducto = ({ match }) => {
  const [producto, setProducto] = useState({});
  useEffect(() => {
    const fetchProducto = async () => {
      const { data } = await axios.get(`/api/productos/${match.params.id}`);
      setProducto(data);
    };
    fetchProducto();
  }, [match]);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Regresar
      </Link>
      <Row>
        <Col md={6}>
          <Image src={producto.img} alt={producto.nombre} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{producto.nombre}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Estrellas
                valor={producto.calificacion}
                texto={producto.nombre}
                colorEstrella="#c1ad65"
              />
            </ListGroup.Item>
            <ListGroup.Item>Precio : ${producto.precio}</ListGroup.Item>
            <ListGroup.Item>
              Descripcion : {producto.descripcion}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Precio:</Col>
                  <Col>
                    <strong>${producto.precio}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
              <Row>
                <Col>Estado:</Col>
                <Col>
                  {producto.cantidadEnBodega > 0 ? "Disponible" : "Agotado"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn btn-block"
                type="button"
                disabled={producto.cantidadEnBodega === 0}
              >
                Agregar a carrito
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default InfoProducto;

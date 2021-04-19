import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Producto from "../componentes/Producto";
//import products from "../products";

const HomeScreen = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchProductos = async () => {
      const { data } = await axios.get("/api/productos");
      setProductos(data);
    };
    fetchProductos();
  }, []);

  return (
    <>
      <h1>Productos mas recientes</h1>
      <Row>
        {productos.map((producto) => (
          <Col key={producto._id} sm={12} md={6} lg={4}>
            <Producto producto={producto} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

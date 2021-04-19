import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import HomeScreen from "./Pantallas/HomeScreen";
import InfoProducto from "./Pantallas/InfoProducto";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/Producto/:id" component={InfoProducto} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

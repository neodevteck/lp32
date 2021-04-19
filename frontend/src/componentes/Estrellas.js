import React from "react";

const Estrellas = ({ valor, texto, colorEstrella }) => {
  return (
    <div className="estrellas">
      <span>
        <i
          style={{ color: `${colorEstrella}` }}
          className={
            valor >= 1
              ? "fas fa-star"
              : valor >= 0.5
              ? "fas fa-star-half-alt "
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: `${colorEstrella}` }}
          className={
            valor >= 2
              ? "fas fa-star"
              : valor >= 1.5
              ? "fas fa-star-half-alt "
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: `${colorEstrella}` }}
          className={
            valor >= 3
              ? "fas fa-star"
              : valor >= 2.5
              ? "fas fa-star-half-alt "
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: `${colorEstrella}` }}
          className={
            valor >= 4
              ? "fas fa-star"
              : valor >= 3.5
              ? "fas fa-star-half-alt "
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: `${colorEstrella}` }}
          className={
            valor >= 5
              ? "fas fa-star"
              : valor >= 4.5
              ? "fas fa-star-half-alt "
              : "far fa-star"
          }
        ></i>
      </span>
      <span>{texto && texto}</span>
    </div>
  );
};

export default Estrellas;

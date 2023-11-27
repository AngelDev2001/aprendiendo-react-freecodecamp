import React from "react";
import '../styles/Testimonio.css';

export const Testimonio = (props) => {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/testimonios-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">
            "{props.children}"
        </p>
      </div>
    </div>
  );
};

import React from "react";
import "../hojas_de_estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt="Foto de perrito beio"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>
            {props.nombre} en {props.pais}
          </strong>
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;

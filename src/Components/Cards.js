import React from "react";
import { Card } from "react-bootstrap";
import VModal from "./Modal";

const Cards = (props) => {
  return (
    <div style={{ paddingLeft: "10rem" }}>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={props.heroe.imagen} />
        <Card.Body>
          <Card.Title>Nombre: {props.heroe.nombre}</Card.Title>
          <Card.Text>Edad: {props.heroe.edad}</Card.Text>
          <VModal></VModal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
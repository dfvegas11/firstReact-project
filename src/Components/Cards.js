import React from "react";
import { Card } from "react-bootstrap";
import VModal from "./Modal";

const Cards = (props) => {
  return (
    <div className="px-5">
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={props.heroe.imagen} />
        <Card.Body>
          <Card.Title>{props.heroe.nombre}</Card.Title>
          <VModal heroe={props.heroe}></VModal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;

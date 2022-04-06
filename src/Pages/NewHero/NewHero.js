import React from "react";
import { Form, Button } from "react-bootstrap";

const NewHero = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name="name" type="text" placeholder="Nombre de heroe" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Edad</Form.Label>
        <Form.Control name="edad" type="number" placeholder="Edad" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control name="imagen" type="text" placeholder="Imagen" />
      </Form.Group>

      <Button variant="primary" type="button">
        Submit
      </Button>
    </Form>
  );
};

export default NewHero;

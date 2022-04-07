import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const NewHero = ({ onSubmit }) => {
  const [heroe, setHeroe] = useState({
    nombre: "",
    nombreReal: "",
    edad: "",
    imagen: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setHeroe({
      ...heroe,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form style={{ margin: "30px" }}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          name="nombre"
          type="text"
          placeholder="Nombre de heroe"
          value={heroe.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nombre de pila</Form.Label>
        <Form.Control
          name="nombreReal"
          type="text"
          placeholder="Nombre real"
          value={heroe.nombreReal}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Edad</Form.Label>
        <Form.Control
          name="edad"
          type="number"
          placeholder="Edad"
          value={heroe.edad}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          name="imagen"
          type="text"
          placeholder="Imagen"
          value={heroe.imagen}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          name="descripcion"
          type="text"
          placeholder="Descripcion del heroe"
          value={heroe.descripcion}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="button" onClick={() => onSubmit(heroe)}>
        Crear
      </Button>
    </Form>
  );
};

export default NewHero;

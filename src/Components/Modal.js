import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const VModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Detalles
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heroe.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Nombre: {props.heroe.nombreReal}</div>
          <div>Edad: {props.heroe.edad}</div>
          <div>Descripcion: {props.heroe.descripcion}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VModal;

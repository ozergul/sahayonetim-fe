import { NextPage } from "next";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface ModalFormProps {
  buttonTitle: string;
  saveEvent: () => void;
}

const ModalForm: NextPage<ModalFormProps> = ({
  children,
  buttonTitle,
  saveEvent,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" className="mr-2" onClick={handleShow}>
        {buttonTitle}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{buttonTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              saveEvent();
              handleClose();
            }}
          >
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;

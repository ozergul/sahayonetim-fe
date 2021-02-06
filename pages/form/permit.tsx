import React from "react";
import { NextPage } from "next";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout";
const Permit: NextPage = () => {
  const { handleSubmit } = useForm();
  const [show, setShow] = React.useState(true);
  const [sent, setSend] = React.useState(false);
  const onSubmit = (data) => {
    setSend(true);
  };

  return (
    <div>
      <Layout pageTitle={"İzin Formu"}>
        <h4>İzin formu</h4>
        {show && (
          <Alert variant="danger" dismissible onClose={() => setShow(false)}>
            <Alert.Heading>Uyarı</Alert.Heading>
            <p>
              İzin formunu minimum 1 gün sonrası olan izinler için kullanınız!
            </p>
          </Alert>
        )}
        <Row>
          <Col xs={12} md={6}>
            {sent && (
              <Alert variant="success">
                <Alert.Heading>Başarılı</Alert.Heading>
                <p>
                  İzin talebi başarıyla gönderildi. Yeni bir izin talebinde
                  bulunmak için{" "}
                  <b onClick={() => setSend(false)}>tıklayınız.</b>
                </p>
              </Alert>
            )}
            {!sent && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Control type="text" placeholder="Ad Soyad" name="name" />
                <br />
                <Form.Control
                  type="text"
                  placeholder="İzin Alınacak Tarih"
                  name="date"
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="İzin Alınacak Gün Sayısı"
                  name="day"
                />
                <br />
                <Form.Control
                  type="te"
                  placeholder="İzin Sebebi"
                  name="day"
                  as="textarea"
                />
                <br />
                <Button onClick={onSubmit}>İzin Talebini Gönder</Button>{" "}
              </form>
            )}
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Permit;

import React from "react";
import { NextPage } from "next";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout";

const Request: NextPage = () => {
  const { handleSubmit } = useForm();
  const [sent, setSend] = React.useState(false);
  const onSubmit = (data) => {
    setSend(true);
  };

  return (
    <div>
      <Layout pageTitle={"Talep Formu"}>
        <h4>Talep formu</h4>
        <hr />
        <Row>
          <Col xs={12} md={6}>
            {sent && (
              <Alert variant="success">
                <Alert.Heading>Başarılı</Alert.Heading>
                <p>
                  Talebiniz başarıyla gönderildi. Yeni talepte bulunmak için{" "}
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
                  placeholder="Talep konusu"
                  name="topic"
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="İlgili departman"
                  name="department"
                />
                <br />
                <Form.Control
                  type="te"
                  placeholder="Talep Detayı"
                  name="detail"
                  as="textarea"
                />
                <br />
                <Button onClick={onSubmit}>Talebini Gönder</Button>
              </form>
            )}
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Request;

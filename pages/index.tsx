import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { Alert, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { workers } from "./workers";
import { materials } from "./materials";
import { shifts } from "./shifts";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Alert variant="success">
          <Alert.Heading>
            Merhaba Saha Yönetim Uygulamasına hoşgeldin!
          </Alert.Heading>
          <p>Bu uygulama ile neler yapabilirsin:</p>
          <ul>
            <li>Çalışan ekle/çıkar</li>
            <li>Malzeme kaydı oluştur</li>
            <li>Tutanakları düzenle</li>
            <li>Mesaileri izle</li>
            <li>Evrakları yönet</li>
          </ul>
        </Alert>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Çalışanlar</Card.Title>
                <Card.Text>Toplam çalışan sayısı: {workers.length}</Card.Text>
                <Link href={"/workers"}>
                  <Card.Link>Çalışanları Yönet</Card.Link>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Malzemeler</Card.Title>
                <Card.Text>
                  Toplam aktif malzeme sayısı: {materials.length}
                </Card.Text>
                <Link href={"/materials"}>
                  <Card.Link>Malzeme Ekle</Card.Link>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Mesailer</Card.Title>
                <Card.Text>
                  Bugün yapılan toplam mesai: {shifts.length}
                </Card.Text>
                <Link href={"/materials"}>
                  <Card.Link>Mesaileri Yönet</Card.Link>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Home;

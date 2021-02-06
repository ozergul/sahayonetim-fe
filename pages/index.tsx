import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { workers } from "./workers";
import { materials } from "./materials";
import { shifts } from "./shifts";

const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const Home: NextPage = () => {
  const materialsGrouped = groupBy(materials, "type") as any;
  return (
    <div>
      <Layout pageTitle={"Anasayfa"}>
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
                <Card.Text>
                  Toplam çalışan sayısı: {workers.length} Kişi
                </Card.Text>
                <Link href={"/workers"}>
                  <Button variant="outline-success">Çalışanları Yönet</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Malzemeler</Card.Title>
                <Card.Text>
                  Toplam aktif malzeme sayısı
                  {Object.entries(materialsGrouped).map(
                    (
                      [type, items]: [
                        type: string,
                        items: { amount: string; name: string }[]
                      ],
                      i1
                    ) => {
                      return (
                        <div key={i1}>
                          {type}:
                          <ul>
                            {items.map((item, i) => {
                              return (
                                <li key={i}>
                                  <span
                                    className={"d-flex justify-content-between"}
                                  >
                                    {item.name}{" "}
                                    <span>
                                      {item.amount} {type}
                                    </span>
                                  </span>
                                </li>
                              );
                            })}
                            <li>
                              <span
                                className={"d-flex justify-content-between"}
                              >
                                <b>Toplam:</b>{" "}
                                <span>
                                  {items.reduce(
                                    (acc, cur) => acc + parseInt(cur.amount),
                                    0
                                  )}{" "}
                                  {type}
                                </span>
                              </span>
                            </li>
                          </ul>
                        </div>
                      );
                    }
                  )}
                </Card.Text>
                <Link href={"/materials"}>
                  <Button variant="outline-success">Malzeme Ekle</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Mesailer</Card.Title>
                <Card.Text>
                  Bugün yapılan toplam mesai:{" "}
                  {shifts.reduce((acc, cur) => acc + parseInt(cur.time), 0)}{" "}
                  saat
                </Card.Text>
                <Link href={"/shifts"}>
                  <Button variant="outline-success">Mesaileri Yönet</Button>
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

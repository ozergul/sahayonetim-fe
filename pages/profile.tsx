import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

const Profile: NextPage = () => {
  return (
    <div>
      <Layout pageTitle={"Profil"}>
        <Row>
          <Col xs={12} md={6}>
            <h4>Üyelik Bilgilerim</h4>
            <hr />

            <div className={"d-flex justify-content-between mb-2"}>
              <b>Ad Soyad:</b> <span>Özer Gül</span>
            </div>

            <div className={"d-flex justify-content-between mb-2"}>
              <b>Mevki:</b> <span>Mühendis</span>
            </div>

            <div className={"d-flex justify-content-between mb-2"}>
              <b>E-posta:</b> <span>ozergul@ogr.cbu.edu.tr</span>
            </div>

            <div className={"d-flex justify-content-between mb-2"}>
              <b>Yetkili olduğu bölüm:</b> <span>Tüm şantiye</span>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Profile;

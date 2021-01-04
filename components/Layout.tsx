import React, { useState } from "react";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { connect } from "react-redux";
import Head from "next/head";

interface LayoutProps {}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const [leftToggle, setLeftToggle] = useState(false);
  const [rightToggle, setRightToggle] = useState(false);
  return (
    <div className={`d-flex ${leftToggle ? "toggled" : ""}`} id="wrapper">
      <Head>
        <title>Saha Yönetim</title>
      </Head>

      <link
        rel="stylesheet"
        href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
      ></link>

      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Saha Yonetim</div>
        <div className="list-group list-group-flush">
          <a className="list-group-item list-group-item-action bg-light">
            Ana Menü
          </a>
          <a className="list-group-item list-group-item-action bg-light">
            Çalışanlar
          </a>
          <a className="list-group-item list-group-item-action bg-light">
            Malzemeler
          </a>
          <a className="list-group-item list-group-item-action bg-light">
            Tutanaklar
          </a>
          <a className="list-group-item list-group-item-action bg-light">
            Mesailer
          </a>
          <a className="list-group-item list-group-item-action bg-light">
            Evraklar
          </a>
        </div>
      </div>
      <div id="page-content-wrapper">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={["fas", !leftToggle ? "arrow-left" : "arrow-right"]}
              onClick={() => setLeftToggle(!leftToggle)}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Anasayfa</Nav.Link>
              <Nav.Link>Üyeliğim</Nav.Link>
              <NavDropdown title="Aksiyonlar" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  İzin Formu
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Talep Formu
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Çıkış</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Arama"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Arama</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <div className="container-fluid">
          <div className="p-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

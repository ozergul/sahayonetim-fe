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
import Link from "next/link";

interface LayoutProps {
  pageTitle?: string;
}

const Layout: NextPage<LayoutProps> = ({ children, pageTitle = "" }) => {
  const [leftToggle, setLeftToggle] = useState(false);
  const [rightToggle, setRightToggle] = useState(false);
  return (
    <div className={`d-flex ${leftToggle ? "toggled" : ""}`} id="wrapper">
      <Head>
        <title>Saha Yönetim {pageTitle ? `- ${pageTitle}` : ""}</title>
      </Head>

      <link
        rel="stylesheet"
        href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
      ></link>

      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Saha Yonetim</div>
        <div className="list-group list-group-flush">
          <Link href={"/"}>
            <a className="list-group-item list-group-item-action bg-light">
              Ana Menü
            </a>
          </Link>
          <Link href={"/workers"}>
            <a className="list-group-item list-group-item-action bg-light">
              Çalışanlar
            </a>
          </Link>
          <Link href={"/materials"}>
            <a className="list-group-item list-group-item-action bg-light">
              Malzemeler
            </a>
          </Link>
          <Link href={"/reports"}>
            <a className="list-group-item list-group-item-action bg-light">
              Tutanaklar
            </a>
          </Link>
          <Link href={"/shifts"}>
            <a className="list-group-item list-group-item-action bg-light">
              Mesailer
            </a>
          </Link>
          <Link href={"/documents"}>
            <a className="list-group-item list-group-item-action bg-light">
              Evraklar
            </a>
          </Link>
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
                <NavDropdown.Item href={"/form/permit"}>
                  İzin Formu
                </NavDropdown.Item>

                <NavDropdown.Item href={"/form/request"}>
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

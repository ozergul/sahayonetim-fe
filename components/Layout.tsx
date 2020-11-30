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

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [leftToggle, setLeftToggle] = useState(false);
  const [rightToggle, setRightToggle] = useState(false);
  return (
    <div className={`d-flex ${leftToggle ? "toggled" : ""}`} id="wrapper">
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Saha Yonetim</div>
        <div className="list-group list-group-flush">
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Dashboard
          </a>
        </div>
      </div>
      <div id="page-content-wrapper">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={["fas", !leftToggle ? "arrow-left" : "arrow-right"]}
              onClick={() => setLeftToggle(!leftToggle)}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

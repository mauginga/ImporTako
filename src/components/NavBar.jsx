import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#"> ImporTako</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">iPhones</Nav.Link>
                    <Nav.Link href="#action2">Macbooks</Nav.Link>
                    <NavDropdown title="Buscar Modelos" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">iOS 15</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        iOS 16
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        NUEVOS LANZAMIENTOS
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                        ir a Apple.com
                    </Nav.Link>
                </Nav>
                <CartWidget />
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>

            </Container>
            </Navbar>
        </header>
    );
};
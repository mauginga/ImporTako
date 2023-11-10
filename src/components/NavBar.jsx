import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand > <NavLink id ="NavLink"  to ="/"> ImporTako </NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink id ="NavLink" to = "category/iPhones">iPhones</NavLink>
                    <NavLink id ="NavLink" to = "category/Macbooks">Macbooks</NavLink>
                    <NavDropdown title="Buscar Modelos" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">iOS 15</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        iOS 16
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                        NUEVOS LANZAMIENTOS
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="https://www.apple.com/la/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/" disabled>
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
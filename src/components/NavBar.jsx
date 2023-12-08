import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <header>
            
            <Navbar expand="lg" className="bg-body-tertiary" >
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
                    <Nav.Link href="https://www.apple.com/la/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/" >
                        ir a Apple.com
                    </Nav.Link>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>

            </Container>
            </Navbar>
        </header>
    );
};
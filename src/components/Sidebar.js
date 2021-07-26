import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
function Sidebar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
            <Navbar.Brand href="/">Covid PH</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/cases">Cases</Nav.Link>
                <Nav.Link href="/facilities">Facilities</Nav.Link>
                
                </Nav>
                <Nav>
                <NavDropdown title="User's Name" className="me-4">
                    <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar

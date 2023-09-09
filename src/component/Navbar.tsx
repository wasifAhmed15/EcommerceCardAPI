import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import {NavLink}from "react-router-dom"


export default function NavData() {
  return (
    <Navbar expand="lg " className="bg-body-tertiary">
       <Container fluid>

<Navbar.Brand >Online Store</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">

<Nav className="m-auto">



<NavLink to="/" className={"p-3 fs-4 text-decoration-none"}>Home</NavLink>
<NavLink to="about" className={"p-3 fs-4 text-decoration-none"}>About</NavLink>








</Nav>
</Navbar.Collapse>

</Container>

    </Navbar>
  );
}


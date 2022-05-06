import React from "react";
import {Navbar,Nav,NavDropdown,Container,Form,Button,FormControl,NavItem} from 'react-bootstrap';
import { Link } from "react-router-dom";


 function Navbar1() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container fluid>
    <Navbar.Brand >News App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {/* <NavItem><Link className="nav-link" to="/home">Home</Link></NavItem> */}
        <NavItem><Link className="nav-link" to="/">All</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/sports">Sports</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/bollywood">Bollywood</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/science">Science</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/startup">Startup</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/automobile">Auto Mobile</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/hatke">Hatke</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/politics">Politics</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/technology">Technology</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/miscellaneous">Miscellaneous</Link></NavItem>
        <NavItem><Link  className="nav-link" to="/news/national ">Indian news</Link></NavItem>
      </Nav>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navbar1;
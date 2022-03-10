import React from 'react'
import { Button,Navbar,Container,Badge } from 'react-bootstrap';
import {FaShoppingCart } from 'react-icons/fa';
import {Link} from "react-router-dom"

const header = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand>
      <Link to="/">Go Kart</Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end">
     
     
        <Button variant="outline-success" className="my-1 mx-2">
          <Link to="/login">Login</Link>
          </Button>
        <Button variant="outline-info" className="my-1 mx-2">
         <Link to="/register">Register</Link>
          </Button>
        <Button variant="primary" className="my-1 mx-2">
        <FaShoppingCart /> <Badge bg="secondary">0</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default header
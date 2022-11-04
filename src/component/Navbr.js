import React from 'react';
import { Navbar , Nav , Container} from "react-bootstrap";
import img from '../Images/camera.jpg';
 
const Navbr = () => {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar 📽️</Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>;
            <Nav.Link href="#features">Action</Nav.Link>;
            <Nav.Link href="#pricing">Comedy</Nav.Link>;
          </Nav>
         
          <img  src={img} style={{width:"120px", height:100}}/>;
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbr;
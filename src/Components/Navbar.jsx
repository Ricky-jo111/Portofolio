import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink as Link} from 'react-router-hash-link '
import '../Pages/Css/Navbar.css'

function Navba() {
  return (
    <Navbar id="Navigation" bg="light" expand="lg">
      <Container id="kontainer" className='container'>
        <Navbar.Brand id="brand" href="#home">Ricky Jonathan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="list">
                <ul>
                    <li><Link className="link" smooth to='#Home'>Home</Link></li>
                    <li><Link className="link" smooth to="#About">about</Link></li>
                    <li><Link className="link" smooth to="#Porto">Skills</Link></li>
                    <li><Link className="link" smooth to='#Blog'>Contact</Link></li>
                </ul>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navba


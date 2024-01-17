import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const Mynavbar=()=>{
    return(

        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink className='nav-link text-bold' to="/"><span className='text-primary' style={{fontSize:'24px'}}>Brand House</span></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavLink className='nav-link' to="/"><i className='fa fa-home'></i>  Home</NavLink>
              <NavLink className='nav-link' to="/about"><i className='fa fa-file'></i>  About</NavLink>
              <NavLink className='nav-link' to="/about"><i class="fas fa-hamburger"></i>  Orders </NavLink>
              <NavLink className='nav-link' to="/about"><i className='fa fa-phone'></i>  Contact</NavLink>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
             


            </Nav>
            <div className=''>
            <Button variant="outline-primary">SignUp</Button>{' '}
            <Button variant="outline-primary">Resister</Button>{' '}
             </div>
     
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default Mynavbar;
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink ,Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Mynavbar=()=>{
    return(

        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink className='nav-link text-bold' to="/"><span className='text-primary' style={{fontSize:'24px'}}>Brand House</span></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavLink className='nav-link mx-3' to="/"><i className='fa fa-home'></i>  Home</NavLink>
              {/* <NavLink className='nav-link' to="/menus"><i className='fa fa-file'></i>  Menus</NavLink> */}
              {/* <NavLink className='nav-link' to="/about"><i class="fas fa-hamburger"></i>  Orders </NavLink> */}
              
              <NavDropdown title="Menus" className='mx-3 ' id="basic-nav-dropdown">

                <Link className='nav-link menusdrop' to='/veg'>Veg Items</Link>
                <Link className='nav-link menusdrop' to='/nonveg'>Non-Veg Items</Link>

              </NavDropdown>
              
              <NavLink className='nav-link mx-3' to="/contact"><i className='fa fa-phone'></i>  Contact</NavLink>
             


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
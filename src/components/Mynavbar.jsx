import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink ,Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Mynavbar=()=>{

 
    return(
<>
        <Navbar expand="lg" className="navbarcolor" style={{height:'60px' , position:'relative'}} fixed="top">
        <Container>
          <NavLink className='nav-link text-bold' to="/"><span className='text-white' style={{fontSize:'24px'}}>Brand House</span></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto text-white">
              <NavLink className='nav-link mx-3 text-white' to="/"><i className='fa fa-home text-white'></i>  Home</NavLink>
              {/* <NavLink className='nav-link' to="/menus"><i className='fa fa-file'></i>  Menus</NavLink> */}
              {/* <NavLink className='nav-link' to="/about"><i class="fas fa-hamburger"></i>  Orders </NavLink> */}
            
            <div className='text-white'>
                            
            <NavDropdown title="Menus" className='mx-3' id="basic-nav-dropdown">

            <Link className='nav-link menusdrop ' to='/veg'>Veg Items</Link>
            <Link className='nav-link menusdrop' to='/nonveg'>Non-Veg Items</Link>

            </NavDropdown>
            </div>
              
              <NavLink className='nav-link mx-3 text-white' to="/contact"><i className='fa fa-phone'></i> Contact</NavLink>
              <NavLink className='nav-link mx-2 text-white' to="/cart"><i className='fa fa-shop'></i> &nbsp;Cart</NavLink>
              <NavLink className='nav-link mx-3 text-white' to="admin/reservation"></NavLink>
             


            </Nav>
            <div className=''>
            <Button variant="outline-white">SignUp</Button>{' '}
            <Button variant="outline-white">Register</Button>{' '}

              
             </div>
     
          </Navbar.Collapse>
        </Container>
      </Navbar>



      </>
    );
}
export default Mynavbar;
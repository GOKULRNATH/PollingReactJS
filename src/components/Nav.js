import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import logo from "./image/logo.png"
import "./Nav.css"

function Navbarpoll() {
  return (
    <div className='main_nav'>
      <Navbar collapseOnSelect expand="lg" className='shadow' >
      <Container className='main_nav_div'>
        <div>
        
          <div className='d-flex justify-content-center align-items-center'>
            {/* <img src="{logo}" className='logo_nav' alt='no image'/> */}
            <label style={{ fontSize: '1.5rem', fontWeight: 'bold',color:"rgb(6, 2, 252)"}}>Polling Track</label>
          </div>
          
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav_toggle_button'/>
        <div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <div className='main_link_div'>
                <div><Link to="/" className='sub_sub_link_'>Home</Link></div>
                <div><Link to="/addpoll" className='sub_sub_link_'>Add new poll</Link></div>
                <div><Link to="/login" className='sub_sub_link_'>Login</Link></div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>
  );
}
  
export default Navbarpoll



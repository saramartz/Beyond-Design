import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// import logo from './logo.png'

class Navigation extends Component {

    constructor() {
        super()    
    } 

    render() {

        return (
            <Navbar bg="dark" variant="dark" expand="md" style={{ marginBottom: '50px' }}>
                
                <Link to="/">
                    <Navbar.Brand>Creative-App</Navbar.Brand>
                </Link>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/search">
                            <Nav.Link as="div">Search Images</Nav.Link>
                        </Link>

                        {/* >>>> TO-DO change href to Link <<<< */}
                        <NavDropdown title="Professionals" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/photography">Photography</NavDropdown.Item>
                        <NavDropdown.Item href="/fashion">Fashion</NavDropdown.Item>
                        <NavDropdown.Item href="/stylism">Stylism</NavDropdown.Item>   
                        <NavDropdown.Item href="/makeup">Makeup</NavDropdown.Item>   
                        <NavDropdown.Item href="/modeling">Modeling</NavDropdown.Item>       
                        </NavDropdown>

                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/account">My Account</NavDropdown.Item>
                        <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
                        <NavDropdown.Item href="/boards">Your Boards</NavDropdown.Item>                        
                        <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>  
                        </NavDropdown>                        

                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}


export default Navigation
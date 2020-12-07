import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../service/auth.service'

// import logo from './logo.png'

class Navigation extends Component {

    constructor() {
        super()  
        this.authService = new AuthService()
    } 

    logOut = () => {
        this.authService
            .logout()
            .then(res => console.log("Logout succesfully: ", res))
            .catch(err => console.log(err))
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

                        <Link to="/signup">
                            <Nav.Link as="div">Sign Up</Nav.Link>
                        </Link>
                        <Link to="/login">
                            <Nav.Link as="div">Login</Nav.Link>
                        </Link>                      

                        <NavDropdown title="Profile" id="basic-nav-dropdown">                            
                        <Link to="/account">
                            <NavDropdown.Item as="div">My Account</NavDropdown.Item>
                        </Link>                        
                        <Link to="/works">
                            <NavDropdown.Item as="div">Portfolio</NavDropdown.Item>
                        </Link>
                        <Link to="/board">
                            <NavDropdown.Item as="div">Your Board</NavDropdown.Item>
                        </Link>
                        <Link to="/logout">
                            <NavDropdown.Item as="div" onClick={this.logOut}>Log Out</NavDropdown.Item>
                        </Link>                            
                        </NavDropdown>                        

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}


export default Navigation
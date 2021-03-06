import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../service/auth.service'
import "./Navigation.css"

import logo from './logo.png'

class Navigation extends Component {

    constructor() {
        super()
        this.state = {           
            showModal: false,
        }
        this.authService = new AuthService()
    } 

    logOut = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }

    render() {

        
        return (
            <Navbar variant="none" className="custom"> 

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                <Nav className="mr-auto">
                
                <Link to="/" >
                    <Navbar.Brand as="div" style={{color:"#d1d3d3"}}>
                    <img
                        src={logo}
                        width="37"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Beyond Design logo"
                        style={{borderRadius:"50%", marginRight:"15px", opacity:"0.8"}}
                    />
                    BEYOND DESIGN
                    </Navbar.Brand>                
                </Link> 
                
                </Nav>
                                        
                <Nav className="ml-auto">             
                        {this.props.loggedUser
                            ?
                            <>    
                                <Link to="/chat">
                                    <Nav.Link as="div">Chat Forum</Nav.Link>
                                </Link>

                                <NavDropdown title="Professionals" id="basic-nav-dropdown"> 
                                <Link to="/professionals">  
                                    <NavDropdown.Item as="div">All</NavDropdown.Item>  
                                </Link>
                                <Link to="/photography">      
                                    <NavDropdown.Item as="div">Photography</NavDropdown.Item>
                                </Link>
                                <Link to="/fashion">   
                                    <NavDropdown.Item as="div">Fashion</NavDropdown.Item>
                                </Link>
                                <Link to="/stylism">     
                                    <NavDropdown.Item as="div">Stylism</NavDropdown.Item> 
                                </Link>
                                <Link to="/makeup">      
                                    <NavDropdown.Item as="div">Makeup</NavDropdown.Item>
                                </Link>
                                <Link to="/modeling">     
                                    <NavDropdown.Item as="div">Modeling</NavDropdown.Item> 
                                </Link>        
                                </NavDropdown>  
                                
                                <NavDropdown title={                                                       
                                                    <Image className="avatar" src={this.props.loggedUser.image} alt={this.props.loggedUser.name} />                                                        
                                                   }  id="basic-nav-dropdown">   
                                     
                                    <Link to={`/account/${this.props.loggedUser._id}`}>
                                        <NavDropdown.Item as="div">Account</NavDropdown.Item>
                                    </Link>                        
                                    <Link to={`/works/${this.props.loggedUser._id}`}>
                                        <NavDropdown.Item as="div">Portfolio</NavDropdown.Item>
                                    </Link>                                                                     
                                     <Link to={`/myBoards/${this.props.loggedUser._id}`}>
                                        <NavDropdown.Item as="div">Boards</NavDropdown.Item>
                                    </Link> 

                                    {this.props.loggedUser ?
                                        <Link to={`/search/${this.props.loggedUser._id}`}>
                                            <NavDropdown.Item as="div">Search</NavDropdown.Item>
                                        </Link>
                                        : null
                                    } 

                                    <Link to="/logout">
                                        <NavDropdown.Item as="div" onClick={this.logOut}>Log Out</NavDropdown.Item>  
                                    </Link>
                                </NavDropdown> 
                            </>
                            :
                            <>
                                <Link to="/signup">
                                <Nav.Link as="div" className="btn-other" style={{marginRight: "10px"}}>Sign Up</Nav.Link>
                                </Link>
                                <Link to="/login">
                                    <Nav.Link as="div" className="btn-other">Login</Nav.Link>
                                </Link>                                
              
                            </>
                        }                                               

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default Navigation
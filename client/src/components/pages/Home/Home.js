import React, { Component } from 'react'
import { Col, Container, Row } from "react-bootstrap";

import video from "../../../videos/intro.mp4"

import "./Home.css"

class Home extends Component {

    constructor() {
        super()
        this.state = {         
   
        }    
    }   

    render() {
        return (
            <>
                
                <header >              
                    <Row pattern={1}>                        
                        <Col md="6" className="">
                            <div className="overlay"></div>                           
                        </Col>
                         <video playsinline="playsinline" muted="muted" loop="loop" className="video1">
                                <source src={video} type="video/mp4" />
                        </video>
                        <Col md="6" className="divider">
                            <div className="overlay2"></div>                          
                        </Col>  
                    </Row>             
                </header>
   
                <section className="section1" style={{height: "400px"}}>
                    <Row>                   
                        <Col md="4" className="text-center">
                               <h1 class="display-3">SECTION 1</h1>
                               <p class="lead mb-0">Description</p>
                        </Col>                       
                    </Row>
                </section>            

                <footer className="font-small  footer">
                    <Container fluid className="text-center text-md-left section1">
                        <Row>
                        <Col md="6">
                            <h5 >Content</h5>
                            <p>
                            Description
                            </p>
                        </Col>
                        <Col md="6">
                            <h5>Links</h5>
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                            </ul>
                        </Col>
                        </Row>
                    </Container>
                    <div className="footer-copyright text-center py-3">
                        <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: Sara
                        </Container>
                    </div>
                </footer>
          
            </>      
        )
    }
}

export default Home
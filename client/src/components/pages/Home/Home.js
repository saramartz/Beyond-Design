import React, { Component } from 'react'
import { Col, Container, Row } from "react-bootstrap";

import video from "./videos/intro.mp4"

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
                         <video playsinline="playsinline" autoPlay muted="muted" loop="loop" className="video1">
                                <source src={video} type="video/mp4" />
                        </video>
                        <div className="section-overlay text-center">
                               <h2 class="display-3" style={{fontFamily:"Razed", fontSize:"60px"}} >Community for designers</h2>
                               <p class="lead mb-0">Create your team, join castings, organize fashion shoots and showcase your artworks.</p>
                        </div>
                        <Col md="6" className="divider">
                            <div className="overlay2"></div>                          
                        </Col>  
                    </Row>             
                </header>
   
                <section className="section1" style={{height: "250px"}}>
                    <Row>                   
                        <Col md="4" className="text-center">
                 
                        </Col>                       
                    </Row>
                </section>  
                
                  <section className="section2 text-center " >
                    <Row>                   
                        <Col md="12" className="text-center section2-overlay">
                            <div className="section2Div">

                               <h1 class="display-3">About</h1>
                               <p class="lead mb-0">A community passionate for fashion photography where models, <br></br> photographers, makeup artists, fashion designers and stylists meet to create together. <br></br>

Find castings near you or publish your own. Discover job opportunities <br></br> or collaborations to improve your portfolio. <br></br> Discover new faces and explore editorials from creative artists just like you. <br></br> Put your portfolio or your book in front of professionals, bookers, agencies, clients and fans.</p>
                            </div>                         
                        </Col>                       
                    </Row>
                </section>

                <footer className="font-small  footer">
                    {/* <Container fluid className="text-center text-md-left section1">
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
                    </Container> */}
                    <div className="footer-copyright text-center py-3">
                        <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: Sara Martínez Vega
                        </Container>
                    </div>
                </footer>
          
            </>      
        )
    }
}

export default Home
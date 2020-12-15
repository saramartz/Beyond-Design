import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import video from "../../../videos/abstract.mp4"

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
                
                <header>
                    <MDBRow>                        
                        <MDBCol md="6" style={{height: "400px"}}>
                            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                <source src={video} type="video/mp4" />
                            </video>
                        </MDBCol>
                        <MDBCol md="6">
                            <h1 className="text-center">TITLE</h1>
                        </MDBCol>                       
                    </MDBRow>
                    <div className="overlay"></div> 
                </header>
   
                <section className="section1" style={{height: "400px"}}>
                    <MDBRow>                   
                        <MDBCol md="4" className="text-center">
                               <h1 class="display-3">SECTION 1</h1>
                               <p class="lead mb-0">Description</p>
                        </MDBCol>                       
                    </MDBRow>
                </section>            

                <MDBFooter className="font-small pt-4 mt-4 footer">
                    <MDBContainer fluid className="text-center text-md-left section1">
                        <MDBRow>
                        <MDBCol md="6">
                            <h5 >Content</h5>
                            <p>
                            Description
                            </p>
                        </MDBCol>
                        <MDBCol md="6">
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
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: Sara
                        </MDBContainer>
                    </div>
                </MDBFooter>
          
            </>      
        )
    }
}

export default Home
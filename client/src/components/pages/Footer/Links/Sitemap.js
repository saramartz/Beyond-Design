import React, { Component } from 'react'
import SitemapStyles from "./Sitemap-styles";
import { Container, Row, Col } from 'react-bootstrap'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import phone from "./phone.png"
import mail from "./mail.png"

import Fade from 'react-reveal/Fade'

export class Sitemap extends Component {
    render() {   
        
        return (
        <>
            <Fade>
            <Container className="sitemap-container mb-5" style={{borderRadius: "0%", fontSize: 14, textAlign: "justify"}}>         
                <Row>
                    <Col md={5} className="sitemap-section1"> 
                        <h2>CONTACT</h2>
                        <hr></hr>
                        <p className="mt-5 mb-3">OUR ADDRESS</p>
                        <p>00 Fake Street <br/> Madrid, ES <br/> 28045 </p>
                        <p className="mt-5 mb-3">OUR CONTACTS</p>
                                
                        <a href={"mailto:" + "saramartz_@hotmail.com"} target="_blank" rel="noreferrer">
                            <p style={{color: "rgba(255, 255, 255, 0.842)", marginBottom: 5}}>
                                <img
                                alt="linkedin logo"
                                src={mail}
                                className="mt-1"
                                style={{width: '30px', opacity: 0.5, marginRight: 20 }}
                                            />
                                saramartz_@hotmail.com
                            </p>
                        </a> 
                        
                        <a href={`https://api.whatsapp.com/send?phone=34689695128&text=%20Hi!`} target="_blank" rel="noreferrer">
                            <p style={{color: "rgba(255, 255, 255, 0.842)"}}>
                                <img
                                alt="linkedin logo"
                                src={phone}
                                className="mt-1"
                                style={{width: '30px', opacity: 0.5, marginRight: 20 }}
                                            />
                                +34 689695128
                            </p>
                        </a> 
            
                    </Col>
                            
                    <Col md={7} className="sitemap" style={{height: 800}}>                                  
                        <Map
                            google={this.props.google}
                            zoom={16}
                            styles={this.props.mapStyle}
                            initialCenter={{ lat: 40.396262, lng: -3.686733}}
                            style={{opacity: 0.5}}
                        >                                    
                        <Marker
                            position={{ lat: 40.395637, lng: -3.687698 }}                                       
                            options= {
                                {
                                    icon: {
                                    url: 'https://i.postimg.cc/c4jr8Rjq/icon.png',
                                    scaledSize: new window.google.maps.Size(60, 60),
                                    },
                                }
                            }                        
                        />
                        </Map>                      
                    </Col>    
                </Row>                            
            </Container>              
    
            </Fade>        
        </>    
    
    );
  }
}

Sitemap.defaultProps = SitemapStyles;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCxQfr-VaQqyOGCylf9PbMafybyjxJzVIU'
})(Sitemap);

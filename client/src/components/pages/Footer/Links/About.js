import icon from "../../Home/lines.png"
import { Container, Row, Col } from 'react-bootstrap'

import RadarChart from "../Chart/Radar"
import LineChart from "../Chart/Line"

import Fade from 'react-reveal/Fade'


const About = () => { 
    return (
        <>
            <Fade>
            <Container className="account-details mb-5" style={{borderRadius: "0%", fontSize: 14, textAlign: "justify"}}>         
                <Row>
           
                    <Col md={12} className="account-section ">  
                         
                        <Col md={{ span: 8, offset: 2 }} className="mt-5">
                            <Fade left>
                                <h1 className="mb-2 text-center">ABOUT</h1>
                                </Fade>
                                <hr></hr>
                    
                            <Fade left>
                                <h4 className="mb-0" style={{marginTop: 80}}>HISTORY</h4>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-1 icon" />
                            </div>
                            <Fade right>
                                <p className="mb-5">
                                    WE'VE CREATED BEYOND DESIGN WITH A LOT OF ENTHUSIASM, WE LOVE WHAT WE DO AND WE LOVE CREATIVE PEOPLE WORKING TO CONTRIBUTE INTERESTING THINGS TO THE WORLD. WE TRY TO DO THINGS RIGHT, AND WHEN SOMEONE SPEAKS WELL OF US OUR DAY GETS A LITTLE BRIGHTER. WE'RE COMMITTED TO IMPROVEMENT, WE ARE LISTENING YOUR SUGGESTIONS AND WE'RE ALWAYS HERE TO HELP YOU. 
                                </p>
                            </Fade>
                    
                            <Fade left>
                                <div style={{marginTop: 80 }}>
                                    <LineChart/>                                    
                                </div>
                            </Fade>
                                
                            <Fade right>
                                <div style={{marginBottom: 120, marginTop: 110}}>
                                    <RadarChart />                                    
                                </div>                                    
                            </Fade>    

                        </Col>                      
                    </Col>    
                </Row>               
            </Container>              
    
            </Fade>
        
        </>    
    )
}

export default About
import icon from "../../Home/lines.png"
import { Container, Row, Col} from 'react-bootstrap'

import Fade from 'react-reveal/Fade'


const Cookies = () => { 
    return (
        <>
            <Fade>
            <Container className="account-details mb-5" style={{borderRadius: "0%", fontSize: 14, textAlign: "justify"}}>         
                <Row>
           
                    <Col md={12} className="account-section ">  
                         
                        <Col md={{ span: 8, offset: 2 }} className="mt-5">
                            <Fade left>
                                <h1 className="mb-2 text-center">COOKIE POLICY</h1>
                                </Fade>
                                <hr></hr>
                    
                            <Fade left>
                                <h4 className="mb-0" style={{marginTop: 80}}>WHAT ARE COOKIES?</h4>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-1 icon" />
                            </div>
                            <Fade right>
                                <p className="mb-5">
                                    COOKIES ARE SIMPLE TEXT FILES THAT ARE STORED ON YOUR COMPUTER OR MOBILE DEVICE BY A WEBSITE’S SERVER. EACH COOKIE IS UNIQUE TO YOUR WEB BROWSER. IT WILL CONTAIN SOME ANONYMOUS INFORMATION SUCH AS A UNIQUE IDENTIFIER, WEBSITE’S DOMAIN NAME, AND SOME DIGITS AND NUMBERS.
                                </p>
                            </Fade>
                                
                            <Fade left>
                                <h4 className="mb-0" style={{marginTop: 80}}>WHAT TYPES OF COOKIES DO WE USE?</h4>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-1 icon" />
                            </div>
                            <Fade right>
                                <p>
                                    <i>NECESSARY COOKIES</i>

                                    <br/><br/>NECESSARY COOKIES ALLOW US TO OFFER YOU THE BEST POSSIBLE EXPERIENCE WHEN ACCESSING AND NAVIGATING THROUGH OUR WEBSITE AND USING ITS FEATURES. FOR EXAMPLE, THESE COOKIES LET US RECOGNIZE THAT YOU HAVE CREATED AN ACCOUNT AND HAVE LOGGED INTO THAT ACCOUNT TO ACCESS THE CONTENT.

                                    <br/><br/><i>FUNCTIONALITY COOKIES</i>

                                    <br/><br/>FUNCTIONALITY COOKIES LET US OPERATE THE SITE IN ACCORDANCE WITH THE CHOICES YOU MAKE. FOR EXAMPLE, WE WILL RECOGNIZE YOUR USERNAME AND REMEMBER HOW YOU CUSTOMIZED THE SITE DURING FUTURE VISITS.

                                    <br/><br/><i>ANALYTICAL COOKIES</i>

                                    <br/><br/>THESE COOKIES ENABLE US AND THIRD-PARTY SERVICES TO COLLECT AGGREGATED DATA FOR STATISTICAL PURPOSES ON HOW OUR VISITORS USE THE WEBSITE. THESE COOKIES DO NOT CONTAIN PERSONAL INFORMATION SUCH AS NAMES AND EMAIL ADDRESSES AND ARE USED TO HELP US IMPROVE YOUR USER EXPERIENCE OF THE WEBSITE.

                                </p>
                                <p className="mb-5">
                                   THE STATISTICAL INFORMATION RELATED TO YOUR ACTIVITY IS NOT REMOVED FROM OUR DATABASE, BUT IS DISASSOCIATED FROM YOUR IDENTITY SO THAT WE CAN KEEP A STATISTICAL HISTORICAL RECORD THAT IS USEFUL TO US, EVEN IF IT IS NOT LINKED TO YOUR ACCOUNT IN ANY WAY.     
                                </p>
                            </Fade>
                                
                            <Fade left>
                                <h4 className="mb-0" style={{marginTop: 80}}>HOW TO DELETE COOKIES?</h4>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-1 icon" />
                            </div>
                            <Fade right>
                                <p style={{ marginBottom: 120 }}>
                                    IF YOU WANT TO RESTRICT OR BLOCK THE COOKIES THAT ARE SET BY OUR WEBSITE, YOU CAN DO SO THROUGH YOUR BROWSER SETTING. ALTERNATIVELY, YOU CAN VISIT WWW.INTERNETCOOKIES.ORG, WHICH CONTAINS COMPREHENSIVE INFORMATION ON HOW TO DO THIS ON A WIDE VARIETY OF BROWSERS AND DEVICES. YOU WILL FIND GENERAL INFORMATION ABOUT COOKIES AND DETAILS ON HOW TO DELETE COOKIES FROM YOUR DEVICE.
                                </p>                     
                            </Fade>             
                        </Col>                      
                    </Col>    
                </Row>               
            </Container>              
    
            </Fade>
        
        </>    
    )
}

export default Cookies
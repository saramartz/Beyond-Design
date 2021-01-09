import icon from "../../Home/lines.png"
import { Container, Row, Col} from 'react-bootstrap'

import Fade from 'react-reveal/Fade'


const Privacy = () => { 
    return (
        <>
            <Fade>
            <Container className="account-details mb-5" style={{borderRadius: "0%", fontSize: 14, textAlign: "justify"}}>         
                <Row>
           
                    <Col md={12} className="account-section ">  
                         
                        <Col md={{ span: 8, offset: 2 }} className="mt-5">
                            <Fade left>
                                <h1 className="mb-2 text-center">PRIVACY POLICY</h1>
                                </Fade>
                                <hr></hr>
                    
                            <Fade left>
                                <h4 className="mb-0" style={{marginTop: 80}}>WE COLLECT</h4>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-1 icon" />
                            </div>
                            <Fade right>
                                <p className="mb-5">
                                    TO UNDERSTAND HOW USERS USE BEYOND DESIGN, AND TO IMPROVE OUR SERVICE, WE STORE INFORMATION ABOUT THE NUMBER OF VISITS, PAGE VIEWS AND SIMILAR STATISTICAL INFORMATION. THIS INFORMATION IS NOT USER-SPECIFIC: WE DO NOT KEEP TRACK OF SPECIFIC VISITS OR SPECIFIC PAGES OF ANY PARTICULAR USER. IN ADDITION, WE DO NOT USE GOOGLE ANALYTICS AT BEYOND DESIGN, SO WE DO NOT SUPPORT OR PARTICIPATE IN THE COLLECTION OF DATA BY GOOGLE ABOUT VISITORS TO PAGES THAT USE GOOGLE'S TECHNOLOGY.
                                </p>
                            </Fade>
                                
                            <Fade left>
                                <h4 className="mb-0" style={{marginTop: 80}}>INFO USED</h4>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-1 icon" />
                            </div>
                            <Fade right>
                                <p>
                                    BEYOND DESIGN STORES YOUR INFORMATION FOR AS LONG AS YOU KEEP YOUR ACCOUNT ACTIVE. WHEN YOU CANCEL YOUR ACCOUNT, ACCORDING TO SPANISH LAW LOPD, WE ARE OBLIGED TO KEEP YOUR DATA FOR AT LEAST 2 YEARS. WHEN THIS HAPPENS, ALL YOUR DATA AND CONTENTS ARE REMOVED FROM THE INTERNET AND STORED IN A SEPARATE DATABASE, WHICH IS NOT PUBLISHED ANYWHERE, WHERE THEY WOULD ONLY BE AVAILABLE FOR LEGAL REASONS TO PUBLIC ADMINISTRATIONS, JUDGES AND COURTS, UNDER A LEGAL REQUIREMENT.
                                </p>
                                <p className="mb-5">
                                   THE STATISTICAL INFORMATION RELATED TO YOUR ACTIVITY IS NOT REMOVED FROM OUR DATABASE, BUT IS DISASSOCIATED FROM YOUR IDENTITY SO THAT WE CAN KEEP A STATISTICAL HISTORICAL RECORD THAT IS USEFUL TO US, EVEN IF IT IS NOT LINKED TO YOUR ACCOUNT IN ANY WAY.     
                                </p>
                            </Fade>
                                
                            <Fade left>
                                <h4 className="mb-0" style={{marginTop: 80}}>DISCLOSURE</h4>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-1 icon" />
                            </div>
                            <Fade right>
                                <p>
                                    BEYOND DESIGN ESTRIBES TO PROTECT ITS USER'S PRIVACY RIGHTS AND TO PROVIDE THEM WITH ALL THE RIGHT SUBPOENA REQUESTS. ALL COMPLIANCES ARE WEEK REVISEN AND SCRUTUNIZED BY OUR LEGAL DEPARTMENT. IF WE ARE ASKED TO PROVIDE USER INFORMATION, WE WILL FIGHT WITH ALL OUR RECURSOS AGAINST ANY ATTEMPT BY ANY PARTY REQUESTING US TO REVEAL THIS INFORMATION FOR WHATEVER REASON OR CLAIM. IN ADDITION THIS REQUEST SHOULD BE BACKED UP BY A COURT ORDER OR ELSE WE WILL NOT TAKE IT INTO CONSIDERATION. BEYOND DESIGN IS NOT PARTICIPATING IN ANY ILLEGAL OR UNCONSTITUTIONAL ACT WE JUST BELIEVE IN PROTECTING OUR USER'S PRIVACY.    
                                </p>
                                <p className="" style={{ marginBottom: 120 }}>
                                    BEYOND DESIGN DOES NOT SHARE YOUR PRIVATE INFORMATION WITH ANY THIRD PARTY ASIDE FROM THE DISCLOSURES ALREADY MADE IN THIS PRIVACY POLICY. HOWEVER, IF YOU WISH TO INQUIERE INTO HOW BEYOND DESIGN DOES NOT SHARE USER'S PERSONAL INFORMATION WITH THIRD PARTIES FEEL FREE TO CONTACT US.     
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

export default Privacy
import icon from "../../Home/lines.png"
import { Container, Row, Col} from 'react-bootstrap'

import Fade from 'react-reveal/Fade'


const Terms = () => { 
    return (
        <>
            <Fade>
            <Container className="account-details mb-5" style={{borderRadius: "0%", fontSize: 14, textAlign: "justify"}}>         
                <Row>
           
                    <Col md={12} className="account-section ">  
                         
                        <Col md={{ span: 8, offset: 2 }} className="mt-5">
                            <Fade left>
                                <h1 className="mb-2 text-center">TERMS & CONDITIONS</h1>
                                </Fade>
                                <hr></hr>
                    
                            <Fade left>
                                <h4 className="mb-0" style={{marginTop: 80}}>AGREEMENT TO TERMS</h4>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-1 icon" />
                            </div>
                            <Fade right>
                                <p className="mb-5">
                                    THESE TERMS AND CONDITIONS CONSTITUTE A LEGALLY BINDING AGREEMENT MADE BETWEEN YOU, WHETHER PERSONALLY OR ON BEHALF OF AN ENTITY AND BEYOND DESIGN, CONCERNING YOUR ACCESS TO AND USE OF THE BEYOND DESIGN AS WELL AS ANY OTHER MEDIA FORM, MEDIA CHANNEL, MOBILE WEBSITE OR MOBILE APPLICATION RELATED, LINKED, OR OTHERWISE CONNECTED.
                                    <br/><br/> YOU AGREE THAT BY ACCESSING THE SITE, YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY ALL OF THESE TERMS AND CONDITIONS. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                                    <br/><br/>SUPPLEMENTAL TERMS AND CONDITIONS OR DOCUMENTS THAT MAY BE POSTED ON THE SITE FROM TIME TO TIME ARE HEREBY EXPRESSLY INCORPORATED HEREIN BY REFERENCE. WE RESERVE THE RIGHT, IN OUR SOLE DISCRETION, TO MAKE CHANGES OR MODIFICATIONS TO THESE TERMS AND CONDITIONS AT ANY TIME AND FOR ANY REASON.
                                    <br/><br/>WE WILL ALERT YOU ABOUT ANY CHANGES BY UPDATING THE “LAST UPDATED” DATE OF THESE TERMS AND CONDITIONS, AND YOU WAIVE ANY RIGHT TO RECEIVE SPECIFIC NOTICE OF EACH SUCH CHANGE.
                                    <br/><br/>IT IS YOUR RESPONSIBILITY TO PERIODICALLY REVIEW THESE TERMS AND CONDITIONS TO STAY INFORMED OF UPDATES. YOU WILL BE SUBJECT TO, AND WILL BE DEEMED TO HAVE BEEN MADE AWARE OF AND TO HAVE ACCEPTED, THE CHANGES IN ANY REVISED TERMS AND CONDITIONS BY YOUR CONTINUED USE OF THE SITE AFTER THE DATE SUCH REVISED TERMS AND CONDITIONS ARE POSTED.
                                    <br/><br/>THE INFORMATION PROVIDED ON THE SITE IS NOT INTENDED FOR DISTRIBUTION TO OR USE BY ANY PERSON OR ENTITY IN ANY JURISDICTION OR COUNTRY WHERE SUCH DISTRIBUTION OR USE WOULD BE CONTRARY TO LAW OR REGULATION OR WHICH WOULD SUBJECT US TO ANY REGISTRATION REQUIREMENT WITHIN SUCH JURISDICTION OR COUNTRY.
                                    <br/><br/>ACCORDINGLY, THOSE PERSONS WHO CHOOSE TO ACCESS THE SITE FROM OTHER LOCATIONS DO SO ON THEIR OWN INITIATIVE AND ARE SOLELY RESPONSIBLE FOR COMPLIANCE WITH LOCAL LAWS, IF AND TO THE EXTENT LOCAL LAWS ARE APPLICABLE.
                                </p>
                            </Fade>
                                
                            <Fade left>
                                <h4 className="mb-0" style={{marginTop: 80}}>INTELLECTUAL PROPERTY RIGHTS</h4>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-1 icon" />
                            </div>
                            <Fade right>
                                <p style={{marginBottom: 120}}>
                                    UNLESS OTHERWISE INDICATED, THE SITE IS OUR PROPRIETARY PROPERTY AND ALL SOURCE CODE, DATABASES, FUNCTIONALITY, SOFTWARE, WEBSITE DESIGNS, AUDIO, VIDEO, TEXT, PHOTOGRAPHS, AND GRAPHICS ON THE SITE AND THE TRADEMARKS, SERVICE MARKS, AND LOGOS CONTAINED THEREIN ARE OWNED OR CONTROLLED BY US OR LICENSED TO US, AND ARE PROTECTED BY COPYRIGHT AND TRADEMARK LAWS AND VARIOUS OTHER INTELLECTUAL PROPERTY RIGHTS AND UNFAIR COMPETITION LAWS OF SPAIN, FOREIGN JURISDICTIONS, AND INTERNATIONAL CONVENTIONS.
                                    <br/><br/>THE CONTENT AND THE MARKS ARE PROVIDED ON THE SITE “AS IS” FOR YOUR INFORMATION AND PERSONAL USE ONLY. EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS AND CONDITIONS, NO PART OF THE SITE AND NO CONTENT OR MARKS MAY BE COPIED, REPRODUCED, AGGREGATED, REPUBLISHED, UPLOADED, POSTED, PUBLICLY DISPLAYED, ENCODED, TRANSLATED, TRANSMITTED, DISTRIBUTED, SOLD, LICENSED, OR OTHERWISE EXPLOITED FOR ANY COMMERCIAL PURPOSE WHATSOEVER, WITHOUT OUR EXPRESS PRIOR WRITTEN PERMISSION.
                                    <br/><br/>PROVIDED THAT YOU ARE ELIGIBLE TO USE THE SITE, YOU ARE GRANTED A LIMITED LICENSE TO ACCESS AND USE THE SITE AND TO DOWNLOAD OR PRINT A COPY OF ANY PORTION OF THE CONTENT TO WHICH YOU HAVE PROPERLY GAINED ACCESS SOLELY FOR YOUR PERSONAL, NON-COMMERCIAL USE. WE RESERVE ALL RIGHTS NOT EXPRESSLY GRANTED TO YOU IN AND TO THE SITE, THE CONTENT AND THE MARKS.
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

export default Terms
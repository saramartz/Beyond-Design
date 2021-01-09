import { Col, Container, Row } from "react-bootstrap";
import linkedin from "./linkedin2.png"

const Footer = () => {
    return (
      <footer className="site-footer">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <h6>About</h6>
              <p className="text-justify mr-4">
                  Beyond Design is a community for designers. Create your team, join castings, organize fashion shoots, showcase your works and publish them. Join Beyond Design and connect with photographers, stylists, make-up artists and modeling agencies to find job opportunities, build your team and unleash your creativity.
              </p>
            </Col>
            <Col xs={6} md={3}>
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="/photography">Photography</a></li>
                <li><a href="/fashion">Fashion</a></li>
                <li><a href="/stylism">Stylism</a></li>
                <li><a href="/makeup">Makeup</a></li>
                <li><a href="/modeling">Modeling</a></li>           
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>         
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
              </ul>
            </Col>
          </Row>
          <hr/>  
      </Container>
        
      <Container>
          <Row>
            <Col xs={12} sm={6} md={8}>
              <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by Sara Martínez Vega.</p>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ul className="social-icons">             
                  <li><a className="linkedin" target="_blank" href="https://www.linkedin.com/in/sara-mart%C3%ADnez-vega-5a25991b9/"><img src={linkedin} style={{width: 20, height: 20, opacity: 0.8}} className="linkedin-icon mb-1"></img></a></li>   
              </ul>
            </Col>
          </Row>
        </Container>  
      </footer>
    )
}  

export default Footer



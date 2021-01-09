import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer"
import Fade from 'react-reveal/Fade';
import Animation from "./Slider"
import ParticlesBg from "particles-bg";
import icon from "./lines.png"

import video from "./videos/intro.mp4"

import "./Home.css"

const Home = () => {
    return (
        <>
            <Fade>
                <header className="home-header">
                    <Row pattern={1}>
                        <Col md="6" className="">
                            <div className="overlay"></div>
                        </Col>
                        <video playsinline="playsinline" autoPlay muted="muted" loop="loop" className="video1">
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className="section-overlay text-center">
                            <h2 class="display-3" style={{ fontFamily: "Razed", fontSize: "60px" }} >Community for designers</h2>
                            <p class="lead mb-0">CREATE YOUR TEAM, JOIN CASTINGS, ORGANIZE FASHION SHOOTS AND SHOWCASE YOUR ARTWORKS.</p>
                        </div>
                        <Col md="6" className="divider">
                            <div className="overlay2"></div>
                        </Col>
                    </Row>
                </header>
            </Fade>
            <ParticlesBg color="#6baaaf" num={320} type="cobweb" bg={true} />
   
            <section className="section1 pb-5" style={{ height: "250px" }}>
                <Row>
                    <Col md="4" className="text-center">
                    </Col>
                </Row>
            </section>
                
            <Animation></Animation>

            <section className="section2">
                <Container>
                    <Row className="mb-5 text-center another-section">
                        <Col md={{ span: 6, offset: 3 }} className="">
                            <Fade left>
                                <h1 className="mb-5">JOIN US</h1>
                            </Fade>
                            <Fade right>
                                <p className="mb-5">
                                    WORLD'S BEST DESIGNERS AND CREATIVE MINDS.
                                    SHOWCASING THEIR LATEST CREATIONS AS WELL AS MASTERWORKS.
                                    </p>
                            </Fade>
                            <div>
                                <img src={icon} className="mb-5 icon" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="section2-container section2-body">
                    <div className="">
                        <Row className="d-flex flex-row justify-content-center align-items-center">
                            <Col lg={5} className="text-center section2-overlay">
                                <div className="section2Div">
                                    <h1>
                                        FASHION DESIGNER ?
                                    </h1>
                                </div>
                            </Col>
                            <Col lg={5} className="text-center">
                                <div className="section2Div">
                                    <Fade right>
                                        <p>
                                            EXPLORE BEAUTIFUL PORTFOLIOS, EDITORIALS, PUBLICATIONS AND LOOKBOOKS;
                                            FIND THE RIGHT MODEL, PHOTOGRAPHER OR STYLIST FOR YOUR NEXT CREATIVE PHOTO PROJECT,
                                            OR JUST GET YOUR DAILY DOSE OF OVERWHELMING INSPIRATION!
                                        </p>
                                    </Fade>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex flex-row justify-content-center align-items-center">
                            <Col lg={5} className="text-center">
                                <div className="section2Div">
                                    <Fade left>
                                        <p>
                                            CREATE CASTINGS TO FIND THE MODELS YOU NEED FOR YOUR NEXT CREATIVE PROJECT.
                                            SHOWCASE YOUR PORTFOLIO AND BUILD A TEAM OF STYLISTS, MAKEUP ARTISTS, MODELS AND ASSISTANTS
                                            TO SUPERCHARGE YOUR CREATIVITY.
                                        </p>
                                    </Fade>
                                </div>
                            </Col>
                            <Col lg={5} className="text-center section2-overlay">
                                <div className="section2Div">
                                    <h1 >
                                        PHOTOGRAPHER ?
                                    </h1>
                                </div>
                            </Col>
                        </Row>

                        <Row className="d-flex flex-row justify-content-center align-items-center">
                            <Col lg={5} className="text-center section2-overlay">
                                <div className="section2Div">
                                    <h1>
                                        STYLIST OR MAKEUP ARTIST ?
                                    </h1>
                                </div>
                            </Col>
                            <Col lg={5} className="text-center">
                                <div className="section2Div">
                                    <Fade right>
                                        <p>
                                            YOUR WORK IS KEY FOR PHOTOGRAPHY PRODUCTIONS! FIND JOB OPPORTUNITIES OR GROW YOUR PORTFOLIO.
                                            THOUSANDS OF PROFILES MIGHT BE SEARCHING FOR YOUR SERVICES!
                                        </p>
                                    </Fade>
                                </div>
                            </Col>
                        </Row>

                        <Row className="d-flex flex-row justify-content-center align-items-center">
                            <Col lg={5} className="text-center ">
                                <div className="section2Div">
                                    <Fade left>
                                        <p>
                                            JOIN CASTINGS IN YOUR AREA, BOTH FOR PROFESSIONAL AND AMATEUR MODELS.
                                            GET YOUR BOOK IN FRONT OF THOUSANDS OF PROFESSIONAL PHOTOGRAPHERS AND AGENCY SCOUTERS.
                                        </p>
                                    </Fade>
                                </div>
                            </Col>
                            <Col lg={5} className="text-center section2-overlay">
                                <div className="section2Div">
                                    <h1>
                                        MODEL ?
                                    </h1>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </section>

            <Footer></Footer>
        </>
    )
}

export default Home
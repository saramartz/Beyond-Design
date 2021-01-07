import React, { Component } from 'react'
import AccountService from '../../../service/account.service'
import AccountEdit from "./Account-edit"
import Popup from "../../shared/Popup/Popup"
import PopupDelete from "../../shared/Popup/Popup-delete"
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import linkedin from "./linkedin.png"
import insta from "./insta.png"
import whatsapp from "./whatsapp.png"
import email from "./mail.png"
import follows from "./users.png"
import { GeoAlt } from 'react-bootstrap-icons'

class Account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser,
            showModal: false,
            showDeleteModal: false
        }
        this.accountService = new AccountService()
    }

    componentDidMount = () => this.displayInfo()

    displayInfo = () => {
        const user_id = this.props.match.params.user_id

        this.accountService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))   
    }

    deleteUser = () => {
        const user_id = this.props.match.params.user_id

        this.accountService
            .deleteUser(user_id)
            .then(res => {
                this.setState({ user: res.data })
                this.props.history.push('/')  
                this.props.removeUser()
            })
            .catch(err => console.log(err))   
    }

    handleModal = visible => this.setState({ showModal: visible })
    handleDeleteModal = visible => this.setState({ showDeleteModal: visible })

    render() {

        return (
            <>
                <Fade>
                <Container className="account-details">         
                    <Row>
                        <Col md={5} className="account-section1 text-center">  
                            <div className="account-img">
                                
                                <Card.Img className="mb-4" src={this.state.user.image} alt={this.state.user.name} />
                       
                            </div>    
                            <h2 className="mb-2">{this.state.user.name}</h2>
                            <p>{this.state.user.specialty}</p>
                            <Row className="mb-3">
                                <Col>
                                    <a href={this.state.user.instagram} target="_blank" rel="noreferrer">
                                        <img
                                            alt="instagram logo"
                                            src={insta}
                                            className="mt-1"
                                            style={{width: '46px', opacity: 0.5 }}
                                        />
                                    </a>
                                </Col>
                                <Col>
                                    <a href={this.state.user.linkedin} target="_blank" rel="noreferrer">
                                        <img
                                            alt="linkedin logo"
                                            src={linkedin}
                                            className="mt-1"
                                            style={{width: '46px', opacity: 0.5 }}
                                        />
                                    </a>
                                </Col>
                                <Col>
                                    <a href={`https://api.whatsapp.com/send?phone=${this.state.user.mobile}&text=%20Hi!`} target="_blank" rel="noreferrer">
                                        <img
                                            alt="whatsapp logo"
                                            src={whatsapp}
                                            className=""
                                            style={{width: '55px', opacity: 0.5 }}
                                        />
                                    </a>                                        
                                </Col>
                                <Col>
                                    <a href={"mailto:" + this.state.user.email} target="_blank" rel="noreferrer">
                                        <img
                                            alt="mail logo"
                                            src={email}
                                            className="mt-1"
                                            style={{width: '53px', opacity: 0.5 }}
                                        />
                                    </a>                                        
                                </Col>
                            </Row>                             
                               
                            <p>{this.state.user.introduction}</p>     
                            <p className="location"><GeoAlt className="mr-2 mb-1" />{this.state.user.area.location[0]}, {this.state.user.area.location[1]}</p>    
                                                    
                            <hr />    
                            <Link to={`/${this.props.match.params.user_id}/follows`} className="follows">
                                <img
                                            alt="mail logo"
                                            src={follows}
                                            className="mt-1"
                                            style={{width: '53px', opacity: 0.5 }}
                                    />
                                <p>{this.state.user.follows.length} following</p>
                            </Link>                               
                                                                            
                            <Button onClick={() => this.handleModal(true)} variant="none" size="sm" className="create-btn mr-4 mt-5 btn-transparent">Edit</Button>
                            
                            <PopupDelete show={this.state.showDeleteModal} handleModal={this.handleDeleteModal} title={"DELETE ACCOUNT"}>                        
                                <Row className='justify-content-center'>
                                    <Col xs='auto'>
                                        <Button onClick={() => this.handleDeleteModal(false)} variant="none" size="sm" className="create-btn mr-4 mt-5 btn-transparent">Close</Button>
                                    </Col>
                                    <Col xs='auto'>
                                        <Button onClick={this.deleteUser} variant="none" size="sm" className="create-btn mt-5 btn-delete">Delete</Button>               
                                    </Col>
                                </Row>
                            </PopupDelete>
                            <Button onClick={() => this.handleDeleteModal(true)} variant="none" size="sm" className="create-btn mt-5 btn-delete">Delete</Button>                    
                        </Col>
                            
                        <Col md={6} className="account-section2 d-flex flex-column justify-content-between">  
                                
                            <div className="mt-5">
                                <h3>About</h3>
                                <hr/>
                                <p className="mb-5">{this.state.user.bio}</p> 
                                <h5>Related Info</h5>
                                <hr />

                                <div className="d-flex flex-row justify-content-between">
                                    <div>
                                        <p>Currently</p> 
                                        <p>Ability to travel</p>
                                    </div>
                                    <div className="info">
                                        <p>{this.state.user.target}</p>
                                        <p>{this.state.user.availability}</p>
                                    </div>
                                </div>                               
                            </div>
                                
                            <div></div>   
                        </Col>    
                    </Row>               
                </Container>              

                </Fade>

                <Popup show={this.state.showModal} handleModal={this.handleModal} title="" className="text-center">
                    <AccountEdit closeModal={() => this.handleModal(false)} updateUserInfo={this.displayInfo} loggedUser={this.props.loggedUser} {...this.props}/>
                </Popup>      
            </>    
        )    
    }
}

export default Account
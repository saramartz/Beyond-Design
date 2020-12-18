import React, { Component } from 'react'
import AccountService from '../../../service/account.service'
import AccountEdit from "./Account-edit"
import Popup from "../../shared/Popup/Popup"
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser,
            showModal: false,
        }
        this.accountService = new AccountService()
    }

    componentDidMount = () => this.displayInfo()

    displayInfo = () => {
        const user_id = this.props.match.params.user_id

        console.log(this.props)

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
            })
            .catch(err => console.log(err))   
    }

    handleModal = visible => this.setState({ showModal: visible })

    render() {

        return (
            <>
                <Container className="account-details">         
                    <Row>
                        <Col md={5} className="account-section1 text-center">  
                            <div className="account-img">
                                
                                <Card.Img className="mb-4" src={this.state.user.image} alt={this.state.user.name} />
                       
                            </div>    
                            <h2 className="mb-2">{this.state.user.name}</h2>
                            <p>{this.state.user.specialty}</p>
                            <p>{this.state.user.introduction}</p>     
                                                    
                            <hr />                                   
                            <p>{this.state.user.area.location[0]}, {this.state.user.area.location[1]}</p> 
                                
                            <Link to={`/${this.props.match.params.user_id}/follows`} className="follows">
                                <p>{this.state.user.follows.length} following</p>
                            </Link>
                                                                            
                            <Button onClick={() => this.handleModal(true)} variant="none" size="sm" className="create-btn mr-4 mt-5 btn-transparent">Edit</Button>
                            <Button onClick={this.deleteUser} variant="none" size="sm" className="create-btn mt-5 btn-delete">Delete</Button>                    
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

                <Popup show={this.state.showModal} handleModal={this.handleModal} title="" className="text-center">
                    <AccountEdit closeModal={() => this.handleModal(false)} updateUserInfo={this.displayInfo} loggedUser={this.props.loggedUser} {...this.props}/>
                </Popup>      
            </>    
        )    
    }
}

export default Account
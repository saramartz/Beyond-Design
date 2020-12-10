import React, { Component } from 'react'
import AccountService from '../../../service/account.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import AccountEdit from "./Account-edit"
import Popup from "../../shared/Popup/Popup"

// import { Link } from 'react-router-dom'

class Account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser,
            showModal: false
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
                <Container className="work-details">
         
                <Row>
                    <Col md={{ span: 6, offset: 1 }} >
                    
                            {this.state.user
                                ?
                                <>
                                    <h3 className="mb-4">{this.state.user.name}</h3>
                                    <p>{this.state.user.specialty}</p>                                 
                                    <img src={this.state.user.image} alt={this.state.user.name} />                        
                                    <hr />
                                    <p>Bio: {this.state.user.bio}</p>  
                                    <p>Birthday: {this.state.user.birthday}</p>  
                                </> 
                                : null
                            }                          
                                                                        
                        <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" className="create-btn mr-4">Edit</Button>
                        <Button onClick={this.deleteUser} variant="dark" size="sm" className="create-btn mr-4">Delete</Button>                        
                            
                    </Col>                           
                </Row>
               
                </Container>


                <Popup show={this.state.showModal} handleModal={this.handleModal} title="New work">
                    <AccountEdit closeModal={() => this.handleModal(false)} updateUserInfo={this.displayInfo} loggedUser={this.props.loggedUser} {...this.props}/>
                </Popup>      
            </>    
        )    
    }
}

export default Account
import React, { Component } from 'react'
import allUsersService from '../../../service/users.service'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class UserDetails extends Component {

    constructor() {
        super()
        this.state = {
            user: []           
        }
        this.allUsersService = new allUsersService()
    }

    componentDidMount = () => this.displayUser()

    displayUser = () => {
        const user_id = this.props.match.params.user_id

        console.log(this.props)

        this.allUsersService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))   
    } 

    render() {

        return (
            <>
                <Container className="user-details">
         
                <Row>
                    <Col md={{ span: 6, offset: 1 }} >
                        <h3 className="mb-4">{this.state.user.name}</h3>
                        <img src={this.state.user.image} alt={this.state.user.name} />
                        <p className="mt-4">{this.state.user.specialty}</p>                        
                        <p>Bio: {this.state.user.bio}</p>
                        <hr />
                        <p>Availability: {this.state.user.availability}</p>  
                        <p>{this.state.user.target}</p>       
                                            
                        <Link to="/professionals" className="btn btn-sm btn-dark ">Back</Link>    
                    </Col>                           
                </Row>
               
                </Container>     
            </>    
        )    
    }
}

export default UserDetails
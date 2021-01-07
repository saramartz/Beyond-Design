import React, { Component } from "react"
import AuthService from "../../../service/auth.service"

import Fade from 'react-reveal/Fade'
import { Container, Row, Col, Form, Button } from "react-bootstrap"

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            user: {
                username: "",
                password: "",
                name: "",
                birthday: "",
                country: "",
                city: ""
            },
            showToast: true,
            toastText: ""
        }
        this.authService = new AuthService()

    }

    handleInputChange = e => this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } })

    handleSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state.user.username, this.state.user.password, this.state.user.name, this.state.user.birthday, this.state.user.country, this.state.user.city)
            .then(theLoggedInUser => {  
                this.props.storeUser(theLoggedInUser.data)               
                this.props.history.push(`/account/${theLoggedInUser.data._id}`)  
            })    
            .catch(err => this.props.handleToastError(true, err.response.data.message))
    }


    render() {

        return (

            <Fade bottom>
                <Container>

                    <Row>
                        <Col md={{ span: 8, offset: 2 }} className="login">
                            <h1 className="text-center">Sign Up</h1>                    
                            <Form onSubmit={this.handleSubmit}>
                                
                                <Form.Group controlId="username">                               
                                    <Form.Control type="text" placeholder="Username" name="username" value={this.state.user.username} onChange={this.handleInputChange} style={{marginBottom:"10px"}}/>
                                    <small><i>* Must be between 2 and 15 characters with no special characters.</i></small>                                    
                                </Form.Group>
                                <Form.Group controlId="name">                               
                                    <Form.Control type="text" placeholder="Full Name" name="name" value={this.state.user.name} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="birthday">                               
                                    <Form.Control type="date" placeholder="Birthdate" name="birthday" value={this.state.user.birthday} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="city">                               
                                    <Form.Control type="text" placeholder="City" name="city" value={this.state.user.city} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="country">                               
                                    <Form.Control type="text" placeholder="Province" name="country" value={this.state.user.country} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="password">                               
                                    <Form.Control type="password" placeholder="Password" name="password" value={this.state.user.password} onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group className="text-center">
                                    <Button className="btn-transparent" variant="none" type="submit">Sign Up</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    
                </Container>
            </Fade>
        )
    }
}

export default Signup
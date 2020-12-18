import React, { Component } from "react"
import AuthService from "../../../service/auth.service"

import { Container, Row, Col, Form, Button } from "react-bootstrap"

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            name: "",
            birthday: "",
            country: "",
                city: "",
        }
        this.authService = new AuthService()

    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state.username, this.state.password, this.state.name, this.state.birthday, this.state.country, this.state.city)
            .then(theLoggedInUser => {
                console.log("Sign Up and logged as: ", theLoggedInUser)
                
                this.props.storeUser(theLoggedInUser.data)               
                this.props.history.push("/login")  
            })
            .catch(err => console.log("Error", {err}))
    }


    render() {

        return (

            <Container>

                <Row>
                    <Col md={{ span: 8, offset: 2 }} className="login">
                        <h1 className="text-center">Sign Up</h1>                    
                        <Form onSubmit={this.handleSubmit}>
                            
                            <Form.Group controlId="username">                               
                                <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="name">                               
                                <Form.Control type="text" placeholder="Full Name" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                               <Form.Group controlId="birthday">                               
                                <Form.Control type="date" placeholder="Birthdate" name="birthday" value={this.state.birthday} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="city">                               
                                <Form.Control type="text" placeholder="City" name="city" value={this.state.city} onChange={this.handleInputChange} />
                            </Form.Group>
                               <Form.Group controlId="country">                               
                                <Form.Control type="text" placeholder="Country" name="country" value={this.state.country} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">                               
                                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group className="text-center">
                                <Button className="btn-transparent" variant="none" type="submit">Sign Up</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Signup
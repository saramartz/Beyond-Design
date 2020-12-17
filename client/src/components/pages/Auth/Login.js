import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.authService
            .login(this.state.username, this.state.password)
            .then(theLoggedInUser => {
                console.log("Logged successfully as: ", theLoggedInUser)
                this.props.storeUser(theLoggedInUser.data)            
                this.props.history.push(`/account/${theLoggedInUser.data._id}`)              
            })
            .catch(err => console.log({ err }))
    }


    render() {

        return (

            //TO-DO add symbols

            <Container >
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className="login">
                        <h1 className="text-center">Login</h1>                       
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label></Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group className="text-center">
                                <Button className="btn-transparent" variant="none" type="submit">Login</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login
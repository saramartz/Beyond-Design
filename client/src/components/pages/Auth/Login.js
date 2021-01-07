import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'

import Fade from 'react-reveal/Fade'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            user: {
                username: '',
                password: ''
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
            .login(this.state.user.username, this.state.user.password)
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
                            <h1 className="text-center">Login</h1>                       
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="username">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text" placeholder="Username" name="username" value={this.state.user.username} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={this.state.user.password} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group className="text-center">
                                    <Button className="btn-transparent" variant="none" type="submit">Login</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        )
    }
}

export default Login
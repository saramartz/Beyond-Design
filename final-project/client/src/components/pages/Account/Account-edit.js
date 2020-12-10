import React, { Component } from 'react'
import AccountService from '../../../service/account.service'

import { Form, Button } from 'react-bootstrap'

class AccountEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
             user: this.props.loggedUser                
        }
        this.accountService = new AccountService()
    }

    handleInputChange = e => { this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value}})
    }

    handleSubmit = e => {
  
        e.preventDefault()

        const user_id = this.state.user._id

        this.accountService
            .editUser(user_id, this.state)
            .then(() => {
                this.props.updateUserInfo()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>       
                <Form onSubmit={this.handleSubmit}>
                    
                    {/* <!-- Name --> */}
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.user.name} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Gender --> */}
                    {/* <Form.Group controlId="gender">                       
                        <Form.Label as="legend" column sm={2}> Gender </Form.Label>
                        <Form.Check inline label="Male" type="radio" name="gender" id={`inline-radio-1`} />
                        <Form.Check inline label="Female" type="radio" name="gender" id={`inline-radio-2`} />
                        <Form.Check inline label="Other" type="radio" name="gender" id={`inline-radio-2`} />
                    </Form.Group> */}

                    {/* <!-- Birthday --> */}
                    <Form.Group controlId="date">
                        <Form.Label>Fecha de creación</Form.Label>
                        <Form.Control type="date" name="date" value={this.state.user.date} onChange={this.handleInputChange} />                       
                    </Form.Group> 

                    {/* <!-- Specialty --> */}
                    {/* <Form.Group controlId="status">
                        <Form.Label>Specialty</Form.Label>
                        <Form.Control type="text" name="status" value={this.state.status} onChange={this.handleInputChange} />
                       
                    </Form.Group> */}

                    {/* <!-- Availability --> */}
                    {/* <Form.Group controlId="status">
                        <Form.Label>Availability</Form.Label>
                        <Form.Control type="text" name="status" value={this.state.status} onChange={this.handleInputChange} />
                        
                    </Form.Group> */}

                    {/* <!-- Target --> */}
                    {/* <Form.Group controlId="target">
                        <Form.Label>Target</Form.Label>
                        <Form.Control type="text" name="target" value={this.state.status} onChange={this.handleInputChange} />
                    </Form.Group> */}

                    {/* <!-- Location --> */}
                    {/* <Form.Group controlId="status">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name="status" value={this.state.status} onChange={this.handleInputChange} />
                    </Form.Group> */}

                    {/* <!-- Bio --> */}
                    <Form.Group controlId="bio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control type="text" name="bio" value={this.state.user.bio} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Username --> */}
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" value={this.state.user.username} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Password --> */}
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.user.password} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Image --> */}
                    <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" name="image" value={this.state.user.image} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit">Save</Button>

                </Form>
            </>
        )
    }
}

export default AccountEdit
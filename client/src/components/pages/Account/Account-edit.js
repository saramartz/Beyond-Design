import React, { Component } from 'react'
import AccountService from '../../../service/account.service'
import FilesService from '../../../service/upload.service'
import Loader from "../../shared/Spinner/Loader"

import { Form, Button, Col, Container, Row } from 'react-bootstrap'

class AccountEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser,
            uploadingActive: false
        }
        this.accountService = new AccountService()
        this.filesService = new FilesService()
    }

    handleInputChange = e => { this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value}})}

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

    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])
        console.log('The image:', e.target.files[0])

        this.setState({ uploadingActive: true })

        this.filesService
            .uploadImage(uploadData)
            .then(response => {
                console.log(response)
                this.setState({
                    user: { ...this.state.user, image: response.data.secure_url },
                    uploadingActive: false                    
                })
                console.log(this.state.user.image)
            })
            .catch(err => console.log('ERRORRR!', err))
    }  

    render() {

        return (
            <Container className="account-edit">
                <Form onSubmit={this.handleSubmit}>
                    <Row>                         
                    <Col xs={4} md={6}>              
                    {/* <!-- Name --> */}
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.user.name} onChange={this.handleInputChange} />
                    </Form.Group>
    
                    {/* <!-- Gender --> */}               
                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" name="gender" value={this.state.user.gender} type="select" onChange={this.handleInputChange} > 
                            <option value="Choose" disabled>Choose</option>    
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>  
                            <option value="Other">Other</option>                     
                        </Form.Control>
                    </Form.Group>

                    {/* <!-- Birthday --> */}
                    <Form.Group controlId="date">
                        <Form.Label>Birthdate</Form.Label>
                        <Form.Control type="date" name="date" value={this.state.user.date} onChange={this.handleInputChange} />                       
                    </Form.Group> 

                    {/* <!-- Specialty --> */}                
                    <Form.Group controlId="specialty">
                        <Form.Label>Specialty</Form.Label>
                        <Form.Control as="select" name="specialty" type="select" value={this.state.user.specialty} onChange={this.handleInputChange} > 
                            <option value="Choose" disabled>Choose</option>    
                            <option value="Photographer">Photographer</option>
                            <option value="Fashion Designer">Fashion Designer</option>  
                            <option value="Stylist">Stylist</option>
                            <option value="Makeup Artist">Makeup Artist</option>
                            <option value="Model">Model</option>
                        </Form.Control>
                    </Form.Group>
                            
                    {/* <!-- Introduction --> */}
                    <Form.Group controlId="introduction">
                        <Form.Label>Introduce yourself</Form.Label>
                        <Form.Control as="textarea" rows={2} name="introduction" type="textarea" value={this.state.user.introduction} onChange={this.handleInputChange} />
                    </Form.Group>    
                            
                    {/* <!-- Bio --> */}
                    <Form.Group controlId="bio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" rows={3} name="bio" type="textarea" value={this.state.user.bio} onChange={this.handleInputChange} />
                    </Form.Group>                           
                </Col>
                        
                <Col xs={4} md={6}>
                                            
                    {/* <!-- Target --> */}                  
                    <Form.Group controlId="target">
                        <Form.Label>Currently</Form.Label>
                        <Form.Control as="select" name="target" value={this.state.user.target} type="select" onChange={this.handleInputChange} > 
                            <option value="Choose" disabled>Choose</option>    
                            <option value="Looking to collaborate">Looking to collaborate</option>
                            <option value="Looking for co-workers">Looking for co-workers</option>                     
                        </Form.Control>
                    </Form.Group>

                    {/* <!-- Availability --> */}      
                   <Form.Group controlId="status">
                        <Form.Label>Ability to travel</Form.Label>
                        <Form.Control as="select" name="status" value={this.state.user.status} type="select" onChange={this.handleInputChange} > 
                            <option value="Choose" disabled>Choose</option>    
                            <option value="No">No</option>
                            <option value="Yes, across the country">Yes, across the country</option>  
                            <option value="Yes, across the continent">Yes, across the continent</option>
                            <option value="Yes, all over the world">Yes, all over the world</option>
                        </Form.Control>
                    </Form.Group>                
                    
                    {/* <!-- Location --> */}
                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city" value={this.state.user.area.location[0]} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" name="country" value={this.state.user.area.location[1]} onChange={this.handleInputChange} />
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
                    <Form.Group>
                        <Form.Label>Image (file) {this.state.uploadingActive && <Loader />}</Form.Label>
                        <Form.File id="custom-file-translate-scss" label="Image" lang="en" custom onChange={this.handleImageUpload}/>
                    </Form.Group>                      
                        </Col>  
                         
                    </Row>
                    <Row>
                              
                    <Col className="text-center mt-4">
                        <Button variant="none" className="btn-transparent" type="submit" disabled={this.state.uploadingActive}>{this.state.uploadingActive ? 'Loading image' : 'Save'}</Button>
                                
                    </Col>  
                    </Row>
            </Form>
        </Container> 
           
        )
    }
}

export default AccountEdit

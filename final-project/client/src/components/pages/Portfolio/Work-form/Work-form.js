import React, { Component } from 'react'
import WorkService from '../../../../service/works.service'
import FilesService from '../../../../service/upload.service'
import UserService from "../../../../service/professionals.service"

import Loader from "../../../shared/Spinner/Loader"

import { Form, Button } from 'react-bootstrap'

class WorkForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            work: {
                title: '',
                description: '',
                date: '',
                status: '',
                image: '',
                coworkers: [],
                author: this.props.loggedUser ? this.props.loggedUser._id : '' 
            },
            user: this.props.loggedUser,
            friends: [],
            uploadingActive: false
        }
        this.worksService = new WorkService()
        this.filesService = new FilesService()
        this.userService = new UserService()
    }

    componentDidMount = () => {      
        this.displayFriends()
        this.getUser()
    }

    getUser = () => {
        const user_id = this.props.loggedUser._id

        this.userService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))  
     }
    
    handleInputChange = e => this.setState({ work: { ...this.state.work, [e.target.name]: e.target.value } })

    handleSubmit = e => {
        e.preventDefault()

        this.worksService
            .saveWork(this.state)
            .then(res => {
                this.props.updateList()
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
                    work: { ...this.state.work, image: response.data.secure_url },
                    uploadingActive: false                    
                })
                console.log(this.state.work.image)
            })
            .catch(err => console.log('ERRORRR!', err))
    }  

    displayFriends = () => {
        this.userService
            .getUsers()
            .then(res => {           

                let filteredUsers = res.data.filter(elm => this.state.user.follows.includes(elm._id))  
                
                this.setState({ friends: filteredUsers })
            })           
            .catch(err => console.log(err))
    }     

    render() {

        return (
            <>       
                <Form onSubmit={this.handleSubmit}>
                    
                    {/* <!-- Title --> */}
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Description --> */}
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Date --> */}
                    <Form.Group controlId="date">
                        <Form.Label>Fecha de creación</Form.Label>
                        <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleInputChange} />
                    </Form.Group> 

                    {/* <!-- Status --> */}
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name="status" value={this.state.status} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="coworkers">                                          
                        <select name="coworkers" value={this.state.coworkers} onChange={this.handleInputChange}>
                            {this.state.friends.map(elm => 
                                <option value={elm._id}>{elm.name}</option>
                            )}                           
                        </select>
                    </Form.Group>                    
                    
                    {/* <!-- Image --> */}
                    {/* <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </Form.Group> */}

                    <Form.Group>
                    <Form.Label>Imagen (file) {this.state.uploadingActive && <Loader />}</Form.Label>
                    <Form.Control type="file" onChange={this.handleImageUpload} />
                    </Form.Group>

                    <Button variant="dark" type="submit" disabled={this.state.uploadingActive}>{this.state.uploadingActive ? 'Subiendo imagen...' : 'Create'}</Button>

                </Form>
            </>
        )
    }
}

export default WorkForm
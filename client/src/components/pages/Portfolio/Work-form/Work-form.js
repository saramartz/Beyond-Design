import React, { Component } from 'react'
import WorkService from '../../../../service/works.service'
import FilesService from '../../../../service/upload.service'
import UserService from "../../../../service/professionals.service"
import BoardService from '../../../../service/boards.service'

import Loader from "../../../shared/Spinner/Loader"

import { Form, Button, Container } from 'react-bootstrap'

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
                board: "",
                author: this.props.loggedUser ? this.props.loggedUser._id : '' 
            },
            user: this.props.loggedUser,
            friends: [],
            boards: [],
            uploadingActive: false,
            showToast: true,
            toastText: ""
        }
        this.worksService = new WorkService()
        this.filesService = new FilesService()
        this.userService = new UserService()
        this.boardsService = new BoardService() 
    }

    componentDidMount = () => { 
        this.getUser()
        this.displayFriends()        
        this.displayBoards()
    }

    getUser = () => {
        const user_id = this.props.loggedUser._id

        this.userService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))  
     }
    
    handleInputChange = e => this.setState({ work: { ...this.state.work, [e.target.name]: e.target.value } })


    handleInputMultiple = e => {
        const selected = []
        e.target.childNodes.forEach(e => e.selected === true ? selected.push(e.value) : null)
        this.setState({ work: { ...this.state.work, [e.target.name]: selected } })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.worksService
            .saveWork(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
                this.props.handleToast(true, 'Successfully submitted!')
            })
            .catch(err => console.log({err})) 
    }

    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])
    
        this.setState({ uploadingActive: true })

        this.filesService
            .uploadImage(uploadData)
            .then(response => {       
                this.setState({
                    work: { ...this.state.work, image: response.data.secure_url },
                    uploadingActive: false                    
                })           
            })
            .catch(err => console.log(err))
    }  

    displayFriends = () => {
        this.userService
            .getUsers()
            .then(res => {   
                
                let workCopy = {...this.state.work}
                let filteredUsers = res.data.filter(elm => this.state.user.follows.includes(elm._id))

                const firstFriend = [filteredUsers[0]]              
                workCopy.coworkers = firstFriend
          
                this.setState({ friends: filteredUsers, work: workCopy})
            })           
            .catch(err => console.log(err))
    } 
    
    displayBoards = () => {
        this.boardsService
            .getBoards()
            .then(res => {
                const boards = res.data.filter(elm => elm.author == this.state.user._id)
                let workCopy = {...this.state.work}

                const firstBoard = boards[0]              
                workCopy.board = firstBoard
          
                this.setState({ boards: boards, work: workCopy })
            })
            .catch(err => console.log(err))
    }    

    render() {
    
        return (
            <Container className="account-edit">       
                <Form onSubmit={this.handleSubmit}>
                    
                    {/* <!-- Title --> */}
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} minLength="5" maxLength="27" required/>
                    </Form.Group>

                    {/* <!-- Description --> */}
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} type="textarea" name="description" value={this.state.description} onChange={this.handleInputChange} minLength="150" maxLength="400" required/>
                    </Form.Group>

                    {/* <!-- Date --> */}
                    <Form.Group controlId="date">
                        <Form.Label>Fecha de creación</Form.Label>
                        <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleInputChange} required/>
                    </Form.Group> 

                    {/* <!-- Status --> */}        
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" name="status" type="select" value={this.state.status} onChange={this.handleInputChange} required> 
                            <option>Choose</option>    
                            <option value="In Progress">In progress</option>
                            <option value="Completed">Completed</option>                     
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="coworkers">
                        <Form.Label>Coworkers</Form.Label>
                        <Form.Control className="form myselect" as="select" type="select" value={this.state.coworkers} custom multiple name="coworkers" onChange={this.handleInputMultiple}>
                            <option disabled style={{marginBottom:"10px", fontStyle:"italic", fontSize:"15px"}}>Press Ctrl or Shift to select multiple</option>
                            {this.state.friends.map(elm => <option key={elm._id} value={elm._id}>{elm.name}</option>)}   
                        </Form.Control>
                        <small><i>* Start following someone to add a coworker</i></small>
                    </Form.Group>            

                    {/* <!-- Board --> */}
                    <Form.Group controlId="board">
                        <Form.Label>Choose your board</Form.Label>
                        <Form.Control as="select" name="board" type="select" value={this.state.board} onChange={this.handleInputChange} >
                            <option>Choose</option>    
                            {this.state.boards.map(elm => <option key={elm._id} value={elm._id}>{elm.title}</option>)}
                        </Form.Control>
                    </Form.Group>
             
                    {/* <!-- Image --> */}
                    <Form.Group>
                        <Form.Label>Imagen (file) {this.state.uploadingActive && <Loader />}</Form.Label>
                        <Form.File id="custom-file-translate-scss" label="Image" lang="en" custom onChange={this.handleImageUpload}/>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="none" className="btn-transparent" type="submit" disabled={this.state.uploadingActive}>{this.state.uploadingActive ? 'Loading image' : 'Create'}</Button>
                    </div>

                    <small><i>* All fields are required</i></small>

                </Form>
            </Container>
        )
    }
}

export default WorkForm

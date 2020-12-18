import React, { Component } from 'react'
import WorkService from '../../../../service/works.service'
import Loader from "../../../shared/Spinner/Loader"
import FilesService from '../../../../service/upload.service'
import UserService from "../../../../service/professionals.service"
import BoardService from '../../../../service/boards.service'

import { Form, Button, Container } from 'react-bootstrap'

class WorkEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            work: {},
            user: this.props.loggedUser,
            collaborators: [],
            boards: []
        }
        this.worksService = new WorkService()
        this.filesService = new FilesService()
        this.userService = new UserService()
        this.boardsService = new BoardService()
    }

    componentDidMount = () => {
        this.workInfo()
        this.displayFriends()
        this.displayBoards()
    }

    workInfo = () => {
        const work_id = this.props.match.params.work_id

        this.worksService
            .getWork(work_id)
            .then(res => this.setState({ work: res.data }))
            .catch(err => console.log(err))  
    }

    handleInputChange = e => { this.setState({ work: {...this.state.work, [e.target.name]: e.target.value}})}

    handleSubmit = e => {
  
        e.preventDefault()

        const work_id = this.props.match.params.work_id

        this.worksService
            .editWork(work_id, this.state)
            .then(() => {
                this.props.updateWork()
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
                let workCopy = {...this.state.work}
                let filteredUsers = res.data.filter(elm => this.state.user.follows.includes(elm._id))

                const firstFriend = [filteredUsers[0]]              
                workCopy.coworkers = firstFriend
          
                this.setState({ collaborators: filteredUsers, work: workCopy})
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
                <Form onSubmit={this.handleSubmit} >
                    
                    {/* <!-- Title --> */}
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.work.title} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Description --> */}
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} type="textarea" name="description" value={this.state.work.description} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Date --> */}
                    <Form.Group controlId="date">
                        <Form.Label>Fecha de creación</Form.Label>
                        <Form.Control type="date" name="date" value={this.state.work.date} onChange={this.handleInputChange} />
                    </Form.Group> 

                    {/* <!-- Status --> */}        
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" name="status" type="select" value={this.state.work.status} onChange={this.handleInputChange} > 
                            <option value="Choose" disabled>Choose</option>    
                            <option value="In Progress">In progress</option>
                            <option value="Completed">Completed</option>                     
                        </Form.Control>
                    </Form.Group>

                    {/* <!-- Coworkers --> */}
                    <Form.Group controlId="coworkers">
                        <Form.Label>Coworkers</Form.Label>
                        <Form.Control as="select" name="coworkers" type="select" value={this.state.work.coworkers} onChange={this.handleInputChange} > 
                            <option value="Choose" disabled>Choose</option>  
                            {this.state.collaborators.map(elm => <option key={elm._id} value={elm._id}>{elm.name}</option>)}
                        </Form.Control>
                    </Form.Group>                    

                    {/* <!-- Board --> */}
                    <Form.Group controlId="board">
                        <Form.Label>Choose your board</Form.Label>
                        <Form.Control as="select" name="board" type="select" value={this.state.work.board} onChange={this.handleInputChange} >
                            <option value="Choose" disabled>Choose</option>    
                            {this.state.boards.map(elm => <option key={elm._id} value={elm._id}>{elm.title}</option>)}
                        </Form.Control>
                    </Form.Group>
             
                    {/* <!-- Image --> */}
                    <Form.Group>
                        <Form.Label>Image (file) {this.state.uploadingActive && <Loader />}</Form.Label>
                        <Form.File id="custom-file-translate-scss" label="Image" lang="en" custom onChange={this.handleImageUpload}/>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="none" className="btn-transparent" type="submit" disabled={this.state.uploadingActive}>{this.state.uploadingActive ? 'Loading image' : 'Save'}</Button>
                    </div>

                </Form>
            </Container>
        )
    }
}

export default WorkEdit

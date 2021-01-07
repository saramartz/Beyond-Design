import React, { Component } from 'react'
import BoardService from '../../../service/boards.service'

import { Form, Button } from 'react-bootstrap'

class BoardForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            board: {
                title: '',              
                author: this.props.loggedUser ? this.props.loggedUser._id : '' 
            },
            showToast: false,
            toastText: ""
        }
        this.boardsService = new BoardService()  
     }

    handleInputChange = e => this.setState({ board: { ...this.state.board, [e.target.name]: e.target.value } })

    handleSubmit = e => {
        e.preventDefault()

        this.boardsService
            .createBoard(this.state.board)
            .then(res => {
                this.props.getBoards()              
                this.props.closeModal()
                this.props.handleToast(true, 'Successfully submitted!')
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>       
                <Form onSubmit={this.handleSubmit} className="account-edit">
                    
                    {/* <!-- Title --> */}
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} minLength="2" maxlength="14" required/>
                    </Form.Group>                                        

                    <div className="text-center">
                        <Button type="submit" size="md" variant="none" className="btn-transparent mt-4">Create</Button>
                    </div>

                </Form>
            </>
        )
    }
}

export default BoardForm
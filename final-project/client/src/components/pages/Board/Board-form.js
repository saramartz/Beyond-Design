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
            }                
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

                    <Button variant="dark" type="submit"> Create </Button>

                </Form>
            </>
        )
    }
}

export default BoardForm
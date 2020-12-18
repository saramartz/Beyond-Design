import React, { Component } from 'react'
import UserService from "../../../service/account.service"
import BoardService from '../../../service/boards.service'

import { Form, Button } from 'react-bootstrap'

class ImageForm extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            board: {               
                _id: "",
                image: ""
            },
            user: this.props.loggedUser,
            boards: [],    
        }
        this.boardsService = new BoardService()    
        this.userService = new UserService()
    }

    componentDidMount = () => { 
        this.displayBoards()
        // this.displayBoard() >>>>>>>>> Conseguir id cuando se muestra formulario
    }
    
    handleInputChange = e => this.setState({ board: { ...this.state.board, [e.target.name]: e.target.value, image: this.props.favImages } }) 
      
    handleSubmit = e => {  
        e.preventDefault()
        this.editBoard()
    } 

    editBoard = () => {
        const board_id = this.state.board._id

        this.boardsService
            .editBoard(board_id, this.state.board)
            .then(() => {              
               this.props.closeModal()              
                console.log("yay!!!")
            })
            .catch(err => console.log(err))
    }

    displayBoards = () => {
        this.boardsService
            .getBoards()
            .then(res => {
                const boards = res.data.filter(elm => elm.author == this.state.user._id)
                this.setState({ boards: boards })
            })
            .catch(err => console.log(err))
    }    
    
    displayBoard = () => {
        const board_id = this.state.board._id

        this.boardsService
            .getBoard(board_id)
            .then(res => this.setState({ board: res.data }))
            .catch(err => console.log(err))   
    } 
 
    render() {

        return (
            <>       
                <Form onSubmit={this.handleSubmit} className="account-edit">                  
                    <Form.Group controlId="images">                                          
                        <Form.Control as="select" name="_id" type="select" value={this.state._id} onChange={this.handleInputChange} >
                            <option value="Choose" disabled>Choose</option>    
                            {this.state.boards.map(elm => <option key={elm._id} value={elm._id}>{elm.title}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <div className="text-center">
                        <Button type="submit" size="md" variant="none" className="btn-transparent  mt-4">Save to board</Button>
                    </div>
                </Form>
            </>
        )
    }
}

export default ImageForm

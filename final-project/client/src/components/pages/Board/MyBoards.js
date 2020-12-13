import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import UserService from '../../../service/account.service'
import BoardService from "../../../service/boards.service"
import BoardForm from "./Board-form"
import BoardCard from "./Board-card"
import Popup from "../../shared/Popup/Popup"

class MyBoards extends Component {

    constructor(props) {
        super(props)
        this.state = {          
            user: this.props.loggedUser,
            boards: [],
            showModal: false
        }
        this.userService = new UserService()
        this.boardsService = new BoardService()
    }   

    componentDidMount = () => {
        this.getUser()
        this.displayBoards()
    }   
    
    getUser = () => {
        const user_id = this.props.match.params.user_id

        this.userService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))  
    }

    displayBoards = () => {
        this.boardsService
            .getBoards()
            .then(res => this.setState({boards: res.data}))
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })
    
    render() {
        return (
            <>
                <Container>
                    <Row> 
                        
                        {
                           this.state.boards.filter(elm => elm.author == this.state.user._id).map(elm => <BoardCard key={elm._id} {...elm} />) 
                        }                
                  
                    </Row>
                    
                    <Row>
                        <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" className="create-btn">New Board</Button>
                    </Row>
                </Container>

                <Popup show={this.state.showModal} handleModal={this.handleModal} title="New work">
                    <BoardForm closeModal={() => this.handleModal(false)} getBoards={this.displayBoards} loggedUser={this.props.loggedUser} />
                </Popup> 
            </>      
        )
    }
}

export default MyBoards
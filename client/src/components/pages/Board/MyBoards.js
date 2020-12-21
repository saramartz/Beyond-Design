import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import UserService from '../../../service/account.service'
import BoardService from "../../../service/boards.service"
import BoardForm from "./Board-form"
import BoardCard from "./Board-card"
import Popup from "../../shared/Popup/Popup"
import Fade from 'react-reveal/Fade'

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
                <Fade>
                <Container>
                    <Row className="mt-5 mb-5"> 
                        
                        {
                           this.state.boards.filter(elm => elm.author == this.state.user._id).map(elm => <BoardCard key={elm._id} {...elm} />) 
                        }    
                   </Row>
                    
                    <Row className=" text-center ">
                       <Col>
                         <Button onClick={() => this.handleModal(true)} variant="none" size="lg" className="btn-obscure mt-5">New Board</Button>
                    </Col>
                    </Row>
                </Container>
                </Fade>

                <Popup show={this.state.showModal} handleModal={this.handleModal} title="New work">
                    <BoardForm closeModal={() => this.handleModal(false)} getBoards={this.displayBoards} loggedUser={this.props.loggedUser} />
                </Popup> 
            </>      
        )
    }
}

export default MyBoards
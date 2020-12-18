import React, { Component } from 'react'
import BoardService from '../../../service/boards.service'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { XCircle } from 'react-bootstrap-icons';

// import WorkEdit from "../Work-edit/Work-edit"
// import Popup from "../../../shared/Popup/Popup"

class BoardDetails extends Component {

    constructor() {
        super()
        this.state = {
            board: {},
            showModal: false,
            hover: false
        }
        this.boardsService = new BoardService()
    }

    componentDidMount = () => this.displayBoard()

    displayBoard = () => {
        const board_id = this.props.match.params.board_id

        this.boardsService
            .getBoard(board_id)
            .then(res => this.setState({ board: res.data }))
            .catch(err => console.log(err))   
    }

    deleteBoard = () => {
        const board_id = this.props.match.params.board_id

        this.boardsService
            .deleteBoard(board_id)
            .then(res => {
                this.setState({ board: res.data })
                this.props.history.push(`/myBoards/${this.props.loggedUser._id}`)  
            })
            .catch(err => console.log(err))   
    }

    getImages = (image) => {  
        let idx = this.state.board.images.indexOf(image)
        this.state.board.images.splice(idx, 1)

        let photos = this.state.board.images
  
        this.setState({ board: {...this.state.board, images: photos } }, () => this.deleteImage())         
    }

    deleteImage = () => {                
        const board_id = this.props.match.params.board_id
            
        this.boardsService
            .editBoard(board_id, this.state)
            .then(() => console.log("good"))            
            .catch((err) => console.log(err))
    }

    toggleHover = (state) => this.setState({hover: state})

    handleModal = visible => this.setState({ showModal: visible })

    render() {
        
        let trash;
            if (this.state.hover) {
                trash = {color: '#c90a0a'}
            } else {
                trash = {color: '#FFFFFF'}
            }

        return (
            <>
                <Container className="images-container">
         
                <Row>
                
                            {this.state.board.images
                                &&
                                this.state.board.images.map(elm => {
                                    return (
                                        <Col md={2} className="pexelimg-container mr-5 ml-5 mb-5 mt-5">
                                            <div className="pexelimg-card" key={elm}>
                                                <Card.Img variant="top" src={elm} /> 
                                            </div>                                       
                                    
                                            <XCircle style={trash} onMouseEnter={this.toggleHover} onMouseLeave={() => this.toggleHover(false)} className="what" size={20} onClick={() => this.getImages(elm)} className="mb-4" />                                            

                                        </Col>
                                    )                                    
                                })                         
                            } 
                </Row> 

                <Row>
                    <Col md={12} className="text-center">
                        <Button onClick={this.deleteBoard} variant="none" size="sm" className="create-btn mr-4 btn-delete">Delete</Button>
                        <Link to={`/myBoards/${this.props.loggedUser._id}`}  className="btn-sm ml-5 btn-obscure">Back</Link>
                    </Col> 
                </Row>    
               
                </Container>             
            </>    
        )    
    }
}

export default BoardDetails

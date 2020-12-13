import React, { Component } from 'react'
import BoardService from '../../../service/boards.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
// import WorkEdit from "../Work-edit/Work-edit"
// import Popup from "../../../shared/Popup/Popup"

class BoardDetails extends Component {

    constructor() {
        super()
        this.state = {
            board: {},
            showModal: false
        }
        this.boardsService = new BoardService()
    }

    componentDidMount = () => this.displayBoard()

    displayBoard = () => {
        const board_id = this.props.match.params.board_id

        console.log(this.props)

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

    handleModal = visible => this.setState({ showModal: visible })

    render() {

        return (
            <>
                <Container className="board-details">
         
                <Row>
                    <Col md={{ span: 6, offset: 1 }} >
                        <h3 className="mb-4">{this.state.board.title}</h3>
                        
                            {this.state.board.images
                                ?
                                this.state.board.images.map(elm => {
                                    return (
                                        <>
                                            <img variant="top" src={elm} style={{ width: "50%", margin: "10px" }} /> 
                                            <Button onClick={() => this.getImages(elm)} variant="dark" size="sm" className="create-btn mb-4">Delete Image</Button>
                                        </>
                                    )
                                    
                                })
                                : null
                            }
                                                   
                        <Button onClick={this.deleteBoard} variant="dark" size="sm" className="create-btn mr-4">Delete</Button>                         
                        {/* <Link to={`/myBoards/${this.props.loggedUser._id}`} className="btn btn-sm btn-dark ">Back</Link> */}

                         {/* <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" className="create-btn mr-4">Edit Work</Button> */}    
                  
                    </Col>
                                        
                </Row>
               
                </Container>             
            </>    
        )    
    }
}

export default BoardDetails
    
    //   {/* <Popup show={this.state.showModal} handleModal={this.handleModal} title="New work">
    //                 <WorkEdit closeModal={() => this.handleModal(false)} updateWork={this.displayWork} loggedUser={this.props.loggedUser} {...this.props}/>
    //             </Popup>       */}
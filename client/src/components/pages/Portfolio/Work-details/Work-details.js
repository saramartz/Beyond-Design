import React, { Component } from 'react'
import WorkService from '../../../../service/works.service'
import BoardService from '../../../../service/boards.service'
import UserService from "../../../../service/professionals.service"
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import WorkEdit from "../Work-edit/Work-edit"
import Popup from "../../../shared/Popup/Popup"
import PopupDelete from "../../../shared/Popup/Popup-delete"
import Fade from 'react-reveal/Fade'

class WorkDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            work: {},
            theBoard: {},
            coworkers: [],
            user: this.props.loggedUser,
            showModal: false,
            showDeleteModal: false
        }
        this.worksService = new WorkService()
        this.boardsService = new BoardService()
        this.userService = new UserService()
    }

    componentDidMount = () => {
        this.displayWork() 
        this.displayCoworkers()
    }

    displayWork = () => {
        const work_id = this.props.match.params.work_id

        this.worksService
            .getWork(work_id)
            .then(res => this.setState({ work: res.data }))
            .then(() => this.displayBoard())
            .then(() => this.displayCoworkers())
            .catch(err => console.log(err))   
    }

    displayBoard = () => {        
        const board_id = this.state.work.board

        this.boardsService
            .getBoard(board_id)
            .then(res => this.setState({theBoard: res.data}))
            .catch(err => console.log(err)) 
    }

    deleteWork = () => {
        const work_id = this.props.match.params.work_id

        this.worksService
            .deleteWork(work_id)
            .then(res => {
                this.setState({ work: res.data })
                this.props.history.push(`/works/${this.state.user._id}`)  
            })
            .catch(err => console.log(err))   
    }


    displayCoworkers = () => {
        this.userService
            .getUsers()
            .then(res => {                 
                let filteredUsers = res.data.filter(elm => this.state.work.coworkers.includes(elm._id))
                this.setState({ coworkers: filteredUsers})
            })           
            .catch(err => console.log(err))
    } 

    handleModal = visible => this.setState({ showModal: visible })
    handleDeleteModal = visible => this.setState({ showDeleteModal: visible })

    render() {

        return (
        
        <>

        <Fade>
        <Container className = "portfolio-container ">
    
       { this.state.theBoard.images && this.state.coworkers ?
            <Row>
                <Col md={5} className="account-section1 portfolio-details text-center mt-4">
                    <h3 className="">{this.state.work.title}</h3>
                    <div className="user-img mt-5">
                        <Card.Img className="mb-4" src={this.state.work.image} alt={this.state.user.title} />
                            </div>
                    <h6 className="mb-5">Date: {this.state.work.date}</h6>       
                    <h5 className="mt-5">Status</h5>   
                    <hr/>        
                    <p> {this.state.work.status}</p>
                                                                                                       
                    <Button onClick={() => this.handleModal(true)} variant="none" size="sm" className="create-btn mr-4 mt-5 btn-transparent">Edit</Button>

                    <PopupDelete show={this.state.showDeleteModal} handleModal={this.handleDeleteModal} title={"DELETE WORK"}>                        
                        <Row className='justify-content-center'>
                            <Col xs='auto'>
                                <Button onClick={() => this.handleDeleteModal(false)} variant="none" size="sm" className="create-btn mr-4 mt-5 btn-transparent">Close</Button>
                            </Col>
                            <Col xs='auto'>
                                <Button onClick={this.deleteWork} variant="none" size="sm" className="create-btn mt-5 btn-delete">Delete</Button>
                            </Col>
                        </Row>
                    </PopupDelete>
                    <Button onClick={() => this.handleDeleteModal(true)} variant="none" size="sm" className="create-btn mt-5 btn-delete">Delete</Button>
                </Col>
                            
                <Col md={6} className="account-section2 d-flex flex-column justify-content-between">
                                
                    <div className="description">
                        <h3 >Description</h3>
                        <hr />
                        <p className="mb-5">{this.state.work.description}</p>
                        <h5>Coworkers</h5>
                        <hr />
                        <div className="">
                            <div className="coworker coworkers-container mt-4 d-flex flex-wrap justify-content-between">
                                        {this.state.coworkers.map(elm => {
                                         return (   <div className="coworkerimg-container text-center mr-5">
                                                        <img key={elm} src={elm.image} />
                                                        <h6 className="mt-3">{elm.name}</h6>
                                                    </div>)
                                        })}                                  
                            </div>             
                        </div>
                        <h5>Board</h5>
                        <hr/>
                    <div className="d-flex flex-row justify-content-around flex-wrap userimg-container mb-4 ml-4">
                           
                                    {this.state.theBoard.images.map(elm => {
                                        return (<Col>
                                            
                                                    <img key={elm} src={elm} />
                                                    
                                                </Col>)
                                    })}
                         </div>
                    </div>
                                
                    <div></div>
                </Col>
            </Row>
            : null  }

                <Popup show={this.state.showModal} handleModal={this.handleModal} >
                    <WorkEdit closeModal={() => this.handleModal(false)} updateWork={this.displayWork} loggedUser={this.props.loggedUser} {...this.props}/>
                </Popup>
        
        </Container> 
                
        </Fade>  
            
           </> 
        )    
    }
}

export default WorkDetails

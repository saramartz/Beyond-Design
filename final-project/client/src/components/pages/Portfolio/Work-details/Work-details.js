import React, { Component } from 'react'
import WorkService from '../../../../service/works.service'
import BoardService from '../../../../service/boards.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import WorkEdit from "../Work-edit/Work-edit"
import Popup from "../../../shared/Popup/Popup"

import { Link } from 'react-router-dom'

class WorkDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            work: {},
            board: {},
            user: this.props.loggedUser,
            showModal: false
        }
        this.worksService = new WorkService()
        this.boardsService = new BoardService()
    }

    componentDidMount = () => {
        this.displayWork()        
    }

    displayWork = () => {
        const work_id = this.props.match.params.work_id

        this.worksService
            .getWork(work_id)
            .then(res => {this.setState({ work: res.data }, () => this.displayBoard())})
            .catch(err => console.log(err))   
    }

    displayBoard = () => {        
        const board_id = this.state.work.board

        this.boardsService
            .getBoard(board_id)
            .then(res => this.setState({board: res.data}))
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

    handleModal = visible => this.setState({ showModal: visible })

    render() {

        return (
            <>
                <Container className="work-details">
         
                <Row>
                    <Col md={{ span: 6, offset: 1 }} >
                    
                        {this.state.board.images ? 
                        
                                <>
                                    <h3 className="mb-4">{this.state.work.title}</h3>
                                    <img src={this.state.work.image} alt={this.state.work.title} />
                                    <p className="mt-4">Status: {this.state.work.status}</p>
                                    <p>Date: {this.state.work.date}</p>
                                    <p>{this.state.work.description}</p>
                                    <hr />
                                    <p>Coworkers: {this.state.work.coworkers}</p> 

                                    <h5>{ this.state.board.title }</h5>

                                    {this.state.board.images.map(elm => <img key={elm} src={elm} style={{marginBottom: "30px"}}/>)} 
                                </>
                            : null
                        }

                        {this.state.user
                         ?
                         <Link to={`/works/${this.state.user._id}`} className="btn btn-sm btn-dark ">Back</Link>   
                         : null
                        } 

                         <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" className="create-btn mr-4">Edit Work</Button>
                         <Button onClick={this.deleteWork} variant="dark" size="sm" className="create-btn mr-4">Delete</Button>     
                        
                        {/* TO-DO cannot get loggedUser ID when the page recharges    */}
                    </Col>                           
                </Row>
               
                </Container>

                <Popup show={this.state.showModal} handleModal={this.handleModal} title="New work">
                    <WorkEdit closeModal={() => this.handleModal(false)} updateWork={this.displayWork} loggedUser={this.props.loggedUser} {...this.props}/>
                </Popup>      
            </>    
        )    
    }
}

export default WorkDetails
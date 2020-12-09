import React, { Component } from 'react'
import WorkService from '../../../service/works.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import WorkEdit from "../Work-edit/Work-edit"
import Popup from "../../shared/Popup/Popup"

import { Link } from 'react-router-dom'

class WorkDetails extends Component {

    constructor() {
        super()
        this.state = {
            work: [],
            showModal: false
        }
        this.worksService = new WorkService()
    }

    componentDidMount = () => this.displayWork()

    displayWork = () => {
        const work_id = this.props.match.params.work_id

        console.log(this.props)

        this.worksService
            .getWork(work_id)
            .then(res => this.setState({ work: res.data }))
            .catch(err => console.log(err))   
    }

    deleteWork = () => {
        const work_id = this.props.match.params.work_id

        this.worksService
            .deleteWork(work_id)
            .then(res => {
                this.setState({ work: res.data })
                this.props.history.push('/works')  
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
                        <h3 className="mb-4">{this.state.work.title}</h3>
                        <img src={this.state.work.image} alt={this.state.work.title} />
                        <p className="mt-4">Status: {this.state.work.status}</p>
                        <p>Date: {this.state.work.date}</p>
                        <p>{this.state.work.description}</p>
                        <hr />
                        <p>{this.state.work.coworkers}</p>                              
                        
                        <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" className="create-btn mr-4">Edit Work</Button>
                        <Button onClick={this.deleteWork} variant="dark" size="sm" className="create-btn mr-4">Delete</Button> 
                        <Link to="/works" className="btn btn-sm btn-dark ">Back</Link>    
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
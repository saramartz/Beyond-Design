import React, { Component } from 'react'
import WorkService from '../../../service/works.service'
import WorkCard from "./Work-card"

import { Container, Row, Button, Modal } from 'react-bootstrap'
import WorkForm from '../Work-form/Work-form'
import Popup from "../../shared/Popup/Popup"
// import Loader from '../shared/Spinner/Loader'

class WorksList extends Component {

    constructor() {
        super()
        this.state = {
            works: [],
            showModal: false
        }
        this.worksService = new WorkService()
    }

    componentDidMount = () => this.displayWorks()

    displayWorks = () => {
        this.worksService
            .getWorks()
            .then(res => this.setState({works: res.data}))
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            
            <>
                <Container>
                    <Row>                                      
            
                        {
                            this.state.works.map(elm => <WorkCard key={elm._id} {...elm} />) 
                        }

                                                
                    </Row>

                    <Row >
                        <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" className="create-btn">Create New Work</Button>
                    </Row>

                </Container>

                

                 <Popup show={this.state.showModal} handleModal={this.handleModal} title="New work">
                    <WorkForm closeModal={() => this.handleModal(false)} updateList={this.displayWorks} loggedUser={this.props.loggedUser} />
                </Popup>
             
            </> 
        )
    }
}

 

export default WorksList
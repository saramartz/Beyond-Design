import React, { Component } from 'react'
import WorkService from '../../../service/works.service'
import WorkCard from "./Work-card"

import { Container, Row, Button, Modal } from 'react-bootstrap'
// import Loader from '../shared/Spinner/Loader'

class WorksList extends Component {

    constructor() {
        super()
        this.state = {
            works: []        
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

    // handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            
            <>
                <Container>
                    <Row>                                      
            
                        {
                            this.state.works.map(elm => <WorkCard key={elm._id} {...elm} />) 
                        }
                        
                    </Row>
                </Container>
            </> 
        )
    }
}

 

export default WorksList
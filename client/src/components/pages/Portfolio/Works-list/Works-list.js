import React, { Component } from 'react'
import WorkService from '../../../../service/works.service'
import UserService from '../../../../service/account.service'
import WorkCard from "./Work-card"
import Fade from 'react-reveal/Fade'
import { Container, Row, Button, Col } from 'react-bootstrap'
import WorkForm from '../Work-form/Work-form'
import Popup from "../../../shared/Popup/Popup"
// import Loader from '../shared/Spinner/Loader'

class WorksList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            works: [],            
            showModal: false
        }
        this.worksService = new WorkService()
        this.userService = new UserService()
    }

    componentDidMount = () => {
        this.getUser()
        this.displayWorks()
    }

    getUser = () => {
        const user_id = this.props.match.params.user_id

        this.userService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))  
    }

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
                <Fade>
                <Container className="portfolio-container mb-5 mt-5">
                    <Row>
                        <Col className="mt-5 text-center">
                            <h2>Portfolio</h2>
                        </Col>                        
                    </Row> 
                    <Row className=" mb-5 d-flex flex-row justify-content-center">                                      
            
                        {
                           this.state.works.filter(elm => elm.author == this.state.user._id || elm.coworkers.includes(this.state.user._id)).map(elm => <WorkCard key={elm._id} {...elm} />) 
                        }                   
                                                
                    </Row>

                    <Row >
                        <Button onClick={() => this.handleModal(true)} variant="none" size="sm" className="create-btn btn-obscure mb-5">Create New Work</Button>
                    </Row>

                </Container>            

                </Fade>

                 <Popup show={this.state.showModal} handleModal={this.handleModal} title=" ">
                    <WorkForm closeModal={() => this.handleModal(false)} updateList={this.displayWorks} loggedUser={this.props.loggedUser} />
                </Popup>             
            </> 
        )
    }
} 

export default WorksList

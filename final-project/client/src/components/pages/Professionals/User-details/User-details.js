import React, { Component } from 'react'
import ProfessionalsService from '../../../../service/professionals.service'
import WorkService from '../../../../service/works.service'
import WorkCard from "../../Portfolio/Works-list/Work-card"
import { Container, Row, Col } from 'react-bootstrap'

class UserDetails extends Component {

    constructor() {
        super()
        this.state = {
            user: [],
            works: []
        }
        this.professionalsService = new ProfessionalsService()
        this.worksService = new WorkService()
    }

    componentDidMount = () => {
        this.displayUser()
        this.displayWorks()
    }

    displayUser = () => {
        const user_id = this.props.match.params.user_id

        console.log(this.props)

        this.professionalsService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))   
    }  
    
    displayWorks = () => {
        this.worksService
            .getWorks()
            .then(res => {
                console.log("These are the works", res.data)
                const works = res.data.filter(elm => elm.author == this.state.user._id)
                this.setState({ works: works })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Container >
         
                <Row>
                    <Col md={{ span: 6, offset: 1 }} className="user-details">
                        <h3 className="mb-4">{this.state.user.name}</h3>
                        <img src={this.state.user.image} alt={this.state.user.name} />
                        <p className="mt-4">{this.state.user.specialty}</p>                        
                        <p>Bio: {this.state.user.bio}</p>
                        <hr />
                        <p>Availability: {this.state.user.availability}</p>  
                        <p>{this.state.user.target}</p> 
                        <hr style={{marginBottom: "50px"}}></hr>
                        <h5 className="mt-4">Portfolio</h5>    
                    </Col>                       
               </Row>
                    
                <Row>
                        <div style={{marginLeft: "80px", marginTop: "10px"}}>                            
                            {
                            this.state.works ? this.state.works.map(elm => <WorkCard key={elm._id} {...elm} />) : null
                            } 
                        </div>    
                </Row>              
               
                </Container>     
            </>    
        )    
    }
}

export default UserDetails
import React, { Component } from 'react'
import ProfessionalsService from '../../../../service/professionals.service'
import UserCard from "../Users-list/User-card"

import { Container, Row } from 'react-bootstrap'

class FashionUsers extends Component {

    constructor() {
        super()
        this.state = {
            users: []           
        }
        this.professionalsService = new ProfessionalsService()
    }

    componentDidMount = () => this.displayUsers()

    displayUsers = () => {
        this.professionalsService
            .getUsers()
            .then(res => this.setState({users: res.data}))
            .catch(err => console.log(err))
    }    

    render() {
        return (            
            <>
                <Container>
                    <Row>                                      
                        
                        {
                            this.state.users.filter(elm => elm.specialty.toString() === "Fashion").map(elm => <UserCard key={elm._id} {...elm}/>)                                                             
                        }
                                                
                    </Row>           
                </Container>
            </> 
        )
    }
} 

export default FashionUsers
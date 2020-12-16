import React, { Component } from 'react'
import ProfessionalsService from '../../../../service/professionals.service'
import UserCard from "./User-card"

import { Container, Row } from 'react-bootstrap'
// import Loader from '../shared/Spinner/Loader'

class UsersList extends Component {

    constructor() {
        super()
        this.state = {
            users: []           
        }
        this.professionalsService = new ProfessionalsService()
    }

    componentDidMount = () => {      
        this.displayUsers()
    }

    displayUsers = () => {
        this.professionalsService
            .getUsers()
            .then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (            
            <>
                <Container>
                    <Row>                                      
            
                        {
                            this.state.users.map(elm => <UserCard key={elm._id} {...elm} />) 
                        }
                                                
                    </Row>           
                </Container>
            </> 
        )
    }
} 

export default UsersList
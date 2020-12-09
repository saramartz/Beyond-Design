import React, { Component } from 'react'
import allUsersService from '../../../service/users.service'
import UserCard from "./User-card"

import { Container, Row, Button } from 'react-bootstrap'
// import Loader from '../shared/Spinner/Loader'

class UsersList extends Component {

    constructor() {
        super()
        this.state = {
            users: []
           
        }
        this.allUsersService = new allUsersService()
    }

    componentDidMount = () => this.displayUsers()

    displayUsers = () => {
        this.allUsersService
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
                            this.state.users.map(elm => <UserCard key={elm._id} {...elm} />) 
                        }
                                                
                    </Row>           
                </Container>

            </> 
        )
    }
}
 

export default UsersList
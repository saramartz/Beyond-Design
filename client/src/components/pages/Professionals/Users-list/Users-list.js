import React, { Component } from 'react'
import ProfessionalsService from '../../../../service/professionals.service'
import UserCard from "./User-card"

import { Container, Row } from 'react-bootstrap'
// import Loader from '../shared/Spinner/Loader'

class UsersList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loggedUser: this.props.loggedUser
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
                const filtered = res.data.filter(elm => elm._id !== this.state.loggedUser._id)
                this.setState({ users: filtered })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (            
            <>
                <Container className="professionals-container">
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
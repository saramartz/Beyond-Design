import React, { Component } from "react"
import UserService from '../../../service/professionals.service'
import AccountService from '../../../service/account.service'

import { Container, Row, Col, Button, Card } from 'react-bootstrap'

class Follows extends Component {
    
     constructor(props) {
        super(props)
        this.state = {
            friends: [],
            user: {}       
        }
        this.userService = new UserService()
        this.accountService = new AccountService()
    }

    componentDidMount = () => {
        this.getUser()
        this.displayFriends()
    }
 
    getUser() {
        const user_id = this.props.match.params.user_id

        this.accountService
            .getUser(user_id)
            .then((res) => this.setState({ user: res.data }))
            .catch((err) => console.log(err))
    }

    displayFriends = () => {
        this.userService
            .getUsers()
            .then(res => {             

                let filteredUsers = res.data.filter(elm => this.state.user.follows.includes(elm._id))  
                
                this.setState({ friends: filteredUsers }, () => this.getUser())
            })           
            .catch(err => console.log(err))
    } 

    getFriends = (id) => {  
        let idx = this.state.user.follows.indexOf(id)
        this.state.user.follows.splice(idx, 1)

        let friends = this.state.user.follows
  
        this.setState({ user: { ...this.state.user, follows: friends } }, () => this.deleteFriends())         
    }

    deleteFriends = () => {                
        const user_id = this.props.match.params.user_id
            
        this.accountService
            .editUser(user_id, this.state)
            .then(() => this.displayFriends())            
            .catch((err) => console.log(err))
    }
  
    render() {
        return (
            <>
                <Container>
                    <Row> 
                      
                        { 
                            this.state.user && this.state.friends ?
                              
                            this.state.friends.map(elm => {
                                return (
                                    <Col lg={3} className="image-container">
                                        <Card className="image-card" key={elm._id}>
                                            <Card.Img variant="top" src={elm.image} />
                                            <Card.Body>
                                            <Card.Text>{elm.name}</Card.Text>
                                            </Card.Body>             
                                            <Button onClick={() => this.getFriends(elm._id)} variant="dark" size="sm" className="create-btn mb-4">Unfollow</Button>
                                        </Card>                
                                    </Col>
                                )
                            })

                            : null
                        } 
                    </Row>
                </Container>
            </> 
        )
    }
}

export default Follows


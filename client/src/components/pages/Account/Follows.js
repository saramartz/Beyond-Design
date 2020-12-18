import React, { Component } from "react"
import UserService from '../../../service/professionals.service'
import AccountService from '../../../service/account.service'
import { Link } from 'react-router-dom'
import { GeoAlt } from 'react-bootstrap-icons'

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
                <Container className="professionals-container">
                    <Row> 
                      
                        { 
                            this.state.user && this.state.friends ?
                              
                            this.state.friends.map((elm, idx) => {
                                return (
                                    <Col lg={3.5} className="professionals-col ml-5 text-center mt-5">
                                        <Card className="professional-card d-flex flex-column justify-content-end mb-5" key={idx}>
                                            <Link to={`/professionals/${elm._id}`}>
                                                <div className="professional-img mb-4" key={elm.id}>
                                                    <Card.Img variant="top" src={elm.image} alt={elm.name} />
                                                </div>                                          
                                                <div ></div>
                                                <div className="profressional-card-text ">
                                                    <p><span style={{fontSize: "18px"}}>{elm.name.trim().replace(/^\w/, (c) => c.toUpperCase())}</span> <br/> {elm.specialty} </p>                        
                                                    <hr/>                                        
                                                    <p className="location"><GeoAlt className="mr-2 mb-1" />Castilla y León</p>                   
                                                </div>                                              
                                            </Link> 
                                            <Button onClick={() => this.getFriends(elm._id)} variant="none" size="sm" className="create-btn mb-4 btn-delete">Unfollow</Button>    
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





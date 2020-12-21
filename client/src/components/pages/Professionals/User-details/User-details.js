import React, { Component } from 'react'
import ProfessionalsService from '../../../../service/professionals.service'
import WorkService from '../../../../service/works.service'
import UserService from '../../../../service/account.service'
import WorkCard2 from "../../Portfolio/Works-list/Work-card2"
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

class UserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            otherUser: {},
            user: {},
            works: []
        }
        this.professionalsService = new ProfessionalsService()
        this.worksService = new WorkService()
        this.userService = new UserService()
    }

    componentDidMount = () => {        
        this.displayUser()        
        this.getLoggedUser()         
        this.displayWorks()   
    } 
    
    displayWorks = () => {
        this.worksService
            .getWorks()
            .then(res => {
                console.log("These are the works", res.data)
                const works = res.data.filter(elm => elm.author == this.state.otherUser._id || elm.coworkers.includes(this.state.otherUser._id) )            
               
                this.setState({ works: works })
            })
            .catch(err => console.log(err))
    }

    // ========== FOLLOWS ========== 

    checkUserFriends() {
       return this.props.loggedUser.follows.includes(this.state.otherUser._id) ? this.setState({ otherUser: {...this.state.otherUser,  weAreFriends: true } }) : null    
    }  
    
    addFriend = (friend_id) => {  
        let id = this.state.user.follows.concat(friend_id)
        
        this.setState({ user: { ...this.state.user, follows: id }, otherUser: { ...this.state.otherUser, weAreFriends: true } }, () => this.updateOtherUserInfo())  
    } 

    // LOGGED USER
    getLoggedUser() {
        this.userService
            .getUser(this.props.loggedUser._id)
            .then((res) => this.setState({ user: res.data }))
            .catch((err) => console.log(err))
    }

    updateUserInfo = () => {         
        const user_id = this.state.user._id
            
        this.userService
            .editUser(user_id, this.state)
            .then(() => console.log("good!!"))            
            .catch((err) => console.log(err))
    }    

    // OTHER USER
    displayUser = () => {
        const user_id = this.props.match.params.user_id       

        this.professionalsService
            .getUser(user_id)
            .then(res => this.setState({ otherUser: res.data }))
            
            .catch(err => console.log(err))   
    } 
    
    updateOtherUserInfo = () => {         
        const user_id = this.state.otherUser._id
            
        this.professionalsService
            .editOtherUser(user_id, this.state.otherUser)
            .then(() => console.log("good!!")) 
            .then(() => this.updateUserInfo())
            .then(() => this.getLoggedUser())
            .then(() => this.displayUser())
            .then(() => this.checkUserFriends())
            .catch((err) => console.log(err))
    }   

    render() {

        return (
            <>
                <Fade>
                <Container className="account-details mb-5">
                    <Row>        
                        <Col md={5} className="account-section1 text-center">               
                            <div className="account-img">                                
                                <Card.Img className="mb-4" src={this.state.otherUser.image} alt={this.state.otherUser.name} />                       
                            </div> 
                            <h2 className="mb-2">{this.state.otherUser.name}</h2>
                            <p>{this.state.otherUser.specialty}</p>
                            <p>{this.state.otherUser.introduction}</p>     
                                                    
                            <hr />                                   
                   
                         {!this.state.otherUser.weAreFriends ? <Button onClick={() => this.addFriend(this.state.otherUser._id)} variant="none" size="sm" className="create-btn mr-4 mt-5 btn-transparent">Follow</Button> : null}   
                                     
                        </Col>
                            
                        <Col md={6} className="account-section2 d-flex flex-column justify-content-between">                                
                            <div className="mt-5">
                                <h3>About</h3>
                                <hr/>
                                <p className="mb-5">{this.state.otherUser.bio}</p> 
                                <h5>Related Info</h5>
                                <hr />

                                <div className="d-flex flex-row justify-content-between">
                                    <div>
                                        <p>Currently</p> 
                                        <p>Ability to travel</p>
                                    </div>
                                    <div className="info">
                                        <p>{this.state.otherUser.target}</p>
                                        <p>{this.state.otherUser.availability}</p>
                                    </div>
                                </div>                               
                            </div>
                                
                            <div></div>   
                        </Col>                        
                    </Row>             
                </Container>

                <Container className="portfolio-container mb-5" >     
                    <Row>
                        <Col className="mt-5 text-center">
                            <h2>Portfolio</h2>
                        </Col>                        
                    </Row>    
                    <Row className=" mb-5 d-flex flex-row justify-content-center">
                                        
                            {
                            this.state.works ? this.state.works.map(elm => <WorkCard2 key={elm._id} {...elm} />) : null
                            } 
                     
                    </Row>  
               </Container>
                </Fade>
            </>    
        )    
    }
}

export default UserDetails

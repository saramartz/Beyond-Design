import React, { Component } from 'react'
import ProfessionalsService from '../../../../service/professionals.service'
import WorkService from '../../../../service/works.service'
import UserService from '../../../../service/account.service'
import WorkCard from "../../Portfolio/Works-list/Work-card"
import { Container, Row, Col, Button } from 'react-bootstrap'
import Reveal from 'react-reveal/Reveal';

class UserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            otherUser: {},
            user: {},
            works: [],      
            weAreFriends: false
        }
        this.professionalsService = new ProfessionalsService()
        this.worksService = new WorkService()
        this.userService = new UserService()
    }

    componentDidMount = () => {        
        this.displayUser()        
        this.getLoggedUser()
        this.checkUserFriends() //TO-DO make button dissapear
        this.displayWorks()

    }

    displayUser = () => {
        const user_id = this.props.match.params.user_id       

        this.professionalsService
            .getUser(user_id)
            .then(res => this.setState({ otherUser: res.data }))
            .catch(err => console.log(err))   
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

    // TO-DO create weAreFriends in user schema
    checkUserFriends() {
        if (this.props.loggedUser.follows.includes(this.state.otherUser._id)) {
          this.setState({ weAreFriends: true })
        } else {
          this.setState({ weAreFriends: false })
        }
    }    

    getLoggedUser() {
        this.userService
            .getUser(this.props.loggedUser._id)
            .then((res) => this.setState({ user: res.data }))
            .catch((err) => console.log(err))
    }

    addFriend = (friend_id) => {  
        let id = this.state.user.follows.concat(friend_id)

        if (this.state.user.follows.includes(friend_id)) {
            this.checkUserFriends() // make button disabled
        } else {
            this.setState({ weAreFriends: true, user: { ...this.state.user, follows: id } }, () => this.updateUserInfo() )       
        }     
    } 

    updateUserInfo = () => {         
        const user_id = this.state.user._id
            
        this.userService
            .editUser(user_id, this.state)
            .then(() => console.log("good!!"))            
            .catch((err) => console.log(err))
    }     

    render() {

        return (
            <>
                <Container className="account-details mb-5">
                    <Row>        
                        <Col md={5} className="account-section1 text-center">                   
                            <img className="mb-4" src={this.state.otherUser.image} alt={this.state.otherUser.name} />                 
                            <h2 className="mb-2">{this.state.otherUser.name}</h2>
                            <p>{this.state.otherUser.specialty}</p>
                            <p>{this.state.otherUser.introduction}</p>     
                                                    
                            <hr />                                   
                            {/* <p>{this.state.otherUser.area}, Castilla y León</p>                                        */}
                                                               
                            <Button onClick={() => this.addFriend(this.state.otherUser._id)} disabled={this.state.weAreFriends} variant="none" size="sm" className="create-btn mr-4 mt-5 btn-transparent">Follow</Button>
                                     
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
                            this.state.works ? this.state.works.map(elm => <WorkCard key={elm._id} {...elm} />) : null
                            } 
                     
                    </Row>  
               </Container> 
            </>    
        )    
    }
}

export default UserDetails

import React, { Component } from 'react'
import ProfessionalsService from '../../../../service/professionals.service'
import WorkService from '../../../../service/works.service'
import UserService from '../../../../service/account.service'
import WorkCard from "../../Portfolio/Works-list/Work-card"
import { Container, Row, Col, Button } from 'react-bootstrap'

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
                const works = res.data.filter(elm => elm.author == this.state.otherUser._id)
                this.setState({ works: works })
            })
            .catch(err => console.log(err))
    }

    // ========== FOLLOWS ========== 

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
                <Container >
         
                    <Row>
                        <Col md={{ span: 6, offset: 1 }} className="user-details">
                            <h3 className="mb-4">{this.state.otherUser.name}</h3>
                            <img src={this.state.otherUser.image} alt={this.state.otherUser.name} />
                            <p className="mt-4">{this.state.otherUser.specialty}</p>                        
                            <p>Bio: {this.state.otherUser.bio}</p>
                            <hr />
                            <p>Availability: {this.state.otherUser.availability}</p>  
                            <p>{this.state.otherUser.target}</p> 
                            
                            <Button onClick={() => this.addFriend(this.state.otherUser._id)} disabled={this.state.weAreFriends} variant="dark" size="sm" className="create-btn mb-4">Follow</Button> 

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
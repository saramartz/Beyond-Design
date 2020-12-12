import React, { Component } from 'react'
// import ImageCard from "./Image-card"
import { createClient } from 'pexels';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import UserService from '../../../service/account.service'

const client = createClient('563492ad6f91700001000001320414824c594940b38138c28df3e9e3');

class ImagesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],
            user: this.props.loggedUser,           
            search: ""
        }
        this.userService = new UserService()
    }

    componentDidMount = () => {
        this.getUser()
        this.displayImages()     
 
    }

    displayImages = () => {
        client.photos
            .curated({ per_page: 15 })
            .then(res => this.setState({images: res.photos}))
            .catch(err => console.log(err))    
    }

    searchImage = e => {
        e.preventDefault()

        const value = e.target.value
        this.setState({ search: value  }, this.searchResult )      
    }

    searchResult = () => {          
         client.photos
            .search({ query: this.state.search, per_page: 2 })
            .then(res => this.state.search.length > 0 ? this.setState({images: res.photos}) : this.setState(this.displayImages))
            .catch(err => console.log(err))           
    }     

    ////////////////////////////////////////////////////

    getUser = () => {
        const user_id = this.props.match.params.user_id

        this.userService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))  
    }

    getFavImages = (src) => {  
        let photos = this.state.user.board.concat(src)
        this.setState({ user: { ...this.state.user, board: photos } }, () => this.updateUserInfo())         
    }

    updateUserInfo = () => { 
        
        const user_id = this.props.match.params.user_id
            
        this.userService
            .editUser(user_id, this.state)
            .then(() => console.log("good!!"))            
            .catch((err) => console.log(err))
    }
    
    render() {
        return (
            <>
                <Container>
                    <Row>  
                        <Col lg={10} className="image-container mb-4 text-center">                    
                            <Form.Control className="form" type="text" placeholder="Search" value={this.state.search} onChange={this.searchImage} />                      
                        </Col>   
                        
                        {/* {console.log(this.state.images)} */}
            
                        {                 
                              
                            this.state.images.map(elm => {
                                return (
                                    <Col lg={3} className="image-container">
                                        <Card className="image-card" key={elm.id}>
                                            <Card.Img variant="top" src={elm.src.medium} />
                                            <Card.Body>
                                            <Card.Text>Credits: {elm.photographer}</Card.Text>
                                            </Card.Body>             
                                            <Button onClick={() => this.getFavImages(elm.src.medium)} variant="dark" size="sm" className="create-btn mb-4">Save</Button>
                                        </Card>                
                                    </Col>
                                )
                            }) 
                     
                        } 
                    </Row>
                </Container>
            </>      
        )
    }
}

export default ImagesList
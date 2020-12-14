import React, { Component } from 'react'
// import ImageCard from "./Image-card"
import { createClient } from 'pexels';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import UserService from '../../../service/account.service'
import ImageForm from "./Image-form"
import Popup from "../../shared/Popup/Popup"

const client = createClient('563492ad6f91700001000001320414824c594940b38138c28df3e9e3');

class ImagesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],             
            search: "",
            favImages: [],
            savedImage: "",
            showModal: false
        }
        this.userService = new UserService()       
    }

    componentDidMount = () => {
        this.displayImages() 
    }

    // ========== DISPLAY & SEARCH IMAGES ==========

    displayImages = () => {
        client.photos
            .search({ query: "cyberpunk", per_page: 15 })
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
    
    // ========== ADD IMAGES TO BOARD ==========

    getFavImages = (src) => {  
        let photos = this.state.favImages.concat(src)
        this.setState({ favImages: photos })         
    }

    openModal = (url) => {
        this.setState({savedImage: url}, () => this.handleModal(true))
    }

    handleModal = visible => this.setState({ showModal: visible })
    
    render() {
        return (
            <>
                <Container>
                    <Row>  
                        <Col lg={10} className="image-container mb-4 text-center">                    
                            <Form.Control className="form" type="text" placeholder="Search" value={this.state.search} onChange={this.searchImage} />                      
                        </Col> 

                        {                 
                              
                            this.state.images.map(elm => {
                                return (
                                    <Col lg={3} className="image-container">
                                        <Card className="image-card" key={elm.id}>
                                            <Card.Img variant="top" src={elm.src.medium} />
                                            <Card.Body>
                                            <Card.Text>Credits: {elm.photographer}</Card.Text>
                                            </Card.Body>             
                                            <Button onClick={() => {
                                                this.openModal(elm.src.medium)                                          
                                            }} variant="dark" size="sm" className="create-btn mb-4">Save</Button>
                                        </Card>                
                                    </Col>
                                )
                            }) 
                     
                        }
                        
                    </Row>
                </Container>

                 <Popup show={this.state.showModal} handleModal={this.handleModal} title="Choose your board">
                    <ImageForm closeModal={() => this.handleModal(false)} loggedUser={this.props.loggedUser} favImages={this.state.savedImage}/>
                </Popup>  
            </>      
        )
    }
}

export default ImagesList
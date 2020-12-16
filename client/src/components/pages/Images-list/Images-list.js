import React, { Component } from 'react'

import { createClient } from 'pexels';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

import { Heart } from 'react-bootstrap-icons';
import Reveal from 'react-reveal/Fade';

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
                <Container className="images-container">
                    <Reveal effect="fadeInUp">
                    <Row>  
                        <Col md={9} sm={4} className="mt-1 text-center">                             
                            <input className="searchBar" placeholder="Search" value={this.state.search} onChange={this.searchImage} />
                        </Col>
                        
                        <Col md={2}  className="mb-4 text-center">                                
                            <Button type="submit" variant="none" className="btn-searchBar btn-transparent">Search</Button>          
                        </Col>                    

                        {               
                              
                            this.state.images.map(elm => {
                                return (
                                    <Col lg={3} className="pexelimg-container">
                                        <div className="pexelimg-card" key={elm.id}>
                                            <Card.Img variant="top" src={elm.src.medium} />
                                        </div>
                                        <Heart color="white" className="heart" size={20} onClick={() => {this.openModal(elm.src.medium)}} />                                            
                                    </Col>
                                )
                            }) 
                     
                        }
                        
                        </Row>
                        </Reveal>
                </Container>

                 <Popup show={this.state.showModal} handleModal={this.handleModal} title="Choose your board">
                    <ImageForm closeModal={() => this.handleModal(false)} loggedUser={this.props.loggedUser} favImages={this.state.savedImage}/>
                </Popup>  
            </>      
        )
    }
}

export default ImagesList


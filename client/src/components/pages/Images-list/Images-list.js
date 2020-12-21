import React, { Component } from 'react'

import { createClient } from 'pexels';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

import { Heart } from 'react-bootstrap-icons';

import Fade from 'react-reveal/Fade'

import UserService from '../../../service/account.service'
import ImageForm from "./Image-form"
import PopupBoard from "../../shared/Popup/Popup-board"

const client = createClient('563492ad6f91700001000001320414824c594940b38138c28df3e9e3');

class ImagesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],             
            search: "",
            favImages: [],
            savedImage: "",
            showModal: false,
            hover: false
        }
        this.userService = new UserService()       
    }

    componentDidMount = () => {
        this.displayImages() 
    }

    // ========== DISPLAY & SEARCH IMAGES ==========

    displayImages = () => {
        client.photos
            .search({ query: "fashion", per_page: 16 })
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
            .search({ query: this.state.search, per_page: 16 })
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

    toggleHover = (state) => this.setState({hover: state})

    handleModal = visible => this.setState({ showModal: visible })
    
    render() {

           let heart;
            if (this.state.hover) {
                heart = {color: '#000000', background: "rgba(255,255,255,0.31)"}
            } else {
                heart = {color: '#FFFFFF'}
            }

        return (
            
            <>
                <Fade>
                <Container className="images-container">
                    <Row>  
                        <Col md={12} sm={6} className="mt-1 mb-5 text-center searchform">                             
                            <Form.Control type="text" className="searchBar" placeholder="Search" value={this.state.search} onChange={this.searchImage} />
                        </Col>

                        {  this.state.images.map(elm => {
                                return (
                                    <Col lg={3} className="pexelimg-container">
                                        <div className="pexelimg-card" key={elm.id}>
                                            <Card.Img variant="top" src={elm.src.medium} />
                                        </div>
                                        <Heart style={heart} onMouseEnter={this.toggleHover} onMouseLeave={() => this.toggleHover(false)} className="heart" size={40} onClick={() => {this.openModal(elm.src.medium)}} />                                            
                                    </Col>
                                )
                            })                    
                        }                        
                    </Row>
                </Container>
                </Fade>

                 <PopupBoard show={this.state.showModal} handleModal={this.handleModal} title="Choose your board">
                    <ImageForm closeModal={() => this.handleModal(false)} loggedUser={this.props.loggedUser} favImages={this.state.savedImage}/>
                </PopupBoard>  
            </>      
        )
    }
}

export default ImagesList


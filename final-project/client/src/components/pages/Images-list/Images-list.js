import React, { Component } from 'react'
import ImageCard from "./Image-card"
import { createClient } from 'pexels';
import { Container, Row, Col, Form } from 'react-bootstrap';

const client = createClient('563492ad6f91700001000001320414824c594940b38138c28df3e9e3');

class ImagesList extends Component {

    constructor() {
        super()
        this.state = {
            images: [],
            search: ""
        } 
    }

    componentDidMount = () => this.displayImages()

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

    render() {
        return (
            <>
                <Container>
                    <Row>  
                        <Col lg={10} className="image-container mb-4 text-center">                    
                            <Form.Control className="form" type="text" placeholder="Search" value={this.state.search} onChange={this.searchImage} />                      
                        </Col>   
                        
                        {console.log(this.state.images)}
            
                        {
                            this.state.images.map(elm => <ImageCard key={elm.id} {...elm} />) 
                        } 
                    </Row>
                </Container>
            </>      
        )
    }
}

export default ImagesList
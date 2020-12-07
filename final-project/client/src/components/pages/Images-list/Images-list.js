import React, { Component } from 'react'
import ImageCard from "./Image-card"
import { createClient } from 'pexels';
import { Container, Row, Col, Form } from 'react-bootstrap';

const client = createClient('563492ad6f91700001000001a1590c5923d54505889bed4207b1ad79');

class ImagesList extends Component {

    constructor() {
        super()
        this.state = {
            images: []
        } 
    }

    componentDidMount = () => this.displayImages()

    displayImages = () => {
        client.photos
            .curated({ per_page: 30 })
            .then(res => this.setState({images: res.photos}))
            .catch(err => console.log(err))    
    }

    render() {
        return (

            <>
                <Container>
                    <Row>  
                        <Col lg={10} className="image-container mb-4 text-center">  
                            <Form.Control className="form" type="text" placeholder="Search" aria-label="Search" />                            
                        </Col>                
            
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
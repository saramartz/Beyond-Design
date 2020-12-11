import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap'

class ImageCard extends Component {

    constructor() {
        super()
        this.state = {
            
        }
    }

    saveImage = () => {
        this.worksService
            .getWorks()
            .then(res => this.setState({works: res.data}))
            .catch(err => console.log(err))
    }    

    render() {
        return (
            <>
                 <Col lg={3} className="image-container">
                    <Card className="image-card">
                        <Card.Img variant="top" src={this.props.src.medium} />
                        <Card.Body>
                        <Card.Text>Credits: {this.props.photographer}</Card.Text>
                        </Card.Body>             
                        <Button variant="dark" size="sm" className="create-btn mb-4">Save</Button>
                    </Card>                
                </Col>
            </>      
        )
    }
}

            // <form action="/influencer/favorita/{{id}}" method="POST">
            //     <button type="submit" class="btn btn-sm text-white">Añadir a favoritas</button>
            // </form>

export default ImageCard









 
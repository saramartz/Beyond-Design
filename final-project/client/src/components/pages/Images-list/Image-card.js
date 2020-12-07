import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const ImageCard = ({ src, photographer }) => {
    return (
        <Col lg={3} className="image-container">
            <Card className="image-card">
                <Card.Img variant="top" src={src.original} />
                <Card.Body>
                <Card.Text>Credits: {photographer}</Card.Text>
                </Card.Body>
            </Card>          
        </Col>
    )
}

export default ImageCard









 
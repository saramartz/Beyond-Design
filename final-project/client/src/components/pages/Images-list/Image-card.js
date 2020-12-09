import { Col, Card } from 'react-bootstrap'

const ImageCard = ({ src, photographer }) => {
    return (
        <Col lg={3} className="image-container">
            <Card className="image-card">
                <Card.Img variant="top" src={src.medium} />
                <Card.Body>
                <Card.Text>Credits: {photographer}</Card.Text>
                </Card.Body>
            </Card>          
        </Col>
    )
}

export default ImageCard









 
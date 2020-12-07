import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'

// import { Link } from 'react-router-dom'

const WorkCard = ({ image, title }) => {
    return (
        <Col lg={3} className="image-container">
            <Card className="image-card">                
                <Card.Body>
                <Card.Text>{title}</Card.Text>
                </Card.Body>
                <Card.Img variant="top" src={image} />
            </Card>          
        </Col>
    )
}  

export default WorkCard

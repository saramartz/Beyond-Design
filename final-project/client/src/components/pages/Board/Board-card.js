import { Col, Card } from 'react-bootstrap'

const BoardCard = () => {
    return (
        <Col lg={3} className="image-container">
            <Card className="image-card">  
                <Card.Img variant="top" />
                <Card.Text>hello</Card.Text>
            </Card>          
        </Col>
    )
}  

export default BoardCard


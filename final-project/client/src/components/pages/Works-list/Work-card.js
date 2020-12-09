import { Col, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const WorkCard = ({ image, title, _id }) => {
    return (
        <Col lg={3} className="image-container">
            <Card className="image-card">  
                <Link to={`/works/${_id}`}>    
                    <Card.Body>
                    <Card.Text >{title}</Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={image} />          
                </Link> 
            </Card>          
        </Col>
    )
}  

export default WorkCard

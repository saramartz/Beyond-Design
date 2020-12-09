import { Col, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const WorkCard = ({ image, username, specialty, location, _id }) => {
    return (
        <Col lg={3} className="image-container">
            <Card className="image-card">  
                <Link to={`/professionals/${_id}`}> 
                    <Card.Img variant="top" src={image} />     
                    <Card.Body>
                        <Card.Text >@{username}</Card.Text>
                        <Card.Text >{specialty}</Card.Text>
                    </Card.Body>                             
                </Link> 
            </Card>          
        </Col>
    )
}  

export default WorkCard
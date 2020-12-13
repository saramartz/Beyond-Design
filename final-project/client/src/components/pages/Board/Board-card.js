import { Col, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const BoardCard = ({title, _id}) => {
    return (
        <Col lg={3} className="image-container">
            <Card className="image-card"> 
                <Link to={`/details/${_id}`}>     
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1475332340095-a12d7b5a7fdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    <Card.Text>{title}</Card.Text>
                </Link> 
            </Card>          
        </Col>
    )
}  

export default BoardCard


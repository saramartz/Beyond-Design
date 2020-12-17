import { Col, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const WorkCard = ({ image, title, _id }) => {
    return (
        <Col lg={3} className="pexelimg-container text-center mt-5 mr-4 ">
            <h6 className="mb-4">{title.trim().replace(/^\w/, (c) => c.toUpperCase())}</h6>
            <div className="pexelimg-card " key={_id}>
                <Link to={`/works/details/${_id}`}>  
                    <Card.Img variant="top" src={image} />          
                </Link> 
            </div>
        </Col>
    )
}  

export default WorkCard


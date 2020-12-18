import { Col, Card } from 'react-bootstrap'
import { GeoAlt } from 'react-bootstrap-icons'

import { Link } from 'react-router-dom'

const WorkCard = ({ image, name, specialty, introduction, area, _id }) => {
    return (
        <Col lg={3.5} className="professionals-col ml-5 text-center mt-5">
            <Card className="professional-card d-flex flex-column justify-content-end mb-5">  
                <Link to={`/professionals/${_id}`}> 
                    <div className="professional-img mb-4">
                        <Card.Img variant="top" src={image} alt={name}/>  
                    </div>
                    <div ></div>
                    <div className="profressional-card-text ">
                        <p><span style={{fontSize: "18px"}}>{name.trim().replace(/^\w/, (c) => c.toUpperCase())}</span> <br/> {specialty} </p>                        
                        <hr/>
                        <p >{introduction}</p> 
                        <p className="location"><GeoAlt className="mr-2 mb-1" />{area.location[0]}, {area.location[1]}</p>                   
                    </div>                                     
                </Link> 
            </Card>          
        </Col>
    )
}  


export default WorkCard


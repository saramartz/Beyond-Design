import React, { Component } from 'react'
import WorkService from '../../service/works.service'

// import CoasterCard from './Coaster-card'
// import Loader from '../shared/Spinner/Loader'

// import { Container, Row, Button, Modal } from 'react-bootstrap'


class WorkList extends Component {

    constructor() {
        super()
        this.state = {
            works: []        
        }
        this.worksService = new WorkService()
    }

    componentDidMount = () => this.displayWorks()

    displayWorks = () => {
        this.worksService
            .getWorks()
            .then(res => this.setState({works: res.data}))
            .catch(err => console.log(err))
    }

    // handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            
               this.state.works.map(elm => {
                   return (
                       <>                         
                           <img className="work-image" src={elm.image} />                           
                           <p>{elm.title}</p>                           
                       </>
                       
                   )
                                    
               })
        )
    }
}

export default WorkList
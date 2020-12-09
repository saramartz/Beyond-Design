import React, { Component } from 'react'
import WorkService from '../../../service/works.service'

import { Form, Button } from 'react-bootstrap'

class WorkEdit extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            date: '',
            status: '',
            image: ''       
        }
        this.worksService = new WorkService()
    }

    componentDidMount = () => this.workInfo()

    workInfo = () => {
        const work_id = this.props.match.params.work_id

        this.worksService
            .getWork(work_id)
            .then(res => this.setState({ ...res.data }))
            .catch(err => console.log(err))  
    }

    handleInputChange = e => { this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
  
        e.preventDefault()

        const work_id = this.props.match.params.work_id

        this.worksService
            .editWork(work_id, this.state)
            .then(() => {
                this.props.updateWork()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>       
                <Form onSubmit={this.handleSubmit}>
                    
                    {/* <!-- Title --> */}
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Description --> */}
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Date --> */}
                    <Form.Group controlId="date">
                        <Form.Label>Fecha de creación</Form.Label>
                        <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleInputChange} />
                    </Form.Group> 

                    {/* <!-- Status --> */}
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name="status" value={this.state.status} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <!-- Image --> */}
                    <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit">Save</Button>

                </Form>
            </>
        )
    }
}

export default WorkEdit
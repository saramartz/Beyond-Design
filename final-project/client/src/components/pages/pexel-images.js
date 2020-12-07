import React, { Component } from 'react'
import PexelService from '../../service/pexel.service'
// import { createClient } from 'pexels';
// const client = createClient('563492ad6f91700001000001a1590c5923d54505889bed4207b1ad79');

class ImagesList extends Component {

    constructor() {
        super()
        this.state = {
            images: []
        }
        this.pexelService = new PexelService()
    }

    componentDidMount = () => this.displayImages()

    displayImages = () => {
        this.pexelService
            .getImages()
            .then(res => console.log(res) )
            .catch(err => console.log(err))
    }

    render() {
        return (

            <>
              <h1>Images API</h1>
            </>                  

        )
    }
}

export default ImagesList
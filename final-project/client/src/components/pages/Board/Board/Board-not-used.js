// import React, { Component } from 'react'
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import BoardCard from "../Board-card"
// import UserService from '../../../../service/account.service'

// class Board extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {          
//             user: this.props.loggedUser        
//         }
//         this.userService = new UserService()
//     }   

//     componentDidMount = () => this.getUser()   
    
//     getUser = () => {
//         const user_id = this.props.match.params.user_id

//         this.userService
//             .getUser(user_id)
//             .then(res => this.setState({ user: res.data }))
//             .catch(err => console.log(err))  
//     }

//     getImages = (image) => {  
//         let idx = this.state.user.board.indexOf(image)

//         this.state.user.board.splice(idx, 1)

//         let photos = this.state.user.board
  
//         this.setState({ user: { ...this.state.user, board: photos } }, () => this.deleteImage())         
//     }

//     deleteImage = () => { 
                
//         const user_id = this.props.match.params.user_id
            
//         this.userService
//             .editUser(user_id, this.state)
//             .then(() => console.log("good"))            
//             .catch((err) => console.log(err))
//     }
    
//     render() {
//         return (
//             <>
//                 <Container>
//                     <Row> 
//                         {  
//                              this.state.user ?
                                
//                                 this.state.user.board.map((elm, idx) => {
//                                     return (
//                                     <Col lg={3} className="image-container" key={idx}>
//                                         <Card className="image-card">  
//                                             <Card.Img src={elm} variant="top" />                                         
//                                         </Card>
//                                         <Button onClick={() => this.getImages(elm)} variant="dark" size="sm" className="create-btn mb-4">Delete</Button>    
//                                     </Col>
//                                     )
//                                 } )
                                
//                              : null 
//                         } 
//                     </Row>
//                 </Container>
//             </>      
//         )
//     }
// }

// export default Board
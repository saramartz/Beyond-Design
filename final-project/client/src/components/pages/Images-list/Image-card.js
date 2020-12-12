// import React, { Component } from 'react'
// import { Col, Card, Button, Form } from 'react-bootstrap'
// import UserService from '../../../service/account.service'

// class ImageCard extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             user: []
//         }
//         this.userService = new UserService()
//     }

//     // componentDidMount = () =>  this.updateUserInfo()

   

//     // updateUserInfo = e => {  

//     //     e.preventDefault()
   
//     //     const user_id = this.state.user._id

//     //     // { user: { ...this.state.user, [e.target.name]: e.target.value}}
//     //       this.accountService
//     //         .editUser(user_id, this.state)
//     //         .then(res => {
//     //             console.log(res.data)
//     //             // this.setState({ user: res.data })
//     //         })
//     //         .catch(err => console.log(err))


//     whatever = () => {
//       this.props.getInfo
//   }


// //     class UserFriends extends Component {
// //   constructor(props) {
// //     super(props)
// //     this.state = {
// //       user: {},
// //     }

// //     this.userService = new UserService()
// //   }
// //   getUser() {
// //     this.userService
// //       .getUser(this.props.loggedInUser._id)
// //       .then((response) => this.setState({ user: response.data }))
// //       .catch((err) => console.log(err))
// //   }



    
    


// //   removeOwnerFromFriends = (ownerId) => {
// //     const idx = this.props.loggedInUser.friends.indexOf(ownerId)
// //     this.props.loggedInUser.friends.splice(idx, 1)
// //     this.userService
// //       .editUser(this.props.loggedInUser._id, this.props.loggedInUser)
// //       .then((response) => this.props.setTheUser(response.data))
// //       .then(() => this.checkUserFriends())
// //       .catch((err) => console.log(err))
// //   }
    
// //   componentDidMount() {
// //     this.getUser()
// //   }

// //   render() {
// //     return (
// //       <main className="display-friends">
// //         {this.state.user.friends &&
// //           this.state.user.friends.map((elm, idx) => (
// //             <article key={idx} className="friends-card">
// //               <article className="friends-avatar">
// //                 <figure className="card-img">
// //                   <img src={elm.avatar} alt="meh" />
// //                 </figure>
// //                 <article className="friends-content">
// //                   <h4>{elm.username}</h4>
// //                 </article>
// //                 <button onClick={() => this.removeOwnerFromFriends(elm._id)} className="my-button-blue">
// //                   Unfollow
// //                 </button>
// //               </article>
// //             </article>
// //           ))}
// //       </main>
// //     )
// //   }
// // }

//     render() {
//         return (
//             this.state.user
//                 ?
//             <>
//                  <Col lg={3} className="image-container">
//                     <Card className="image-card">
//                         <Card.Img variant="top" src={this.props.src.medium} />
//                         <Card.Body>
//                         <Card.Text>Credits: {this.props.photographer}</Card.Text>
//                         </Card.Body> 
                    
//                         <Button onClick={this.props.getInfo} type="submit" variant="dark" size="sm" className="create-btn mb-4">Save</Button>
                    
//                     </Card>                
//                 </Col>
//             </>    
//             :
//             null    
//         )
//     }
// }

//             // <form onSubmit={this.handleSubmit}>
//             //     <button type="submit" class="btn btn-sm text-white">Añadir a favoritas</button>
//             // </form>

//             // const WorkCard = ({ image, title, _id }) => {
//             //     return (
//             //         <Col lg={3} className="image-container">
//             //             <Card className="image-card">  
//             //                 <Link to={`/works/${_id}`}>    
//             //                     <Card.Body>
//             //                     <Card.Text >{title}</Card.Text>
//             //                     </Card.Body>
//             //                     <Card.Img variant="top" src={image} />          
//             //                 </Link> 
//             //             </Card>          
//             //         </Col>
//             //     )
//             // } 

// export default ImageCard









 
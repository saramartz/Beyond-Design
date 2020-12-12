

//   checkUserFriends() {
//     if (this.props.loggedInUser.friends.some((elm) => elm === this.state.owner._id)) {
//       this.setState({ weAreFriends: true })
//     } else {
//       this.setState({ weAreFriends: false })
//     }
//   }

//   addOwnerAsFriend(ownerId) {
//     this.userService
//       .addUserAsFriend(this.props.loggedInUser._id, ownerId)
//       .then(() => this.props.setTheUser({ ...this.props.loggedInUser, friends: [...this.props.loggedInUser.friends, ownerId] }))
//       .then(() => this.checkUserFriends())
//       .catch((err) => console.log(err))
//   }

//   removeOwnerFromFriends = (ownerId) => {
//     const idx = this.props.loggedInUser.friends.indexOf(ownerId)
//     this.props.loggedInUser.friends.splice(idx, 1)
//     this.userService
//       .editUser(this.props.loggedInUser._id, this.props.loggedInUser)
//       .then((response) => this.props.setTheUser(response.data))
//       .then(() => this.checkUserFriends())
//       .catch((err) => console.log(err))
//   }    
    


    
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

















 
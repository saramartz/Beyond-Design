import React, { Component } from 'react'

import Home from "./pages/Home/Home"

// import Chat from "./chat"

// ========== BOARDS ========== 
import MyBoards from "./pages/Board/MyBoards"
import BoardDetails from "./pages/Board/Board-details"

// ========== LAYOUT ========== 
import Navigation from "../components/layout/Navigation/Navigation"

// ========== IMAGES ========== 
import ImagesList from "./pages/Images-list/Images-list"

// ========== AUTH ========== 
import AuthServices from '../service/auth.service'
import Signup from "./pages/Auth/Signup"
import Login from "./pages/Auth/Login"

// ========== ACCOUNT ========== 
import Account from "./pages/Account/Account"
import WorksList from "./pages/Portfolio/Works-list/Works-list"
import WorkDetails from './pages/Portfolio/Work-details/Work-details'
import Follows from "./pages/Account/Follows"

// ========== PROFESSIONALS ========== 
import UsersList from "./pages/Professionals/Users-list/Users-list"
import UserDetails from './pages/Professionals/User-details/User-details'
import FashionUsers from "./pages/Professionals/Fashion/Fashion-users"
import MakeupUsers from "./pages/Professionals/Makeup/Makeup-users"
import ModelingUsers from "./pages/Professionals/Modeling/Modeling-users"
import PhotographyUsers from "./pages/Professionals/Photography/Photography-users"
import StylismUsers from "./pages/Professionals/Stylism/Stylism-users"

import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined,
      mount: false
    }
    this.authServices = new AuthServices()
  }

  // Check if an user is already logged
  componentDidMount = () => {

    this.authServices   
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }

  setTheUser = user => this.setState({ loggedInUser: user, mount: true }, () => console.log("The current user is: ", this.state))

  render() {

    return (
      <>
        <Navigation storeUser={this.setTheUser} /* Lift Up State */ loggedUser={this.state.loggedInUser} {...this.props} />   
            
        {/* <Chat></Chat> */}
   
        {this.state.mount ? 
          
          <main>
          <Switch> 

            <Route path="/" exact render={props => <Home loggedUser={this.state.loggedInUser} {...props} />} />         
                                
            {/* <!-- Auth --> */}
            <Route path="/signup" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/login" render={props => <Login storeUser={this.setTheUser} {...props} />} />   
            <Route path="/logout" render={() => <Redirect to="/login" />} />            
           
            {this.state.loggedInUser
                ? 
                <>
                {/* <!-- Account --> */}
                <Route path="/account/:user_id" render={props => <Account loggedUser={this.state.loggedInUser} {...props} />} /> 
                <Route exact path='/works/:user_id' exact render={props => <WorksList loggedUser={this.state.loggedInUser} {...props} /> } />
                <Route exact path="/works/details/:work_id" exact render={props => <WorkDetails loggedUser={this.state.loggedInUser} {...props} />} />          
                <Route exact path='/:user_id/follows' exact render={props => <Follows loggedUser={this.state.loggedInUser} {...props} />} />                
                <Route path='/myBoards/:user_id' render={props => <MyBoards loggedUser={this.state.loggedInUser} {...props} />} />
                <Route path='/details/:board_id' render={props => <BoardDetails loggedUser={this.state.loggedInUser} {...props} />} />

                {/* <!-- Professionals --> */}
                <Route path="/professionals/:user_id" render={props => <UserDetails loggedUser={this.state.loggedInUser} {...props} />} /> 
                <Route path='/professionals' exact render={props => <UsersList loggedUser={this.state.loggedInUser} {...props} />} />
                <Route path="/fashion" render={() => <FashionUsers />} />
                <Route path="/makeup" render={() => <MakeupUsers />} />
                <Route path="/modeling" render={() => <ModelingUsers />} /> 
                <Route path="/photography" render={() => <PhotographyUsers />} /> 
                <Route path="/stylism" render={() => <StylismUsers />} /> 

                {/* <!-- Images -->  */}
                <Route path="/search/:user_id" exact render={(props) => <ImagesList loggedUser={this.state.loggedInUser} storeUser={this.setTheUser} {...props} />} />
                </>
                :
                <Redirect to="/login"/>             
            }    
            
          </Switch>
          </main>
          
          : null
          
        }       
      </>
    )
  }
}

export default App;

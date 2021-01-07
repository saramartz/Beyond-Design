import React, { Component } from 'react'

import Home from "../pages/Home/Home"

// ========== BOARDS ========== 
import MyBoards from "../pages/Board/MyBoards"
import BoardDetails from "../pages/Board/Board-details"

// ========== LAYOUT ========== 
import Navigation from "../layout/Navigation/Navigation"

// ========== IMAGES ========== 
import ImagesList from "../pages/Images-list/Images-list"

// ========== AUTH ========== 
import AuthServices from '../../service/auth.service'
import Signup from "../pages/Auth/Signup"
import Login from "../pages/Auth/Login"

// ========== ACCOUNT ========== 
import Account from "../pages/Account/Account"
import WorksList from "../pages/Portfolio/Works-list/Works-list"
import WorkDetails from '../pages/Portfolio/Work-details/Work-details'
import Follows from "../pages/Account/Follows"

// ========== PROFESSIONALS ========== 
import UsersList from "../pages/Professionals/Users-list/Users-list"
import UserDetails from '../pages/Professionals/User-details/User-details'
import FashionUsers from "../pages/Professionals/Fashion/Fashion-users"
import MakeupUsers from "../pages/Professionals/Makeup/Makeup-users"
import ModelingUsers from "../pages/Professionals/Modeling/Modeling-users"
import PhotographyUsers from "../pages/Professionals/Photography/Photography-users"
import StylismUsers from "../pages/Professionals/Stylism/Stylism-users"
import WorkDetailsUser from '../pages/Portfolio/Work-details/Work-details-otherUser'

// ========== CHAT ========== 
import Chat from "../pages/Chat/Chat"

import Alert from '../shared/Alert/Alert'
import AlertError from '../shared/Alert/Alert-error'

import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined,
      mount: false,
      showToast: false,
      toastText: '',
      showToastError: false,
      toastTextError: '' 
    }
    this.authServices = new AuthServices()
  }

  componentDidMount = () => {

    this.authServices   
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }

  setTheUser = user => this.setState({ loggedInUser: user, mount: true })

  removeUser = () => this.setTheUser(undefined)

  handleToast = (visible, text) => this.setState({ showToast: visible, toastText: text })
  handleToastError = (visible, text) => this.setState({ showToastError: visible, toastTextError: text})

  render() {

    return (
      <>
        <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} {...this.props} />   
    
        {this.state.mount ? 
          
          <main>
          <Switch> 

            <Route path="/" exact render={props => <Home loggedUser={this.state.loggedInUser} loggedUser={this.state.loggedInUser} {...props} />} />                  
                                
            {/* <!-- Auth --> */}
            <Route path="/signup" render={props => <Signup handleToast={this.handleToast} handleToastError={this.handleToastError} storeUser={this.setTheUser} {...props} />} />
            <Route path="/login" render={props => <Login handleToast={this.handleToast} handleToastError={this.handleToastError} storeUser={this.setTheUser} {...props} />} />   
            <Route path="/logout" render={() => <Redirect to="/login" />} />            
           
            {this.state.loggedInUser
                ? 
                <>
             
                <Route path='/chat' render={() => <Chat loggedUser={this.state.loggedInUser} />} /> 
                  
                {/* <!-- Account --> */}
                <Route path="/account/:user_id" render={props => <Account handleToast={this.handleToast} loggedUser={this.state.loggedInUser} removeUser={this.removeUser} {...props} />} /> 
                <Route exact path='/works/:user_id' exact render={props => <WorksList handleToast={this.handleToast} loggedUser={this.state.loggedInUser} {...props} /> } />
                <Route exact path="/works/details/:work_id" exact render={props => <WorkDetails handleToast={this.handleToast} loggedUser={this.state.loggedInUser} {...props} />} />   
                <Route exact path="/work/:work_id" exact render={props => <WorkDetailsUser loggedUser={this.state.loggedInUser} {...props} />} />       
                <Route exact path='/:user_id/follows' exact render={props => <Follows loggedUser={this.state.loggedInUser} {...props} />} />                
                <Route path='/myBoards/:user_id' render={props => <MyBoards handleToast={this.handleToast} loggedUser={this.state.loggedInUser} {...props} />} />
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
            
            <Alert show={this.state.showToast} handleToast={this.handleToast} toastText={this.state.toastText} />
            <AlertError show={this.state.showToastError} handleToastError={this.handleToastError} toastText={this.state.toastTextError} />
          </main>
          
          : null
          
        }       
      </>
    )
  }
}

export default App;

import React, { Component } from 'react'

import Navigation from "../components/layout/Navigation/Navigation"
import ImagesList from "./pages/Images-list/Images-list"
import WorksList from "../components/pages/Works-list/Works-list"
import WorkDetails from './pages/Work-details/Work-details'
import UsersList from "../components/pages/Users-list/Users-list"
import UserDetails from './pages/User-details/User-details'
import Signup from "../components/pages/Auth/Signup"
import Login from "../components/pages/Auth/Login"
import Account from "./pages/Account/Account"


import AuthServices from '../service/auth.service'

import { Switch, Route, Redirect } from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: undefined }
    this.authServices = new AuthServices()
  }

  // Check if an user is already logged
  componentDidMount = () => {

    this.authServices   
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }


  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log("The current user is: ", this.state))

  render() {

    return (
      <>
        <Navigation storeUser={this.setTheUser} /* Lift Up State */ loggedUser={this.state.loggedInUser} {...this.props}/>
        
        <main>
          <Switch>           
            <Route path="/search" exact render={() => <ImagesList />} />   
            <Route path='/professionals' exact render={props => <UsersList loggedUser={this.state.loggedInUser} {...props} />} />
            <Route path="/professionals/:user_id" render={props => <UserDetails loggedUser={this.state.loggedInUser} {...props} />} /> 
            <Route path='/works' exact render={props => <WorksList loggedUser={this.state.loggedInUser} {...props} /> } />
            <Route path="/works/:work_id" render={props => <WorkDetails loggedUser={this.state.loggedInUser} {...props} />} />            
            <Route path="/signup" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/login" render={props => <Login storeUser={this.setTheUser} {...props} />} />   
            <Route path="/logout" render={() => <Redirect to="/" />} /> 

            <Route path="/account" render={props => <Account loggedUser={this.state.loggedInUser} {...props} />} />            

          
            {/* <Route path="/account" render={() =>  /> */}
          </Switch>
        </main>
      </>
    )
  }
}

export default App;

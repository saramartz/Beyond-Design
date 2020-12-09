import React, { Component } from 'react'

import Navigation from "../components/layout/Navigation/Navigation"
import ImagesList from "./pages/Images-list/Images-list"
import WorksList from "../components/pages/Works-list/Works-list"
import Signup from "../components/pages/Auth/Signup"
import Login from "../components/pages/Auth/Login"
// import Login from "../components/pages/Auth/Signup"

import AuthServices from '../service/auth.service'

import { Switch, Route, Redirect } from 'react-router-dom'
import WorkDetails from './pages/Work-details/Work-details'

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
            <Route path="/search" exact render={() => <ImagesList /> } />   
            <Route path='/works' exact render={props => <WorksList loggedUser={this.state.loggedInUser} {...props} /> } />
            <Route path="/works/:work_id" render={props => <WorkDetails loggedUser={this.state.loggedInUser} {...props} />} />            
            <Route path="/signup" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/login" render={props => <Login storeUser={this.setTheUser} {...props} />} />   
            <Route path="/logout" render={() =>  <Redirect to="/" />} /> 
          
            {/* <Route path="/account" render={() =>  /> */}
          </Switch>
        </main>
      </>
    )
  }
}

export default App;

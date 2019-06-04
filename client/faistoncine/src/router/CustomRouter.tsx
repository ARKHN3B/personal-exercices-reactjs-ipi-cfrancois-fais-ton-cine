import React, { Component }                                 from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Signup, Signin, Home }                             from '../scenes'


class CustomRouter extends Component {
  render(): React.ReactNode {
    // Notice the exact attribute. Without this, path="/" would also match /signin or /signup,
    // since / is contained in the route.
    return (
      <Router>
        <div>
          <Switch>
            <Redirect exact from={"/"} to={"/home"}/>
            <Route path={"/home"} render={ () => <Home/> }/>
            <Route path={"/signin"} render={ () => <Signin/> }/>
            <Route path={"/signup"} render={ () => <Signup/> }/>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default CustomRouter
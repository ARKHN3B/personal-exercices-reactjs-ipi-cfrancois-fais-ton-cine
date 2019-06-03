import React, { Component }               from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Signin }                         from '../scenes/Signin/Signin.component';


class CustomRouter extends Component {
  render(): React.ReactNode {
    return (
      <Router>
        <Route path="/" component={ Signin }/>
      </Router>
    );
  }
}
export default CustomRouter
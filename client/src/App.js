import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserDisplay from './components/userDisplay.js'
import AccountDisplay from './components/accountDisplay.js'

class App extends Component {
    render () {
      return (
        <Router>
          <div>
              <UserDisplay/>
              <br></br>
              <AccountDisplay/>
          </div>
        </Router>
      )
    }
  }

  export default App;
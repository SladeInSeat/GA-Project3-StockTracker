import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.js'
import UserDisplay from './components/userDisplay.js'
import AccountDisplay from './components/accountDisplay.js'

class App extends Component {
    render () {
      return (
        <Router>
          <div>
            <Dashboard/>
          </div>
        </Router>
      )
    }
  }

  export default App;
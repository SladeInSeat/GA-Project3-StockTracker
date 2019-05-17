import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.js'

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
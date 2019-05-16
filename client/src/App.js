import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import userDisplay from './components/userDisplay.js'

class App extends Component {
    render () {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={userDisplay}/>
            </Switch>
          </div>
        </Router>
      )
    }
  }

  export default App;
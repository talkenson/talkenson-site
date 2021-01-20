import React from 'react'
import styles from './App.module.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Heading from './components/heading/Heading'
import Studio from './components/studio/Studio'

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/studio">
            <Studio />
          </Route>
          <Route path="/">
            <Heading />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

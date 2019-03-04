import React from 'react'
import Navbar from '../navbar/Navbar'
import Login from '../auth/login/Login'
import Register from '../auth/register/Register'
import Landing from '../home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <React.Fragment>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </React.Fragment>
      </React.Fragment>
    </Router>
  )
}

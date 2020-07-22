import React from 'react'
import './App.css'

import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/Navbar'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import CreatePost from './screens/createPost'
// import './App.css'

import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter >
    <NavBar />
    <Route path="/" exact>
      <Home />
    </Route >

    <Route path="/profile">
      <Profile />
    </Route >

    <Route path="/login">
      <Login />
    </Route >

    <Route path="/signup">
      <SignUp />
    </Route >

    <Route path="/createPost">
      <CreatePost />
    </Route >

  </BrowserRouter>

)
export default App

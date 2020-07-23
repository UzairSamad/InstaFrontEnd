import React, { createContext, useReducer, useEffect, useContext } from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/Navbar'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import CreatePost from './screens/createPost'
import { reducer, initialState } from './reducers/userReducer'

import { BrowserRouter, Route, useHistory, Switch } from 'react-router-dom'
export const UserContext = createContext()


const Routing = () => {
  const history = useHistory()
  let    user = JSON.parse(localStorage.getItem("user"))

  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    if (user) {
      dispatch({ type: "USER", payload: user })
      history.push('/')
    } else {
      history.push('/login')
    }
  }, [])

  console.log(history, 'hhhhhh')
  return (
    <Switch >
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
    </Switch>
  )
}

function App(props) {
  const history = useHistory()
  const [state, dispatch] = useReducer(reducer, initialState)



  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter >
        <NavBar />
        < Routing />
      </BrowserRouter>
    </UserContext.Provider>

  )
}

export default App

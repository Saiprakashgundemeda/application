import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Profile from './components/Profile/profile'
import Login from './components/Login/login'
import SignupForm from './components/SignupForm/signupform'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/profile" exact element={<Profile/>}/>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signupform" exact element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


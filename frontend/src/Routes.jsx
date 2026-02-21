import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginForm from './features/auth/pages/LoginForm'
import RegisterForm from './features/auth/pages/RegisterForm'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<h1>This is homepage </h1>}/>

    <Route path='/login' element={<LoginForm />}/>
    <Route path='/register' element={<RegisterForm />}/>


    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
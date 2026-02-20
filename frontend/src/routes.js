import {BrowserRouter} from 'react-router'
import LoginForm from './features/auth/pages/LoginForm'
import RegisterForm from './features/auth/pages/RegisterForm'

export const routes = BrowserRouter([
  {
    path:'/login',
    element:<LoginForm/>
  },
  {
    path:'/register',
    element:<RegisterForm/>
  },

])


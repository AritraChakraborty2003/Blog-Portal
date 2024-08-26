import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import Signup from './components/Singup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
    <Signup/>
  </StrictMode>,
)

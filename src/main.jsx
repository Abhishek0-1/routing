import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client'
import {Route , RouterProvider , createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
    </Route>
  )
)


ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router = {router} />
  </StrictMode>,
)

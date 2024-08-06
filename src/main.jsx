/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Categories } from './components/categories/Categories.jsx'
const router=createBrowserRouter([
  {
  path:'/Quiz-game/',
  element:<App/>,
  errorElement: '',
  },
  {
    path:'/Quiz-game/categories',
    element:<Categories/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

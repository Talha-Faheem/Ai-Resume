import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import './index.css'
import Login from './Layout/auth/Login.jsx'
import MainLayout from './Layout/mainLayout/mainLayout.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route path='' element={<MainLayout/>}/>
      <Route path='login' element={<Login/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

  </StrictMode>,
)

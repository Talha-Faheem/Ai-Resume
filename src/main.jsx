import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import './index.css'
import { ResumeProvider } from './context/ResumeContext.jsx'
import Login from './Layout/auth/Login.jsx'
import MainLayout from './Layout/mainLayout/mainLayout.jsx'
import DashboardLayout from './Dashboard/DashboardLayout.jsx'
import DashboardHome from './Dashboard/pages/DashboardHome.jsx'
import ResumeBuilder from './Dashboard/pages/ResumeBuilder.jsx'
import ATSChecker from './Dashboard/pages/ATSChecker.jsx'
import Templates from './Dashboard/pages/Templates.jsx'
import CoverLetter from './Dashboard/pages/CoverLetter.jsx'
import Settings from './Dashboard/pages/Settings.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<MainLayout />} />
      <Route path='login' element={<Login />} />
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path='resume-builder' element={<ResumeBuilder />} />
        <Route path='ats-checker' element={<ATSChecker />} />
        <Route path='templates' element={<Templates />} />
        <Route path='cover-letter' element={<CoverLetter />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeProvider>
      <RouterProvider router={router} />
    </ResumeProvider>
  </StrictMode>,
)

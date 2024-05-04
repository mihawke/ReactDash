import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Invoice from './pages/Invoice'
import Schedule from './pages/Schedule'
import Calendar from './pages/Calendar'
import Customer from './pages/Customer'
import Messages from './pages/Messages'
import Notification from './pages/Notification'
import Settings from './pages/Settings'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <BrowserRouter>
      <div className='flex flex-row w-screen h-screen bg-black bg-opacity-5'>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

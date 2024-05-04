import React, { useState } from 'react'
import { AiFillHome, AiFillSchedule } from 'react-icons/ai'
import { MdAnalytics } from 'react-icons/md'
import { FaBell, FaCalendarDays, FaTicket } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const ListItem = ({ itemname, onClick, focused }) => {

  const getIcon = () => {
    switch (itemname) {
      case "Dashboard":
        return <AiFillHome className={`w-6 h-6 p-0.5 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />;
      case "Analytics":
        return <MdAnalytics className={`w-6 h-6 p-0.5 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Invoice":
        return <FaTicket className={`w-6 h-6 p-0.5 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Schedule":
        return <AiFillSchedule className={`w-6 h-6 p-0.5 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Calendar":
        return <FaCalendarDays className={`w-6 h-6 p-0.5 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Customer":
        return <FaUser className={`w-6 h-6 p-0.5 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Messages":
        return <BiSolidMessageSquareDetail className={`w-6 h-6 p-0.5 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Notification":
        return <FaBell className={`w-6 h-6 p-0.5 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Settings":
        return <IoMdSettings className={`w-6 h-6 p-0.5 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
    }
  }

  return (
    <li className={`flex flex-row text-base font-semibold items-center h-10 gap-x-4 pr-10 cursor-pointer mb-2 mx-3 p-3 rounded-md  ${focused ? 'bg-indigo-600 text-white' : 'hover:bg-gray-400 hover:bg-opacity-20'}`}
      onClick={onClick}>
      {/* <div className={`h-full ${focused ? 'bg-indigo-600' : 'bg-transparent'} w-1 rounded-tr-md rounded-br-md`}></div> */}
      {getIcon()}
      <p className={`${focused ? 'text-white' : 'text-slate-950 opacity-50'} `}>{itemname}</p>
    </li>
  )
}

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const getInitialFocusedItem = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/analytics':
        return 'Analytics';
      case '/invoice':
        return 'Invoice';
      case '/schedule':
        return 'Schedule';
      case '/calendar':
        return 'Calendar';
      case '/customer':
        return 'Customer';
      case '/messages':
        return 'Messages';
      case '/notification':
        return 'Notification';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard'; // Default to Dashboard if pathname doesn't match any case
    }
  };


  const [focusedItem, setFocusedItem] = useState(getInitialFocusedItem());

  const handleClick = (itemName) => {
    setFocusedItem(itemName);
  };

  return (
    <div className={`${location.pathname == '/' ? 'hidden' : 'flex'} flex-col bg-white `}>
      <div className='text-2xl  flex justify-center items-center font-bold py-5'>
        React<span className='text-indigo-600'>Dash</span>
      </div>
      <ul className='flex flex-col'>
        <ListItem itemname={'Dashboard'} onClick={() => { handleClick("Dashboard"), navigate('/dashboard') }} focused={focusedItem === "Dashboard"} />
        <ListItem itemname={'Analytics'} onClick={() => { handleClick("Analytics"), navigate('/analytics') }} focused={focusedItem === "Analytics"} />
        <ListItem itemname={'Invoice'} onClick={() => { handleClick("Invoice"), navigate('/invoice') }} focused={focusedItem === "Invoice"} />
        <ListItem itemname={'Schedule'} onClick={() => { handleClick("Schedule"), navigate('/schedule')}} focused={focusedItem === "Schedule"} />
        <ListItem itemname={'Calendar'} onClick={() => { handleClick("Calendar"), navigate('/calendar') }} focused={focusedItem === "Calendar"} />
        <ListItem itemname={'Customer'} onClick={() => { handleClick("Customer"), navigate('/customer') }} focused={focusedItem === "Customer"} />
        <ListItem itemname={'Messages'} onClick={() => { handleClick("Messages"), navigate('/messages') }} focused={focusedItem === "Messages"} />
        <ListItem itemname={'Notification'} onClick={() => { handleClick("Notification"), navigate('/notification') }} focused={focusedItem === "Notification"} />
        <ListItem itemname={'Settings'} onClick={() => { handleClick("Settings"), navigate('/settings') }} focused={focusedItem === "Settings"} />
      </ul>
    </div>
  )
}

export default Navbar
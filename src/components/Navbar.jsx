import React, { useState } from 'react'
import { AiFillHome, AiFillSchedule } from 'react-icons/ai'
import { MdAnalytics } from 'react-icons/md'
import { FaBell, FaCalendarDays, FaTicket } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'

const ListItem = ({ itemname, onClick, focused }) => {

  const getIcon = () => {
    switch (itemname) {
      case "Dashboard":
        return <AiFillHome className={`w-6 h-6 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />;
      case "Analytics":
        return <MdAnalytics className={`w-6 h-6 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Invoice":
        return <FaTicket className={`w-6 h-6 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Schedule":
        return <AiFillSchedule className={`w-6 h-6 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Calendar":
        return <FaCalendarDays className={`w-6 h-6 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Messages":
        return <BiSolidMessageSquareDetail className={`w-6 h-6 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Notification":
        return <FaBell className={`w-6 h-6 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
          ;
      case "Settings":
        return <IoMdSettings className={`w-6 h-6 ${focused ? 'text-white' : 'text-slate-950 opacity-50'} `} />
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

  const [focusedItem, setFocusedItem] = useState('Dashboard');

  const handleClick = (itemName) => {
    setFocusedItem(itemName);
  };

  return (
    <div className='flex flex-col bg-white'>
      <div className='text-2xl  flex justify-center items-center font-bold py-5'>
        React<span className='text-indigo-600'>Dash</span>
      </div>
      <ul className='flex flex-col'>
        <ListItem itemname={'Dashboard'} onClick={() => handleClick("Dashboard")} focused={focusedItem === "Dashboard"} />
        <ListItem itemname={'Analytics'} onClick={() => handleClick("Analytics")} focused={focusedItem === "Analytics"} />
        <ListItem itemname={'Invoice'} onClick={() => handleClick("Invoice")} focused={focusedItem === "Invoice"} />
        <ListItem itemname={'Schedule'} onClick={() => handleClick("Schedule")} focused={focusedItem === "Schedule"} />
        <ListItem itemname={'Calendar'} onClick={() => handleClick("Calendar")} focused={focusedItem === "Calendar"} />
        <ListItem itemname={'Messages'} onClick={() => handleClick("Messages")} focused={focusedItem === "Messages"} />
        <ListItem itemname={'Notification'} onClick={() => handleClick("Notification")} focused={focusedItem === "Notification"} />
        <ListItem itemname={'Settings'} onClick={() => handleClick("Settings")} focused={focusedItem === "Settings"} />
      </ul>
    </div>
  )
}

export default Navbar
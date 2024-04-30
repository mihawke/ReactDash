import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { AiFillHome, AiFillSchedule } from 'react-icons/ai'
import { MdAnalytics, MdMessage } from 'react-icons/md'
import { FaBell, FaCalendarDays, FaTicket } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import Navbar from '../components/Navbar'

const ListItem = ({ itemname, onClick, focused }) => {

    const getIcon = () => {
        switch (itemname) {
            case "Dashboard":
                return <AiFillHome className={`w-6 h-6 ${focused ? 'text-indigo-600' : 'text-slate-950 opacity-50'} `} />;
            case "Analytics":
                return <MdAnalytics className={`w-6 h-6 ${focused ? 'text-indigo-600' : 'text-slate-950 opacity-50'} `} />
                    ;
            case "Invoice":
                return <FaTicket className={`w-6 h-6 ${focused ? 'text-indigo-600' : 'text-slate-950 opacity-50'} `} />
                    ;
            case "Schedule":
                return <AiFillSchedule className={`w-6 h-6 ${focused ? 'text-indigo-600' : 'text-slate-950 opacity-50'} `} />
                    ;
            case "Calendar":
                return <FaCalendarDays className={`w-6 h-6 ${focused ? 'text-indigo-600' : 'text-slate-950 opacity-50'} `} />
                    ;
            case "Messages":
                return <MdMessage className={`w-6 h-6 ${focused ? 'text-indigo-600' : 'text-slate-950 opacity-50'} `} />
                    ;
            case "Notification":
                return <FaBell className={`w-6 h-6 ${focused ? 'text-indigo-600' : 'text-slate-950 opacity-50'} `} />
                    ;
            case "Settings":
                return <IoMdSettings className={`w-6 h-6 ${focused ? 'text-indigo-600' : 'text-slate-950 opacity-50'} `} />
                    ;
        }
    }

    return (
        <div className='flex flex-row text-base font-semibold items-center h-12 gap-x-3 bg-white cursor-pointer' onClick={onClick}>
            <div className={`h-full ${focused ? 'bg-indigo-600' : 'bg-transparent'} w-1 rounded-tr-md rounded-br-md`}></div>
            {getIcon()}
            <p className={`${focused ? 'text-indigo-600' : 'text-slate-950 opacity-50'} `}>{itemname}</p>
        </div>
    )
}

const Dashboard = () => {


    return (
        <div className='flex flex-row w-screen h-screen bg-gray-50'>
            <div className='flex'>
                <Navbar></Navbar>
            </div>
            <div className='flex flex-col w-full h-full'>
                <header className='flex w-full px-6 pt-4 pb-6 bg-white'>
                    <Header></Header>
                </header>
                <main className='flex flex-grow p-6 pt-0'>
                    <div className='flex flex-grow  '>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard
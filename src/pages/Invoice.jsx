import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { FaBagShopping, FaHeart, FaSuitcase } from 'react-icons/fa6'
import { RiGamepadFill } from 'react-icons/ri'
import { BsThreeDots } from 'react-icons/bs'
import camera from '../assets/images/camera.png'
import dress from '../assets/images/dress.png'
import oil from '../assets/images/oil.png'
import perfume from '../assets/images/perfume.png'
import shoe from '../assets/images/shoe.png'
import mobile from '../assets/images/mobile.png'
import DashPieChart from '../components/Dashboard/DashPieChart'
import DashLineChart from '../components/Dashboard/DashLineChart'
import DashOrderCard from '../components/Dashboard/DashOrderCard'
import DashTopCard from '../components/Dashboard/DashTopCard'
import DashSellingCard from '../components/Dashboard/DashSellingCard'


const Invoice = () => {

    return (
            <div className='flex flex-col w-full h-full bg-black bg-opacity-5 overflow-y-scroll'>
                <header className='flex w-full px-6 pt-4 '>
                    <Header></Header>
                </header>
                <main className='flex flex-grow p-6 '>

                </main>
            </div>
    )
}

export default Invoice
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import TopCard from '../components/TopCard'
import { FaBagShopping, FaHeart, FaSuitcase } from 'react-icons/fa6'
import { RiGamepadFill } from 'react-icons/ri'
import Chart from '../components/Chart'

const Dashboard = () => {

    return (
        <div className='flex flex-row w-screen h-screen bg-black bg-opacity-5'>
            <div className='flex'>
                <Navbar></Navbar>
            </div>
            <div className='flex flex-col w-full h-full bg-black bg-opacity-5'>
                <header className='flex w-full px-6 pt-4 '>
                    <Header></Header>
                </header>
                <main className='flex flex-grow p-6'>
                    <div className='flex flex-col flex-grow items-start gap-y-6'>
                        <div className='flex flex-row w-full justify-between gap-x-8'>
                            <TopCard
                                icon={<FaHeart className='text-red-600 w-6 h-6' />}
                                number={'178+'}
                                title={'Saved Products'}
                                bgColor={'bg-red-100'}
                            />
                            <TopCard
                                icon={<RiGamepadFill className='text-amber-400 w-6 h-6' />}
                                number={'20+'}
                                title={'Stock Products'}
                                bgColor={'bg-amber-100'}
                            />
                            <TopCard
                                icon={<FaBagShopping className='text-red-400 w-6 h-6' />}
                                number={'190+'}
                                title={'Sales Products'}
                                bgColor={'bg-red-100'}
                            />
                            <TopCard
                                icon={<FaSuitcase className='text-indigo-500 w-6 h-6' />}
                                number={'12+'}
                                title={'Job Applications'}
                                bgColor={'bg-indigo-100'}
                            />
                        </div>
                        <div className='flex flex-row w-full justify-between'>
                            <div className='bg-black p-4 rounded-lg'>
                                <Chart></Chart>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard
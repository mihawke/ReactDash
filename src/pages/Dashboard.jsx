import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import TopCard from '../components/TopCard'
import { FaBagShopping, FaHeart, FaSuitcase } from 'react-icons/fa6'
import { RiGamepadFill } from 'react-icons/ri'
import Chart from '../components/ReportsChart'
import AnalyticsChart from '../components/AnalyticsChart'
import { BsThreeDots } from 'react-icons/bs'
import Order from '../components/Order'
import camera from '../assets/images/camera.png'
import dress from '../assets/images/dress.png'
import oil from '../assets/images/oil.png'
import perfume from '../assets/images/perfume.png'
import shoe from '../assets/images/shoe.png'
import mobile from '../assets/images/mobile.png'
import TopSellingCard from '../components/TopSellingCard'


const Dashboard = () => {

    return (
        <div className='flex flex-row w-screen h-screen bg-black bg-opacity-5'>
            <div className='flex'>
                <Navbar></Navbar>
            </div>
            <div className='flex flex-col w-full h-full bg-black bg-opacity-5 overflow-y-scroll'>
                <header className='flex w-full px-6 pt-4 '>
                    <Header></Header>
                </header>
                <main className='flex flex-grow p-6 '>

                    <div className='flex flex-col flex-grow items-start gap-y-6'>

                        <div className='flex flex-row max-w-full w-full gap-x-8 justify-between'>
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


                        <div className='flex flex-row max-w-full w-full gap-x-8 justify-between'>
                            <div className='flex flex-col gap-y-5 w-full justify-center items-center bg-white p-4 px-6 rounded-lg'>
                                <div className='flex flex-row w-full justify-between items-center'>
                                    <p className='text-slate-900 text-opacity-70 text-lg font-bold'>Reports</p>
                                    <BsThreeDots className='text-slate-900 text-opacity-30' />
                                </div>
                                <Chart></Chart>
                            </div>
                            <div className='flex flex-col gap-y-5 min-w-[35%] w-fit justify-center items-center bg-white p-4 px-6 rounded-lg'>
                                <div className='flex flex-row w-full justify-between items-center'>
                                    <p className='text-slate-900 text-opacity-70 text-lg font-bold'>Analytics</p>
                                    <BsThreeDots className='text-slate-900 text-opacity-30' />
                                </div>
                                <AnalyticsChart></AnalyticsChart>
                                <div className='flex flex-row gap-x-5 px-10 '>
                                    <div className='flex flex-row gap-x-2 items-center'>
                                        <div className='w-4 h-4 rounded-md' style={{ backgroundColor: '#0088FE' }}></div>
                                        <p className='text-slate-900 text-opacity-70 font-semibold text-base'>Sales</p>
                                    </div>
                                    <div className='flex flex-row gap-x-2 items-center'>
                                        <div className='w-4 h-4 rounded-md' style={{ backgroundColor: '#FFD66B' }}></div>
                                        <p className='text-slate-900 text-opacity-70 font-semibold text-base'>Distribute</p>
                                    </div>
                                    <div className='flex flex-row gap-x-2 items-center'>
                                        <div className='w-4 h-4 rounded-md' style={{ backgroundColor: '#FF8F6B' }}></div>
                                        <p className='text-slate-900 text-opacity-70 font-semibold text-base'>Return</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-row max-w-full w-full gap-x-8 justify-between'>
                            <div className='flex flex-col gap-y-5 w-full justify-center items-center bg-white p-4 px-6 rounded-lg'>
                                <div className='flex flex-row w-full justify-between items-center'>
                                    <p className='text-slate-900 text-opacity-70 text-lg font-bold'>Recent Orders</p>
                                    <BsThreeDots className='text-slate-900 text-opacity-30' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-row items-center justify-between w-full py-[10px]'>
                                        <p className='w-20 text-xs text-[#030229] font-bold text-center'>Tracking no</p>
                                        <p className='w-40 text-xs text-[#030229] font-bold pl-6'>Product Name</p>
                                        <p className='w-10 text-xs text-[#030229] font-bold text-center'>Price</p>
                                        <p className='w-20 text-xs text-[#030229] font-bold text-center'>Total Orders</p>
                                        <p className='w-20 text-xs text-[#030229] font-bold text-center'>Total Amount</p>
                                    </div>

                                    <hr className='w-full'></hr>
                                    <Order trackingNo={'#876364'} imgSrc={camera} productName={'Camera Lens'} price={'$178'} orders={325} totalPrice={'$1,46,660'}></Order>
                                    <Order trackingNo={'#876945'} imgSrc={dress} productName={'Black Sleep dress'} price={'$14'} orders={53} totalPrice={'$46,660'}></Order>
                                    <Order trackingNo={'#872364'} imgSrc={oil} productName={'Argan Oil'} price={'$21'} orders={78} totalPrice={'$3,46,676'}></Order>
                                    <Order trackingNo={'#824317'} imgSrc={perfume} productName={'EAU DE Perfume'} price={'$32'} orders={98} totalPrice={'$3,46,981'}></Order>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-5 min-w-[35%] w-fit  items-center bg-white p-4 px-6 rounded-lg'>
                                <div className='flex flex-row w-full justify-between items-center'>
                                    <p className='text-slate-900 text-opacity-70 text-lg font-bold'>Top Selling Products</p>
                                    <BsThreeDots className='text-slate-900 text-opacity-30' />
                                </div>
                                <div className='w-full'>
                                    <TopSellingCard productName={'NIKE Shoes Black Pattern'} rating={'4.5'} price={'$85'} imgSrc={shoe} />
                                    <hr className='my-[22px]'></hr>
                                    <TopSellingCard productName={'iPhone 12'} rating={'4.3'} price={'$985'} imgSrc={mobile} />
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard
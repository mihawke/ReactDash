import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CustomerList from '../components/Customer/CustomerList'
import CustomerCard from '../components/Customer/CustomerCard'
import { FaPlus } from 'react-icons/fa6'


const Customer = () => {

    return (
        <div className='flex flex-col w-full h-full bg-black bg-opacity-5'>
            <header className='flex w-full px-6 pt-4 '>
                <Header></Header>
            </header>
            <main className='flex flex-grow flex-row p-6 gap-x-8'>
                <div className='flex flex-grow flex-col gap-y-4'>
                    <div className='flex flex-row justify-between'>
                        <p className='text-2xl text-[#030229] font-bold'>Customer List</p>
                        <button className='flex flex-row px-5 py-2.5 bg-[#605BFF] hover:bg-opacity-70 text-white text-base items-center gap-x-2 rounded-xl'>
                        <FaPlus size={14}/>Add Customer
                        </button>
                    </div>
                    <div className='flex w-full'>
                        <CustomerList ></CustomerList>
                    </div>
                </div>

                <div className='flex bg-white rounded-lg  p-6'>
                    <CustomerCard />
                </div>
            </main>
        </div>
    )
}

export default Customer
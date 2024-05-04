import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'


const Messages = () => {

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

export default Messages
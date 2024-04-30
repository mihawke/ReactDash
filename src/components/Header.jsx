import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'

const Header = () => {
    return (
        <div className='flex flex-row w-full h-[54px] justify-between items-center px-4 border-[1px] rounded-md'>
            <div className='flex flex-row'>
                <div className='flex flex-row'>
                    {/* <div className='w-9 h-9 bg-black'></div> */}
                    <button className='rounded-full hover:bg-gray-400 hover:bg-opacity-15'>
                        <IoIosSearch className='w-9 h-9 p-1.5 text-slate-950 opacity-50' />
                    </button>
                    <input
                        type='text'
                        placeholder='Search'
                        className='bg-transparent outline-none ml-1'
                    />
                </div>
            </div>
            <div className='flex flex-row gap-x-1'>
                <button className='rounded-full hover:bg-gray-400 hover:bg-opacity-15'>
                    <IoNotificationsOutline className='w-10 h-9 p-1.5 text-slate-950 opacity-50' />
                </button>
                <button className='rounded-full hover:bg-gray-400 hover:bg-opacity-15'>
                    <IoSettingsOutline className='w-10 h-9 p-1.5 text-slate-950 opacity-50' />
                </button>
                <img className='w-10 h-10 bg-cover bg-center rounded-full' src='src\assets\images\avatar.png' />
            </div>
        </div>
    )
}

export default Header
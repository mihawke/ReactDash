import React from 'react'
import { FaHeart } from 'react-icons/fa6'

const TopCard = ({ icon, title, number,bgColor }) => {
    return (
        <div className='flex flex-row w-full justify-center items-center gap-x-6 p-7 bg-white rounded-lg'>
            <div className={`flex justify-center items-center w-[60px] h-[60px] rounded-full ${bgColor}`}>
                {icon}
                {/* <FaHeart className='text-red-600 w-6 h-6'/> */}
            </div>
            <div>
                <p className='text-[22px] font-extrabold text-black text-opacity-70'>
                    {number}
                </p>
                <p className='text-sm text-slate-900 text-opacity-50 font-semibold'>
                    {title}
                </p>
            </div>
        </div>
    )
}

export default TopCard
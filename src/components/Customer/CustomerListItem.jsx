import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const CustomerListItem = ({ name, email, phone, gender, imgSrc }) => {
    return (
        <button className='flex flex-row items-center justify-between w-full bg-white rounded-lg px-5 py-3 border-2 border-transparent focus:border-2 focus:border-gray-300'>
            <div className='min-w-40 flex flex-row items-center gap-x-2.5'>
                <img className='w-[30px] h-[30px] rounded-md' src={imgSrc} />
                <p className='text-md text-[#030229] text-opacity-70 font-semibold'>{name}</p>
            </div>
            <p className=' min-w-40 text-md text-[#030229] text-opacity-70 font-semibold'>{email}</p>
            <p className='min-w-40 text-md text-[#030229]  text-opacity-70 font-semibold text-center'>{phone}</p>
            <p className='min-w-4 flex justify-center'>
                <BsThreeDots className='text-slate-900 text-opacity-30' size={20} />
            </p>
        </button>
    )
}

export default CustomerListItem
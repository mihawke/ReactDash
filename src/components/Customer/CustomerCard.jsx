import React from 'react'
import avatar from '../../assets/images/customer.png'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';

import { BsThreeDots } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const CustomerCard = () => {

    const data = [
        { name: 'Progress', value: 70 },
        { name: 'Incomplete', value: 30 },
    ];
    const COLORS = ['#FFD66B', '#f3f4f6'];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const sales = payload[0].value;
            const label = payload[0].name;

            return (
                <div className="flex flex-col px-4 py-1 justify-center items-center">
                    <p className="text-xs text-white text-opacity-80">{label}</p>
                    <p className="text-base font-semibold text-white">{sales}</p>
                </div>
            );
        }

        return null;
    };
    return (
        <div className='flex flex-col w-fit flex-grow gap-y-10 items-center py-5 p-4'>
            <div className='flex flex-col w-full items-center'>
                <img className='w-[70px] h-[70px]' src={avatar} />
                <p className='text-[#030229] font-semibold text-xl'>John Doe</p>
                <p className='text-[#030229] text-opacity-70 font-normal text-sm'>UI/UX Designer</p>
            </div>
            <div className='flex flex-col w-full gap-y-4 items-center'>
                <p className='text-[#030229] font-semibold text-lg'>Contact Info</p>
                <div  className='flex flex-col w-full gap-y-4 items-start'>
                    <div className='flex flex-row gap-x-3 items-start'>
                        <div>
                            <MdEmail className='text-[#030229] text-opacity-30' size={20} />
                        </div>
                        <p className='text-[#030229] text-opacity-70 font-normal text-sm'>johnDoe@gmail.com</p>
                    </div>
                    <div className='flex flex-row gap-x-3 items-start'>
                        <div>
                            <FaPhoneAlt className='text-[#030229] text-opacity-30' size={20} />
                        </div>
                        <p className='text-[#030229] text-opacity-70 font-normal text-sm'>+1234567890</p>
                    </div>
                    <div className='flex flex-row gap-x-3 items-start'>
                        <div>
                            <FaLocationDot className='text-[#030229] text-opacity-30' size={20} />
                        </div>
                        <p className='text-[#030229] text-opacity-70 font-normal text-sm'>123 Colony, City, State, Country</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full items-center'>
                <p className='text-[#030229] font-semibold text-lg'>Progress</p>
                
            </div>
        </div>
    )
}

export default CustomerCard
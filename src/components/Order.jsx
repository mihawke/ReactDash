import React from 'react'

const Order = ({ totalPrice, price, productName, trackingNo, orders, imgSrc }) => {
    return (
        <div className='flex flex-row items-center justify-between w-full py-[10px] '>
            <p className=' w-20 text-xs text-[#030229] text-opacity-70 font-semibold text-center'>{trackingNo}</p>
            <div className='w-40 flex flex-row items-center gap-x-2.5'>
                <img className='w-[30px] h-[30px] rounded-md' src={imgSrc} />
                <p className='min-w-20 text-xs text-[#030229] text-opacity-70 font-semibold'>{productName}</p>
            </div>
            <p className='w-10 text-xs text-[#030229]  text-opacity-70 font-semibold text-center'>{price}</p>
            <p className='w-20 text-xs h-[30px]  rounded-lg flex items-center justify-center bg-[#26C0E2] bg-opacity-10 text-[#26C0E2] font-semibold'>{orders}</p>
            <p className='w-20 text-xs  text-[#030229] text-opacity-70 font-semibold text-center'>{totalPrice}</p>
        </div>
    )
}

export default Order
import React from 'react'

const DashSellingCard = ({ price, productName, rating, imgSrc }) => {
    return (
        <div className='flex flex-row w-fit gap-x-5'>
            <div className='w-[96px] h-[96px] p-4 bg-[#297FB2] bg-opacity-20 flex place-content-center'>
                <img className='rounded-md' src={imgSrc} />
            </div>
            <div className='flex flex-col    justify-between py-2'>
                <p className='text-md text-[#030229] text-opacity-70 font-normal'>{productName}</p>
                <p className='text-sm text-amber-400 text-opacity-70 font-bold'>{rating}</p>
                <p className='text-md text-[#030229] text-opacity-70 font-bold'>{price}</p>
            </div>
        </div>
    )
}

export default DashSellingCard
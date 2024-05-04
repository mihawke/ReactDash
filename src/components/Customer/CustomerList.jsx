import React from 'react'
import avatar from '../../assets/images/customer.png'
import CustomerListItem from './CustomerListItem'


const CustomerList = () => {
    return (
        <div className='flex flex-col w-full items-start gap-y-2.5'>
            <div className='flex flex-row items-center justify-between w-full px-5 py-3'>
                <p className='min-w-40 text-md text-[#030229] font-bold'>Name</p>
                <p className='min-w-40 text-md text-[#030229] font-bold'>Email</p>
                <p className='min-w-40 text-md text-[#030229] font-bold text-center'>Phone number</p>
                <p className='min-w-4 text-md text-[#030229] font-bold text-center'></p>
            </div>
            <div className='flex flex-col w-full h-[470px]  items-start gap-y-2.5 overflow-y-scroll'>
                <CustomerListItem imgSrc={avatar} name={'John Doe'} email={'johnDoe@gmail.com'} phone={'+1234567890'} />
                <CustomerListItem imgSrc={avatar} name={'Jane Doe'} email={'janeDoe@gmail.com'} phone={'+1234567890'} />
                <CustomerListItem imgSrc={avatar} name={'John Doe'} email={'johnDoe@gmail.com'} phone={'+1234567890'} />
                <CustomerListItem imgSrc={avatar} name={'Jane Doe'} email={'janeDoe@gmail.com'} phone={'+1234567890'} />
                <CustomerListItem imgSrc={avatar} name={'John Doe'} email={'johnDoe@gmail.com'} phone={'+1234567890'} />
                <CustomerListItem imgSrc={avatar} name={'Jane Doe'} email={'janeDoe@gmail.com'} phone={'+1234567890'} />
                <CustomerListItem imgSrc={avatar} name={'John Doe'} email={'johnDoe@gmail.com'} phone={'+1234567890'} />
                <CustomerListItem imgSrc={avatar} name={'Jane Doe'} email={'janeDoe@gmail.com'} phone={'+1234567890'} />
                <CustomerListItem imgSrc={avatar} name={'John Doe'} email={'johnDoe@gmail.com'} phone={'+1234567890'} />
                <CustomerListItem imgSrc={avatar} name={'Jane Doe'} email={'janeDoe@gmail.com'} phone={'+1234567890'} />
            </div>
        </div>
    )
}

export default CustomerList
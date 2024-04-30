import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter, FaCheck } from 'react-icons/fa'

const LoginPage = () => {

    const navigate = useNavigate();
    const [emailFocused, setEmailFocused] = useState(false);
    const [passFocused, setPassFocused] = useState(false);
    const [checked, setChecked] = useState(false)
    const onChange = (event) => {
        event.preventDefault();
        setChecked(prev => !prev)
    }


    return (
        <div className='flex w-screen justify-center items-center'>
            <div className='flex flex-col mt-16'>
                <h4 className='text-2xl text-gray-700 mb-2 '>Welcome to ReactDash! 👋🏻</h4>
                <p className='text-md text-gray-700 mb-6'>Please sign-in to your account and start the adventure</p>
                <div className='flex flex-col gap-y-3 bg-indigo-200 py-3 px-4 mb-6 rounded-md'>
                    <p className='text-xs text-indigo-600'>Admin Email: <span className='text-xs text-indigo-600 font-bold'>admin@gmail.com </span> / Pass: <span className='text-xs text-indigo-600 font-bold'>admin </span></p>
                    <p className='text-xs text-indigo-600'>Client Email: <span className='text-xs text-indigo-600 font-bold'>client@gmail.com</span>   / Pass: <span className='text-xs text-indigo-600 font-bold'>client</span></p>
                </div>
                <form>
                    <div className='flex flex-col mb-6 gap-y-1'>
                        <label className={emailFocused ? 'text-sm text-indigo-600' : 'text-sm text-black'} htmlFor='email'>Email</label>
                        <input
                            className='text-black text-sm rounded-md px-3 py-1  border-2
                            border-gray-300 hover:border-gray-500 focus:outline-2 focus:outline-indigo-600 duration-150'
                            id='email'
                            onFocus={() => setEmailFocused(true)}
                            onBlur={() => setEmailFocused(false)}
                        />
                    </div>
                    <div className='flex flex-col mb-6 gap-y-1'>
                        <label className={passFocused ? 'text-sm text-indigo-600' : 'text-sm text-black'}>Password</label>
                        <input
                            className='text-black text-sm rounded-md px-3 py-1  border-2
                            border-gray-300 hover:border-gray-500 focus:outline-2 focus:outline-indigo-600 duration-150'
                            id='password'
                            onFocus={() => setPassFocused(true)}
                            onBlur={() => setPassFocused(false)}
                        />
                    </div>
                    <div className='flex flex-row items-center mb-6 justify-between'>
                        <div style={{ display: 'flex', flexDirection: 'row', placeItems: 'center' }}>
                            <div className='p-2 rounded-full hover:bg-gray-100 duration-150'>
                                <button className={checked ? 'flex justify-center items-center bg-indigo-600 rounded-sm border-2 duration-150 border-indigo-600 p-0.5 w-4 h-4' :
                                    'flex justify-center items-center border-2 rounded-sm border-gray-500 w-4 h-4'}
                                    onClick={onChange}>
                                    {checked && <FaCheck size={14} color='white' />}
                                </button>
                            </div>
                            <label className='text-gray-700'> Remember Me</label>
                        </div>
                        <div>
                            <a className='text-md text-indigo-600 hover:opacity-75 ml-2'>Forgot Password?</a>
                        </div>
                    </div>
                    <button className='w-full p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md mb-6 text-md duration-150'
                        onClick={() => navigate('/dashboard')}
                    >Login
                    </button>
                    <div className='flex justify-center flex-row items-center mb-6 gap-y-2'>
                        <span style={{ color: '#6c6a77' }}>New on our platform?</span><a className='text-md text-indigo-600 hover:opacity-75 ml-2'>Create an Account</a>
                    </div>
                    <div className='flex flex-row items-center w-full mb-6'>
                        <hr className='bg-gray-300 w-full border-none' style={{ height: 1 }} />
                        <span style={{ marginLeft: 8, marginRight: 8, color: '#6c6a77' }}>or</span>
                        <hr className='bg-gray-300 w-full border-none' style={{ height: 1 }} />
                    </div>
                    <div className='flex flex-row justify-center gap-x-4'>
                        <FaTwitter color='#1ca2f3' size={24} />
                        <FaFacebookF color='#4266b2' size={24} />
                        <FaGithub color='#272727' size={24} />
                        <FaGoogle color='#d64a30' size={24} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
import React from 'react'
import { TbUserEdit } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { SlLogin } from "react-icons/sl";
import { FiSend } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { useContext } from "react";
import { ToggleClass } from '../Context/Context';
import { Link, useNavigate } from 'react-router-dom';
const Modal = () => {
    const navigate = useNavigate()
    const nav = ()=>{
        navigate('/')
    }
    const { light, toggle, back, bet, closeSide } = useContext(ToggleClass)
    return (
        <div className='fixed z-50 right-0 top-[56px] w-[290px] pr-4'>
            <div className={`${light ? 'bg-gray-800' : 'bg-white'} py-5 h-[460px] rounded-xl`}>
                <div className='flex px-4 items-center gap-2 group hover:underline'>
                    <img src="https://www.redditstatic.com/shreddit/assets/snoovatar-back-64x64px.png" alt="" className='h-[35px] w-[35px] rounded-full' />
                    <Link to='/profile' onClick={closeSide} className={`${light ? 'text-gray-300' : 'text-black'} list-none  text-sm group-hover:underline cursor-pointer`}>View Profile</Link>
            </div>
            <div className='flex px-4 items-center gap-5 group hover:underline mt-6'>
                <TbUserEdit className={`${light ? 'text-gray-300' : 'text-black'} text-2xl`} />
                <Link to='/setting' onClick={closeSide} className={`${light ? 'text-gray-300' : 'text-black'} list-none  text-sm group-hover:underline cursor-pointer`}>Edit Avatar</Link>
            </div>
            <div className='flex px-4 items-center gap-5 group hover:underline mt-6'>
                <IoWalletOutline className={`${light ? 'text-gray-300' : 'text-black'} text-2xl`} />
                <li className={`${light ? 'text-gray-300' : 'text-black'} list-none  text-sm group-hover:underline cursor-pointer`}>Contibutor Program</li>
            </div>
            <div className='flex px-4 items-center gap-5 group hover:underline mt-6'
                onClick={() => {
                    light ? back() : toggle();
                }}
            >
                <GoMoon className={`${light ? 'text-gray-300' : 'text-black'} text-2xl`} />
                <li className={`${light ? 'text-gray-300' : 'text-black'} list-none text-sm group-hover:underline cursor-pointer`}>
                    {light ? 'Light Mode' : 'Dark Mode'}
                </li>
            </div>


            <div className='flex px-4 items-center gap-5 group hover:underline mt-6'>
                <SlLogin className={`${light ? 'text-gray-300' : 'text-black'} text-2xl`} />
                <li onClick={()=>{bet(); closeSide(); nav()}} className={`${light ? 'text-gray-300' : 'text-black'} list-none  text-sm group-hover:underline cursor-pointer`}>Log Out</li>
            </div>

            <div className='border-t-[0.25px] py-4 px-4 border-t-gray-700 flex items-center gap-5 group hover:underline mt-5'>
                <FiSend className={`${light ? 'text-gray-300' : 'text-black'} text-2xl`} />
                <li className={`${light ? 'text-gray-300' : 'text-black'} list-none  text-sm group-hover:underline cursor-pointer`}>Advertise on Reddit</li>
            </div>
            <div className='border-t-[0.25px] py-4 px-4 border-t-gray-700 flex items-center gap-5 group hover:underline mt-2'>
                <IoSettingsOutline className={`${light ? 'text-gray-300' : 'text-black'} text-2xl`} />
                <Link to='/setting' onClick={closeSide} className={`${light ? 'text-gray-300' : 'text-black'} list-none  text-sm group-hover:underline cursor-pointer`}>Settings</Link>
            </div>
            <div className='border-t-[0.25px] py-4 px-4 border-t-gray-700 flex items-center gap-5 group hover:underline mt-2'>
                <AiOutlineSafetyCertificate className={`${light ? 'text-gray-300' : 'text-black'} text-2xl`} />
                <li className={`${light ? 'text-gray-300' : 'text-black'} list-none  text-sm group-hover:underline cursor-pointer`}>Premium</li>
            </div>
        </div>
        </div >
    )
}

export default Modal

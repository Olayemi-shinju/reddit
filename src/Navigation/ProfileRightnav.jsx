import React from 'react'
import { useContext } from "react";
import { ToggleClass } from '../Context/Context';
import { PiCameraPlusLight } from 'react-icons/pi';
import { TbShare3 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const ProfileRightNav = () => {
    const { light } = useContext(ToggleClass)
    return (
        <div className=''>
            <div className='fixed right-[-15px] top-[40px]  hidden lg:w-[32%] md:w-[33%] w-[100%] md:block lg:block p-8 mb-6 rounded-lg hover:h-screen overflow-y-auto'>
                <div className={`${light ? 'bg-black ' : 'bg-gray-100'} relative mb-20 rounded-2xl ml-7 hover: overflow-y-auto`}>
                    <div className='bg-purple-700 rounded-t-2xl  top-0 h-24 flex justify-end items-end pr-4 pb-5'>
                        <Link to='/setting' className="relative w-[30px] h-[30px] bg-gray-300 rounded-full flex justify-center items-center">
                            <PiCameraPlusLight className="text-black text-xl" />
                        </Link>
                    </div>
                    <div className='px-4 mt-4'>
                        <div>
                            <h1 className={`${light ? 'text-gray-100' : 'text-black'}  font-bold text-md`}>Trick-Boysenberry593</h1>
                        </div>
                        <div className='flex items-center gap-1 bg-gray-300 w-[80px] mt-3 px-3 py-1.5 rounded-full'>
                            <button className="bg-transparent border-none text-black p-0 m-0 flex items-center gap-1 text-sm font-semibold">
                                <TbShare3 className='text-black text-md' /> Share
                            </button>
                        </div>
                        <div className='flex items-center justify-between mt-3'>
                            <div>
                                <li className='text-sm list-none'>1</li>
                                <span className='text-gray-500 text-xs'>Post Karma</span>
                            </div>
                            <div>
                                <li className='text-sm list-none'>0</li>
                                <span className='text-gray-500 text-xs'>Comment Karma</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-3 border-b-[0.25px] border-b-gray-400 pb-4'>
                            <div>
                                <li className='text-sm list-none'>Feb 16, 2025</li>
                                <span className='text-gray-500 text-xs'>Cake day</span>
                            </div>
                            <div>
                                <li className='text-sm list-none'>0</li>
                                <span className='text-gray-500 text-xs'>Gold Earned</span>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-gray-600 font-semibold text-xs mt-2'>ACHIEVEMENTS</h1>
                            <div className='flex items-center justify-between mt-4 border-b-[0.25px] border-b-gray-400 pb-4'>
                                <li className='list-none text-xs text-gray-600'>2 Unlock</li>
                                <button className='text-black text-xs font-semibold rounded-3xl px-2 py-1 bg-gray-300'>View All</button>
                            </div>
                        </div>
                        <div className='border-b-[0.25px] border-b-gray-400 pb-4'>
                            <h1 className='text-gray-600 font-semibold text-xs mt-2'>SETTINGS</h1>
                            <Link to='/setting' className='flex items-center justify-between mt-6 '>
                                <div className='flex items-center gap-2'>
                                    <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png" alt="" srcset="" className='w-[30px] rounded-full h-[30px]' />
                                    <div>
                                        <li className='list-none text-sm text-black'>Profile</li>
                                        <li className='list-none text-xs text-gray-600'>Customize your profile</li>
                                    </div>
                                </div>
                                <button className='text-black text-xs font-semibold rounded-3xl px-2 py-1.5 bg-gray-300'>Edit Profile</button>
                            </Link>
                            <Link to='/setting' className='flex items-center justify-between mt-5 '>
                                <div className='flex items-center gap-2'>
                                    <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png" alt="" srcset="" className='w-[30px] rounded-full h-[30px]' />
                                    <div>
                                        <li className='list-none text-sm text-black'>Avatar</li>
                                        <li className='list-none text-xs text-gray-600'>Customize your Style</li>
                                    </div>
                                </div>
                                <button className='text-black text-xs font-semibold rounded-3xl px-2 py-1.5 bg-gray-300'>Style Avatar</button>
                            </Link>
                            <div className='flex items-center justify-between mt-5 '>
                                <div className='flex items-center gap-2'>
                                    <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png" alt="" srcset="" className='w-[30px] rounded-full h-[30px]' />
                                    <div>
                                        <li className='list-none text-sm text-black'>Moderation</li>
                                        <li className='list-none text-xs text-gray-600'>Moderation tool</li>
                                    </div>
                                </div>
                                <button className='text-black text-xs font-semibold rounded-3xl px-2 py-1.5 bg-gray-300'>Mod Settings</button>
                            </div>
                        </div>
                        <div className=' '>
                                <h1 className='text-gray-600 font-semibold text-xs mt-2'>LINKS</h1>
                                <button className='bg-gray-300 ml-4 mt-4 mb-5 text-black font-semibold px-2 py-1.5 rounded-3xl text-xs'>+ Add Social Link</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileRightNav
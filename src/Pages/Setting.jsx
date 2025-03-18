import React, { useContext, useState } from 'react'
import { ToggleClass } from '../Context/Context'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ChangeUsernameModal from '../Modal/UsernameModal';
import AvatarUploadModal from '../Modal/AvatarModal';
import BackgroundUploadModal from '../Modal/BackgroundModal';
import DescriptionUpdateModal from '../Modal/Descp';
import { Link } from 'react-router-dom';
const Setting = () => {
    const { light } = useContext(ToggleClass)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const saveUsername = () => {
        closeModal();
    };

    return (
        <div className='lg:ml-[320px] p-2 mt-[50px] h-[100vh]'>
            <div>
                <h1 className={`${light ? 'text-white' : 'text-gray-700'} text-3xl font-bold`}>Settings</h1>
            </div>
            <div className='pl-5 text-gray-500 cursor-pointer text-sm font-semibold flex items-center lg:w-[60%] list-none justify-between mt-7'>
                <li className='hover:underline'>Account</li>
                <Link to='/profile' className='hover:underline'>Profile</Link>
                <li className='hover:underline'>Privacy</li>
                <li className='hover:underline'>Preference</li>
                <li className='hover:underline'>Notifications</li>
                <li className='hover:underline'>Email</li>
            </div>
            <div>
                <h1 className='text-gray-700 text-xl font-bold mt-5'>General</h1>
            </div>
            <div className='mb-28'>
                <div onClick={openModal} className='flex items-center justify-between pr-5 bg-gray-200 cursor-pointer mt-7 rounded-xl py-3 px-2'>
                    <h1 className='text-md font-semibold text-gray-600'>Change Username</h1>
                    <MdOutlineKeyboardArrowRight className='text-xl text-gray-700' />
                </div>
                <AvatarUploadModal/>
                <BackgroundUploadModal/>
                <DescriptionUpdateModal/>
            </div>
            {
                isModalOpen && (
                    <div>
                        <ChangeUsernameModal closeModal={closeModal} saveUsername={saveUsername}/>
                        <div
                            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black opacity-10"
                            onClick={saveUsername}
                        ></div>
                    </div>
                )
            }
            
        </div>
    )
}

export default Setting

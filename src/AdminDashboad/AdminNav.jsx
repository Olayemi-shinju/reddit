import React from 'react'
import { AiOutlineSearch, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

const AdminNav = () => {
  return (
    <div className='fixed z-50 top-0 right-0 lg:w-[80%] w-full bg-white border border-b-gray-600 border-[0.25] py-4 px-3 flex justify-between'>
      <div>
        <h1 className='text-3xl text-red-500 font-bold'>Reddit</h1>
      </div>
      <div className='flex items-center cursor-pointer'>
        <AiOutlineSearch className='mr-4 text-gray-500 text-xl' />
        <AiOutlineBell className='mr-4 text-gray-500 text-xl' />
        <AiOutlineUser className='mr-4 text-gray-500 text-xl' />
        <button className='bg-red-500 text-white px-4 py-2 rounded'>Logout</button>
      </div>
    </div>

  )
}

export default AdminNav

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ToggleClass } from '../Context/Context'

const NotFound = () => {
    const {light} = useContext(ToggleClass)
  return (
    <div className='lg:ml-[230px] mt-[200px] pb-[187px]'>
        <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className={`${light ? 'text-white' : 'text-black'}  font-bold text-6xl`}>404</h1>
            <h1 className={`${light ? 'text-white' : 'text-black'}  font-bold text-6xl`}>Page Not Found</h1>
            <Link to='/' className={`${light ? 'bg-white' : 'bg-black text-white'} rounded-xl py-2 px-4 font-semibold text-sm`}>Go Back</Link>
        </div>
    </div>
  )
}

export default NotFound

import React from 'react'
import { useContext } from "react";
import { ToggleClass } from '../Context/Context';
const Rightnav = () => {
  const {light} = useContext(ToggleClass)
  return (
   <div className=''>
     <div className='fixed right-0 hidden lg:w-[30%] md:w-[30%] w-[100%]  md:block lg:block p-10 rounded-lg'>
      <div className={`${light ? 'bg-black ' : 'bg-gray-200'} rounded-md pl-5 p-2`}>
        <div>
          <li className={`${light ? ' text-gray-500' : 'text-black'} text-xs  mt-8 font-semibold list-none pt-2`}>POPULAR COMMUNITIES</li>
        </div>
        <div className='mt-[30px] pl-5'>
          <div className='group cursor-pointer flex gap-2 mb-6 items-center'>
            <img src="https://styles.redditmedia.com/t5_2s30g/styles/communityIcon_wpxjh8fuvcw51.png" alt="image" srcset="" className='w-[35px] h-[35px] rounded-full' />
            <div className='flex flex-col'>
              <span className={`${light ? 'text-gray-400' : 'text-black'} text-sm list-none group-hover:underline`}>r/AskMen</span>
              <span className='text-xs text-gray-600 group-hover:underline'>6,557,080 members</span>
            </div>
          </div>
          <div className='group cursor-pointer flex gap-2 mb-6 items-center'>
            <img src="https://styles.redditmedia.com/t5_2rrlp/styles/communityIcon_06pablpo0le21.png" alt="image" srcset="" className='w-[35px] h-[35px] rounded-full' />
            <div className='flex flex-col'>
              <span className={`${light ? 'text-gray-400' : 'text-black'} text-sm list-none group-hover:underline`}>r/PS4</span>
              <span className='text-xs text-gray-600 group-hover:underline'>5,546,605 members</span>
            </div>
          </div>
          <div className='group cursor-pointer flex gap-2 mb-6 items-center'>
            <img src="https://styles.redditmedia.com/t5_2qh1f/styles/communityIcon_hw7ic6kwornd1.png" alt="image" srcset="" className='w-[35px] h-[35px] rounded-full' />
            <div className='flex flex-col'>
              <span className={`${light ? 'text-gray-400' : 'text-black'} text-sm list-none group-hover:underline`}>r/Apple</span>
              <span className='text-xs text-gray-600 group-hover:underline'>6,149,455 members</span>
            </div>
          </div>
          <div className='group cursor-pointer flex gap-2 mb-6 items-center'>
            <img src="https://styles.redditmedia.com/t5_2s84e/styles/communityIcon_ml4cqjrh42gd1.jpg?format=pjpg&s=57ebe420019ae4d379c40955af48c3ac68ff241e" alt="image" srcset="" className='w-[35px] h-[35px] rounded-full' />
            <div className='flex flex-col'>
              <span className={`${light ? 'text-gray-400' : 'text-black'} text-sm list-none group-hover:underline`}>r/NBA2K</span>
              <span className='text-xs text-gray-600 group-hover:underline'>675,167 members</span>
            </div>
          </div>
          <div className='group cursor-pointer flex gap-2 mb-6 items-center'>
            <img src="https://styles.redditmedia.com/t5_2qnp7/styles/communityIcon_gcx9bz62dbg01.png" alt="image" srcset="" className='w-[35px] h-[35px] rounded-full' />
            <div className='flex flex-col'>
              <span className={`${light ? 'text-gray-400' : 'text-black'} text-sm list-none group-hover:underline`}>r/sysadmin</span>
              <span className='text-xs text-gray-600 group-hover:underline'>971,174 members</span>
            </div>
          </div>
          <div className={`${light ? ' text-white': 'text-black'} cursor-pointer`}>
            <li className='list-none text-xs font-semibold'>See More</li>
          </div>        
        </div>
      </div>
    </div>
   </div>
  )
}

export default Rightnav
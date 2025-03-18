import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { useContext } from "react";
import { ToggleClass } from '../Context/Context';
const DetailRightNav = () => {
    const {light} = useContext(ToggleClass)
    return (
        <div className='mt-[70px] ml-[90px] hidden lg:block xl:block lg:w-[300%]'>
            <div className={`${light ? 'bg-black' : 'border-white bg-gray-300'} rounded-lg p-4 `}>
                <div className='flex justify-between items-center'>
                    <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-md font-bold`}>O/olayemi</h1>
                    <button className='px-6 py-2 text-xs bg-blue-600 text-white font-bold rounded-full'>Join</button>
                </div>
                <div>
                    <div className='mt-2'>
                        <li className={`${light ? 'text-gray-400' : 'text-black'} text-xm font-bold list-none`}>funny</li>
                        <li className={`${light ? 'text-gray-400' : 'text-black'} text-sm list-none`}>Reddit's largest humor depository</li>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <TfiWorld className={`${light ? ' text-gray-500 ' : 'text-black'} mt-1 text-lg`} />
                        <li className={`${light ? ' text-gray-400' : 'text-black'} list-none text-sm`}>Public</li>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <div>
                            <h1 className={`${light ? 'text-gray-300' : 'text-black'} text-xm font-bold list-none`}>66M</h1>
                            <span className={`${light ? ' text-gray-400' : 'text-black'} list-none text-sm`}>Members</span>
                        </div>
                        <div>
                            <h1 className={`${light ? 'text-gray-300' : 'text-black'} text-xm font-bold list-none`}>2.2K</h1>
                            <span className={`${light ? ' text-gray-400' : 'text-black'} list-none text-sm`}>Online</span>
                        </div>
                        <div>
                            <h1 className={`${light ? 'text-gray-300' : 'text-black'} text-xm font-bold list-none`}>1</h1>
                            <span className={`${light ? ' text-gray-400' : 'text-black'} list-none text-sm`}>rank by size</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-[40px]'>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
                <div className='mb-4 flex items-start justify-between border-b-[0.25px] border-b-gray-800 pb-3'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <div className='w-[20px] bg-gray-600 flex items-center justify-center h-[20px] rounded-full text-lime-500'>L</div>
                            </div>
                            <h1 className={`${light ? 'text-gray-500' : 'text-black'} hover:underline text-xs cursor-pointer hover:text-blue-500`}>O/olayemi • 1 hr.ago</h1>
                        </div>
                        <div className='mt-2 flex flex-col gap-12'>
                            <h1 className={`${light ? 'text-gray-400' : 'text-black'} text-sm font-semibold`}>Today Someone Learns a Lesson</h1>
                            <li className={`${light ? 'text-gray-400' : 'text-black'} text-xs list-none`}>36K upvotes • 769 comments</li>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://b.thumbs.redditmedia.com/V1Nlgg3kUC8vuZlkFbMX1Ox6r_eVOu5409mPZe0jYEI.jpg" alt="image" className='object-cover rounded-lg w-[90px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailRightNav




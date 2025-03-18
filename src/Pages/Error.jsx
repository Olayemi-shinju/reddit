import React, { useEffect, useState } from 'react'
const Error = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }, []);
  
    if (!isVisible) {
      return null; 
    }
  return (
    <div className='w-full fixed z-50 top-14'>
        <div className='w-full bg-red-600 flex items-center px-3 py-2 justify-between'>
            <h1 className='text-white'>Network Error</h1>
            <button className='list-none text-white text-xl'>X</button>
        </div>
    </div>
  )
}

export default Error

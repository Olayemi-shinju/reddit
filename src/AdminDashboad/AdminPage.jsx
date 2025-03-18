import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToggleClass } from '../Context/Context';

const AdminSideNav = () => {
  const navigate = useNavigate();
const {getAdmin} = useContext(ToggleClass)
  useEffect(() => {
    const storedAdminData = localStorage.getItem('adminDetail');
    if (storedAdminData) {
        navigate('/AdminDash')
    } else {
      navigate('/AdminLogin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminDetail');
    navigate('/AdminLogin');
  };

  return (
    <div className="hidden lg:block">
      <div className="fixed z-10 w-[20%] bg-white top-0 h-screen border border-r-gray-600 border-[0.25] flex flex-col">
        <div className="flex flex-col px-3 py-2 border border-b-gray-600 border-[0.25] pb-3 items-center justify-center">
          {getAdmin && (
            <>
              <h1 className="text-2xl font-semibold">Welcome Back</h1>
              <h1 className="text-md font-semibold">{getAdmin.fullname}</h1>
              <span className="text-xs font-semibold">{getAdmin.email}</span>
            </>
          )}
        </div>
        <div className="flex-1">
          <ul>
            <li className="text-lg px-4 border border-b-gray-300 border-[0.25] hover:bg-gray-100 cursor-pointer py-4 list-none"><Link to='/AdminDash'>Dashboard</Link></li>
            <li className="text-lg px-4 hover:bg-gray-100 py-4 cursor-pointer list-none border border-b-gray-300 border-[0.25]"><Link to='/ViewPost'>Post</Link></li>
            <li className="text-lg px-4 hover:bg-gray-100 py-4 cursor-pointer list-none border border-b-gray-300 border-[0.25]"><Link to='/ViewComment'>Comment</Link></li>
            <li className="text-lg px-4 hover:bg-gray-100 py-4 cursor-pointer list-none border border-b-gray-300 border-[0.25]"><Link to='/AdminProfile'>Profile</Link></li>
            <li className="text-lg px-4 hover:bg-gray-100 py-4 cursor-pointer list-none border border-b-gray-300 border-[0.25]"><Link to='/AdminSetting'>Settings</Link></li>
          </ul>
        </div>
        <div className="py-4 border border-t-gray-300 border-[0.25]">
          <li onClick={handleLogout} className="text-lg px-4 hover:text-red-600 flex cursor-pointer py-2 justify-center list-none">Log Out</li>
        </div>
      </div>
    </div>
  );
};

export default AdminSideNav;

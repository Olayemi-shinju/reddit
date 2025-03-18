import React, { useContext } from 'react';
import AdminSideNav from './AdminPage';
import AdminNav from './AdminNav';
import { Link } from 'react-router-dom';
import { ToggleClass } from '../Context/Context';

const AdminProfile = () => {
const {getAdmin} = useContext(ToggleClass)

    return (
        <div>
            <div className='flex items-start'>
                <AdminSideNav />
                <AdminNav />
            </div>
            <div className="w-[full] flex justify-between items-start mr-7 lg:ml-[300px] mt-[140px] mx-auto p-4 bg-white rounded-md shadow-md">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Admin Profile</h1>
                    <div className="flex flex-col mb-4">
                        <span className="font-bold">Fullname:</span>
                        <span>{getAdmin.fullname}</span>
                    </div>
                    <div className="flex flex-col mb-4">
                        <span className="font-bold">Email:</span>
                        <span>{getAdmin.email}</span>
                    </div>
                    <div className="flex flex-col mb-4">
                        <span className="font-bold">Phone:</span>
                        <span>{getAdmin.phone}</span>
                    </div>

                </div>
                <div>
                    <Link to='/AdminSetting' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;


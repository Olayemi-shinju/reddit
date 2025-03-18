import React, { useState, useContext } from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { ToggleClass } from '../Context/Context';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UsersTable = () => {
  const { getUser } = useContext(ToggleClass)
  const [showDropdown, setShowDropdown] = useState({});

  const handleDropdownToggle = (_id) => {
    setShowDropdown((prevShowDropdown) => ({
      ...prevShowDropdown,
      [_id]: !prevShowDropdown[_id],
    }));
  };

  const deleteUser = async(id)=>{
    try {
      const confirm = window.confirm('Are you sure you want to delete this user');
      if(confirm){
        const res = await axios.delete(`https://ola-reddit.onrender.com/api/user/${id}`)
        if(res.data.status === 200){
          toast.success(res.data.msg)
        }else{
          toast.error(res.data.msg)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-[97%]">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">gender</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {getUser.map((user) => (
            <tr key={user._id}>
              <td className="border px-4 py-2 text-center">{user.fullname}</td>
              <td className="border px-4 py-2 text-center">{user.email}</td>
              <td className="border px-4 py-2 text-center">{user.gender}</td>
              <td className="border px-4 py-2 text-center relative">
                <HiOutlineDotsHorizontal onClick={() => handleDropdownToggle(user._id)} className="cursor-pointer text-center" />
                {showDropdown[user._id] && (
                  <div className="absolute right-0 z-40 mt-2 bg-white shadow-lg w-[150px] rounded-md border border-gray-200">
                    <ul className="list-none flex flex-col items-center justify-center p-0">
                      <li onClick={()=>deleteUser(user._id)} className="py-2 w-full hover:bg-gray-100 cursor-pointer text-xs font-semibold">Delete</li>
                      <Link to={`/SinglePost/${user._id}`} className="w-full py-2 hover:bg-gray-100 cursor-pointer text-xs font-semibold">View Post</Link>
                      <Link to={`/SingleComment/${user._id}`} className="py-2 w-full hover:bg-gray-100 cursor-pointer text-xs font-semibold">View Comment</Link>
                    </ul>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer/>
    </div>
  );
};

export default UsersTable;
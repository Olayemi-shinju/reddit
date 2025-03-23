import React, { useContext, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { ToggleClass } from '../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Signin = ({ close, goBackToLogin }) => {
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const { light } = useContext(ToggleClass);
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email.trim() || !formData.password.trim() || !formData.fullname.trim() || !formData.gender.trim()) {
        setError('Please Fill All Input Fields');
      } else {
        setError('');
        setLoader(true);
        const resp = await axios.post('https://ola-reddit.onrender.com/api/user', formData);
        if (resp.data.status === 200) {
          toast.success(resp.data.msg);
          setTimeout(() => {
            goBackToLogin();
          }, 6000);
        } else {
          toast.error(resp.data.msg);
          setLoader(false);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <ToastContainer />
      <div className={`${light ? "bg-gray-900 text-gray-300" : 'bg-white text-black'} w-[100%] p-4 md:w-[50%] lg:w-[42%] rounded-xl shadow-lg`}>
        <div className="flex justify-end">
          <button onClick={close} className={`${light ? "text-white bg-gray-800" : 'text-gray-700 bg-gray-300'} h-8 w-8 rounded-full flex items-center justify-center`}>
            <AiOutlineClose />
          </button>
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Sign Up</h1>
        <p className="text-sm text-center text-gray-400">
          By continuing, you agree to our <span className="text-blue-500 cursor-pointer">User Agreement</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.
        </p>
        <div className="flex flex-col gap-3 mt-4">
            <button className="flex items-center justify-center gap-4 w-full border border-gray-300 rounded-full p-3 font-semibold bg-white text-gray-700">
              <FcGoogle className="text-xl" /> Continue With Google
            </button>
            <button className="flex items-center justify-center gap-4 w-full border border-gray-300 rounded-full p-3 font-semibold bg-white text-gray-700">
              <BsApple className="text-xl" /> Continue With Apple
            </button>
          </div>
        <form className='mt-6' autoComplete='off' onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="text" placeholder='Enter fullname' name="fullname" value={formData.fullname} onChange={handleChange} className="w-full p-3 border rounded-full outline-none" />
          </div>
          <div className="mb-4">
                  <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-full outline-none" />
          </div>
          <div className="mb-4">
            <input type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-full outline-none" />
          </div>
          <div className="mb-4">
      
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 border rounded-full outline-none">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}
          
            Already a Redditor? <span onClick={goBackToLogin} className="text-blue-600 cursor-pointer">Log in</span>
          <button type="submit" disabled={loader} className={`w-full py-3 rounded-full mt-6 text-white ${loader ? 'bg-gray-400' : 'bg-orange-700 hover:bg-orange-600'}`}>
            {loader ? 'Please Wait...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;

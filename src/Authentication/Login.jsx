import React, { useContext, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Signin from './Signin';
import { ToggleClass } from '../Context/Context';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ close }) => {
  const { ret, light } = useContext(ToggleClass);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please Fill All Input Fields');
      return;
    }
    setLoader(true);
    setError('');
    try {
      const resp = await axios.post('https://ola-reddit.onrender.com/api/user/login', formData);
      if (resp.data.status === 200) {
        toast.success('User Login Successful');
        ret();
        localStorage.setItem('userDetail', JSON.stringify(resp.data.data));
        close();
      } else {
        toast.error('Invalid Email Or Password');
        setLoader(false);
      }
    } catch (error) {
      if (error) {
        toast.error(`An unexpected error occurred: ${error.message}`);
        setLoader(false)
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {isSignin ? (
        <Signin close={close} goBackToLogin={() => setIsSignin(false)} />
      ) : (
        <div className={`${light ? "bg-gray-900 text-white" : 'bg-white text-black'} p-6 w-[90%] md:w-[50%] lg:w-[40%] rounded-xl shadow-lg`}>
          <div className="flex justify-end">
            <button onClick={close} className={`${light ? "text-white bg-gray-800" : 'text-gray-700 bg-gray-300'} h-8 w-8 rounded-full flex items-center justify-center`}>
              <AiOutlineClose />
            </button>
          </div>
          <h1 className="text-2xl text-center font-bold">Log In</h1>
          <p className="text-sm text-gray-400 text-center">By continuing, you agree to our <span className="text-blue-500 cursor-pointer">User Agreement</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.</p>
          <div className="flex flex-col gap-3 mt-4">
            <button className="flex items-center justify-center gap-4 w-full border border-gray-300 rounded-full p-3 font-semibold bg-white text-gray-700">
              <FcGoogle className="text-xl" /> Continue With Google
            </button>
            <button className="flex items-center justify-center gap-4 w-full border border-gray-300 rounded-full p-3 font-semibold bg-white text-gray-700">
              <BsApple className="text-xl" /> Continue With Apple
            </button>
          </div>
          <div className="flex items-center mt-4">
            <hr className="flex-grow bg-gray-300 h-[1px]" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-grow bg-gray-300 h-[1px]" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email or Username"
              className="w-full p-3 border border-gray-300 rounded-full focus:ring-2 outline-none"
            />
            <input
              name='password'
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-full focus:ring-2 outline-none"
            />
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            <p className="text-blue-600 text-sm text-center cursor-pointer">Forgot Password?</p>
            <p className="text-gray-400 text-sm text-center">New to Reddit? <span onClick={() => setIsSignin(true)} className="text-blue-600 cursor-pointer">Sign Up</span></p>
            <button disabled={loader} className={`w-full p-3 rounded-full font-semibold ${loader ? 'bg-gray-300 text-black' : 'bg-orange-600 text-white'}`}>
              {loader ? 'Please Wait...' : 'Log In'}
            </button>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Login;

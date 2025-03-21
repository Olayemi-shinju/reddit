import React, { useContext, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { ToggleClass } from '../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signin = ({ close, goBackToLogin }) => {
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false)
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
        setError('Please Fill All Input Field');
      } else {
        setError('');
        setLoader(true)
        const resp = await axios.post('https://ola-reddit.onrender.com/api/user', formData);
        if (resp.data.status === 200) {
          toast.success(resp.data.msg);
          setTimeout(() => {
            goBackToLogin();
          }, 6000);
        } else {
          toast.error(resp.data.msg);
          setLoader(false)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <div>
      <div className='hidden lg:block'>
        <div className="h-[100vh] fixed pb-4 z-50 top-0 items-center flex justify-center">
          <div className={`${light ? "bg-gray-900" : 'bg-white'} fixed pb-4 z-40 sm:w-[90%] w-full md:w-[80%] lg:w-[43%] rounded-xl`}>
            <div className="pt-8 pr-4 flex justify-end cursor-pointer">
              <button onClick={close} className={`${light ? "text-white bg-gray-800" : 'text-gray-700 bg-gray-300'} h-[35px] w-[35px] rounded-full text-xl font-extralight flex items-center justify-center`}>
                <AiOutlineClose />
              </button>
            </div>
            <div>
              <h1 className={`${light ? "text-gray-300" : 'text-black'} text-2xl font-bold text-center mb-2`}>Sign Up</h1>
              <li className="list-none text-sm text-center text-gray-400">
                By continuing, you agree to our <span className="text-blue-500 hover:underline cursor-pointer">User Agreement</span> and
              </li>
              <li className="text-sm list-none text-center text-gray-400">
                acknowledge that you understand the <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy.</span>
              </li>
            </div>
            <div className="flex items-center justify-center">
              <form className='w-[100%] p-7' autoComplete='off'>
                <div className="relative mt-4 w-full flex justify-center">
                  <input
                    id="fullname"
                    type="text"
                    name='fullname'
                    
                    value={formData.fullname}
                    onChange={handleChange}
                    className="peer w-full sm:w-[90%] md:w-[80%] lg:w-[400px] p-4 border text-black rounded-3xl outline-none focus:outline-none focus:ring-2"
                  />
                  <label
                    htmlFor="fullname"
                    className="absolute left-20 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                  >
                    Full Name <span className="text-red-700">*</span>
                  </label>
                </div>
                <div className="relative mt-4 w-full flex justify-center">
                  <input
                    id="email"
                    type="email"
                    autoComplete='off'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full sm:w-[90%] md:w-[80%] lg:w-[400px] p-4 border text-black rounded-3xl outline-none focus:outline-none focus:ring-2"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-20 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                  >
                    Email <span className="text-red-700">*</span>
                  </label>
                </div>

                <div className="relative mt-4 w-full flex justify-center">
                  <input
                    id="password"
                    onChange={handleChange}
                    type="password"
                    autoComplete='off'
                    name='password'
                    value={formData.password}
                    className="peer w-full sm:w-[90%] md:w-[80%] lg:w-[400px] p-4 border border-gray-300 text-black rounded-3xl outline-none focus:outline-none focus:ring-2"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-20 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                  >
                    Password <span className="text-red-700">*</span>
                  </label>
                </div>

                <div className="relative mt-4 w-full flex justify-center">
                  <select name="gender" id="gender" onChange={handleChange} value={formData.gender} className="peer w-full sm:w-[90%] md:w-[80%] lg:w-[400px] p-4 border text-black rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {error && <p className="text-red-600 h-10 mt-6 pl-14">{error}</p>}

                <div className="pl-12 mb-4">
                  <li onClick={goBackToLogin} className="text-gray-400 text-sm list-none mt-2">
                    Already a Redditor? <span className="text-blue-600 cursor-pointer">Log in</span>
                  </li>
                </div>

                <div className="flex items-center justify-center">
                <button disabled={loader} onClick={handleSubmit} className={loader === true ? 'bg-gray-100 text-black "text-md font-semibold rounded-3xl mt-2 py-3 w-full lg:w-[400px]"' : 'bg-orange-700 "text-md font-semibold rounded-3xl mt-2 text-gray-300 py-3 w-full lg:w-[400px]"'}>
                          {loader === true ? 'Please Wait....' : 'Sign Up'}
                          </button>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
      <div className="grid place-items-center h-screen w-full lg:hidden">
        <div className="h-[100vh] fixed pb-4 z-50 top-0 items-center flex justify-center">
          <div className={`${light ? "bg-gray-900" : 'bg-white'} fixed pb-4 z-40 sm:w-[90%] w-full md:w-[80%] lg:w-[43%] rounded-xl`}>
            <div className="pt-8 pr-4 flex justify-end cursor-pointer">
              <button onClick={close} className={`${light ? "text-white bg-gray-800" : 'text-gray-700 bg-gray-300'} h-[35px] w-[35px] rounded-full text-xl font-extralight flex items-center justify-center`}>
                <AiOutlineClose />
              </button>
            </div>
            <div>
              <h1 className={`${light ? "text-gray-300" : 'text-black'} text-2xl font-bold text-center mb-2`}>Sign Up</h1>
              <li className="list-none text-sm text-center text-gray-400">
                By continuing, you agree to our <span className="text-blue-500 hover:underline cursor-pointer">User Agreement</span> and
              </li>
              <li className="text-sm list-none text-center text-gray-400">
                acknowledge that you understand the <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy.</span>
              </li>
            </div>
            <div className="flex items-center justify-center">
              <form className='w-[100%] p-7'>
                <div className="relative mt-4 w-full flex justify-center">
                  <input
                    id="fullname"
                    type="text"
                    name='fullname'
                    value={formData.fullname}
                    onChange={handleChange}
                    className="peer w-full sm:w-[90%] md:w-[80%] lg:w-[400px] p-4 border text-black rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input"
                  />
                  <label
                    htmlFor="fullname"
                    className="absolute left-20 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                  >
                    Full Name <span className="text-red-700">*</span>
                  </label>
                </div>
                <div className="relative mt-4 w-full flex justify-center">
                  <input
                    id="email"
                    type="text"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full sm:w-[90%] md:w-[80%] lg:w-[400px] p-4 border text-black rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-20 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                  >
                    Email <span className="text-red-700">*</span>
                  </label>
                </div>

                <div className="relative mt-4 w-full flex justify-center">
                  <input
                    id="password"
                    onChange={handleChange}
                    type="password"
                    name='password'
                    value={formData.password}
                    className="peer w-full sm:w-[90%] md:w-[80%] lg:w-[400px] p-4 border border-gray-300 text-black rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-20 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                  >
                    Password <span className="text-red-700">*</span>
                  </label>
                </div>

                <div className="relative mt-4 w-full flex justify-center">
                  <select name="gender" id="gender" onChange={handleChange} value={formData.gender} className="peer w-full sm:w-[90%] md:w-[80%] lg:w-[400px] p-4 border text-black rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {error && <p className="text-red-600 h-10 mt-6 pl-14">{error}</p>}

                <div className="pl-12 mb-4">
                  <li onClick={goBackToLogin} className="text-gray-400 text-sm list-none mt-2">
                    Already a Redditor? <span className="text-blue-600 cursor-pointer">Log in</span>
                  </li>
                </div>

                <div className="flex items-center justify-center">
                  <button onClick={handleSubmit} className="text-md font-semibold rounded-3xl mt-2 text-gray-300 bg-orange-700 py-3 w-full sm:w-[90%] md:w-[80%] lg:w-[400px]">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signin;

import React, { useContext, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Signin from './Signin';
import { ToggleClass } from '../Context/Context';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ close }) => {
  const { ret } = useContext(ToggleClass)
  const [error, setError] = useState(null)
  const { light } = useContext(ToggleClass)
  const [isSignin, setIsSignin] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!formData.email.trim() || !formData.password.trim()) {
        setError('Please Fill All Input Field')
      } else {
        const resp = await axios.post('http://localhost:4000/api/user/login', formData)
        if (resp.data.status === 200) {
          toast.success('User Login Successful')
          ret()
          localStorage.setItem('userDetail', JSON.stringify(resp.data.data))
          close()

        } else {
          setError(null)
          toast.error('Invalid Email Or Password')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault()
    try {
      if (!formData.email.trim() || !formData.password.trim()) {
        setError('Please Fill All Input Field')
      } else {
        const resp = await axios.post('http://localhost:4000/api/user/login', formData)
        if (resp.data.status === 200) {
          toast.success('User Login Successful')
          ret()
          localStorage.setItem('userDetail', JSON.stringify(resp.data.data))
          close()

        } else {
          setError(null)
          toast.error('Invalid Email Or Password')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }


  const goToSignin = () => {
    setIsSignin(true);
  };

  const goBackToLogin = () => {
    setIsSignin(false);
  };

  return (
    <div>
      <div className="grid place-items-center h-screen w-full lg:hidden">
        <div>
          {isSignin ? (
            <div>
              <Signin close={close} goBackToLogin={goBackToLogin} />
            </div>
          ) : (
            <div >
              <div className="h-[100vh] fixed pb-4 z-50 top-0  items-center flex justify-center">
                <div className={`${light ? "bg-gray-900" : 'bg-white'} fixed pb-4 z-50 lg:w-[43%] md:w-[80%] w-[100%] rounded-xl`}>
                  <div className="pt-8 pr-4 flex justify-end cursor-pointer">
                    <button onClick={close} className={`${light ? "text-white bg-gray-800" : 'text-gray-700 bg-gray-300'} h-[35px] w-[35px] rounded-full  text-xl font-extralight flex items-center justify-center`}>
                      <AiOutlineClose />
                    </button>
                  </div>
                  <div>
                    <h1 className={`${light ? "text-gray-300" : 'text-black'} text-2xl font-bold  text-center mb-2`}>Log In</h1>
                    <li className="list-none text-sm text-center text-gray-400">
                      By continuing, you agree to our <span className="text-blue-500 hover:underline cursor-pointer">User Agreement</span> and
                    </li>
                    <li className="text-sm list-none text-center text-gray-400">
                      acknowledge that you understand the <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy.</span>
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <div>
                      <div className={`${light ? "bg-white" : 'bg-sky-100'} lg:w-[400px] cursor-pointer pl-3 flex gap-24 py-2 items-center border-gray-300 border  rounded-3xl p-2 mt-4`}>
                        <FcGoogle className="text-xl" />
                        <li className="text-sm text-gray-700 list-none text-center font-semibold">Continue With Google</li>
                      </div>
                      <div className="lg:w-[400px] cursor-pointer pl-3 flex gap-24 py-2 items-center border-gray-200 border bg-white rounded-3xl p-2 mt-2">
                        <BsApple className="text-xl" />
                        <li className="text-sm text-gray-700 list-none text-center font-semibold">Continue With Apple</li>
                      </div>
                      <div className="flex items-center mt-3 justify-center">
                        <hr className="bg-gray-600 h-[0.1px] w-full mx-2" />
                        <li className="text-sm list-none text-gray-600">OR</li>
                        <hr className="bg-gray-600 h-[0.1px] w-full mx-2" />
                      </div>

                      <form className='w-[100%]'>
                        <div className="relative mt-8 w-full flex justify-center">
                          <input
                            id="username"
                            name='email'

                            value={formData.email}
                            onChange={handleChange}
                            type="text"
                            className={`${light ? "bg-gray-800 text-white" : 'bg-white text-gray-600'} w-full peer lg:w-[400px] p-4 border   rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input`}
                          />
                          <label
                            htmlFor="username"
                            className="absolute left-10  top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                          >
                            Email or Username <span className="text-red-700">*</span>
                          </label>
                        </div>
                        <div className="relative mt-8 w-full flex justify-center">
                          <input
                            id="password"
                            name='password'

                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            className={`${light ? "bg-gray-800 text-white" : 'bg-white text-gray-600'} peer w-full lg:w-[400px] p-4 border border-gray-500  rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input`}
                          />
                          <label
                            htmlFor="password"
                            className="absolute left-10 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                          >
                            Password <span className="text-red-700">*</span>
                          </label>
                        </div>
                        {error && <p className="text-red-600 h-10 mt-5 pl-20 text-sm">{error}</p>}
                        <div className="pl-3">
                          <li className="list-none text-blue-600 text-sm">Forgot Password?</li>
                          <li className="text-gray-400 text-sm list-none mt-2">
                            New to Reddit? <span onClick={goToSignin} className="text-blue-600 cursor-pointer">Sign Up</span>
                          </li>
                        </div>
                        <div className="flex items-center justify-center">
                          <button onClick={handleSubmit} className="text-md font-semibold rounded-3xl mt-2 text-gray-300 bg-orange-700 py-3 w-full lg:w-[400px]">
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <ToastContainer />

      </div>




      <div className="ml-[600px] hidden lg:block">
        <div>
          {isSignin ? (
            <Signin close={close} goBackToLogin={goBackToLogin} />
          ) : (
            <div className="h-[100vh] fixed pb-4 z-50 top-0  items-center flex justify-center">
              <div className={`${light ? "bg-gray-900" : 'bg-white'} fixed pb-4 z-50 lg:w-[43%] md:w-[80%] w-[100%] rounded-xl`}>
                <div className="pt-8 pr-4 flex justify-end cursor-pointer">
                  <button onClick={close} className={`${light ? "text-white bg-gray-800" : 'text-gray-700 bg-gray-300'} h-[35px] w-[35px] rounded-full  text-xl font-extralight flex items-center justify-center`}>
                    <AiOutlineClose />
                  </button>
                </div>
                <div>
                  <h1 className={`${light ? "text-gray-300" : 'text-black'} text-2xl font-bold  text-center mb-2`}>Log In</h1>
                  <li className="list-none text-sm text-center text-gray-400">
                    By continuing, you agree to our <span className="text-blue-500 hover:underline cursor-pointer">User Agreement</span> and
                  </li>
                  <li className="text-sm list-none text-center text-gray-400">
                    acknowledge that you understand the <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy.</span>
                  </li>
                </div>
                <div className="flex items-center justify-center">
                  <div>
                    <div className={`${light ? "bg-white" : 'bg-sky-100'} lg:w-[400px] cursor-pointer pl-3 flex gap-24 py-2 items-center border-gray-300 border  rounded-3xl p-2 mt-4`}>
                      <FcGoogle className="text-xl" />
                      <li className="text-sm text-gray-700 list-none text-center font-semibold">Continue With Google</li>
                    </div>
                    <div className="lg:w-[400px] cursor-pointer pl-3 flex gap-24 py-2 items-center border-gray-200 border bg-white rounded-3xl p-2 mt-2">
                      <BsApple className="text-xl" />
                      <li className="text-sm text-gray-700 list-none text-center font-semibold">Continue With Apple</li>
                    </div>
                    <div className="flex items-center mt-3 justify-center">
                      <hr className="bg-gray-600 h-[0.1px] w-full mx-2" />
                      <li className="text-sm list-none text-gray-600">OR</li>
                      <hr className="bg-gray-600 h-[0.1px] w-full mx-2" />
                    </div>

                    <div>
                      <div className="relative w-full mb-1 max-w-sm mx-auto mt-8">
                        <input
                          id="username"
                          name='email'
                          autoComplete='email'
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          className={`${light ? "bg-gray-800 text-white" : 'bg-white text-gray-600'} w-full peer lg:w-[400px] p-4 border   rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input`}
                        />
                        <label
                          htmlFor="username"
                          className="absolute left-7 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                        >
                          Email or Username <span className="text-red-700">*</span>
                        </label>
                      </div>
                      <div className="relative w-full max-w-sm mx-auto">
                        <input
                          id="password"
                          name='password'
                          autoComplete='new-password'
                          value={formData.password}
                          onChange={handleChange}
                          type="password"
                          className={`${light ? "bg-gray-800 text-white" : 'bg-white text-gray-600'} peer w-full lg:w-[400px] p-4 border border-gray-500  rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input`}
                        />
                        <label
                          htmlFor="password"
                          className="absolute left-7 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                        >
                          Password <span className="text-red-700">*</span>
                        </label>
                      </div>
                      {error && <p className="text-red-600 h-3 pl-8 text-sm">{error}</p>}
                      <div className="pl-3">
                        <li className="list-none text-blue-600 text-sm">Forgot Password?</li>
                        <li className="text-gray-400 text-sm list-none mt-2">
                          New to Reddit? <span onClick={goToSignin} className="text-blue-600 cursor-pointer">Sign Up</span>
                        </li>
                      </div>
                      <div className="flex items-center justify-center">
                        <button onClick={handleSubmit2} className="text-md font-semibold rounded-3xl mt-2 text-gray-300 bg-orange-700 py-3 w-full lg:w-[400px]">
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )}

        </div>
        <ToastContainer />
      </div>


    </div>
  );
};

export default Login;

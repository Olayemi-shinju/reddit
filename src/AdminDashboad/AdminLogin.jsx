import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminLogin = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!formData.email.trim() || !formData.password.trim()) {
                setError('Please fill all field')
            } else {
                const res = await axios.post('http://localhost:4000/api/login/admin', formData)
                if (res.data.status === 200) {
                    navigate('/AdminDash')
                    toast.success(res.data.msg)
                    localStorage.setItem('adminDetail', JSON.stringify(res.data.data))
                } else {
                    toast.error(res.data.msg)
                }
                setError('')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='mx-auto mt-10 w-[40%] p-7 border rounded mb-10'>
                <h1 className='text-center uppercase font-bold text-2xl opacity-60'>Login</h1>
                <div className='mt-4'>
                    <label htmlFor="email" className='text-lg font-bold opacity-50'>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        placeholder='Email'
                        className='w-full rounded-md border border-blue-500 p-2'
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="password" className='text-lg font-bold opacity-50'>Password:</label>
                    <div className='relative'>
                        <input
                           
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Password'
                            className='w-full rounded-md border border-blue-500 p-2'
                        />
                        
                    </div>
                </div>
                {
                    error && <p className='h-4 pl-4 text-red-500'>
                        {error}
                    </p>
                }
                <div className='flex items-center gap-5 my-5'>
                    <hr className='w-[50%]' />
                    <span className='text-sm font-semibold opacity-70'>To</span>
                    <hr className='w-[50%]' />
                </div>
                <Link className='text-sm hover:text-red-500 flex justify-end cursor-pointer' to='/AdminSignin'>I don't have an account</Link>
                <button className='uppercase bg-blue-700 text-white rounded-lg font-bold text-lg p-3 w-full mt-4'>Submit</button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AdminLogin
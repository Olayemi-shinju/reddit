import React, { useContext, useEffect, useState } from 'react';
import AdminSideNav from './AdminPage';
import AdminNav from './AdminNav';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToggleClass } from '../Context/Context';


const AdminSetting = () => {
    const {setAdmin} = useContext(ToggleClass);
    // const navigate = useNavigate
    const [close, setClose] = useState(false);
    const [close2, setClose2] = useState(false)
    const [close3, setClose3] = useState(false)
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
    })
    const storedAdminData = JSON.parse(localStorage.getItem('adminDetail'))

const adminId = storedAdminData.id
    console.log(adminId)

    const handleChange = (e)=>{
        const {value, name} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const open = () => {
        setClose(prev => prev ? false : true)
    }
    const open2 = () => {
        setClose2(prev => prev ? false : true)
    }
    const open3 = () => {
        setClose3(prev => prev ? false : true)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const resp = await axios.put(`http://localhost:4000/api/update/${adminId}`, formData)
                setAdmin(resp.data.data)
            if(resp.data.status === 200){
                toast.success(resp.data.msg)
            }else{
                toast.error(resp.data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='flex items-start'>
                <AdminNav />
                <AdminSideNav />
            </div>
            <div className='ml-[220px] mt-[100px]'>
                <div className='text-center text-black font-bold text-3xl'>
                    <h1>Admin Setting</h1>
                </div>
                <div className='bg-white ml-[100px] mt-6 shadow-lg shadow-blue-400 w-[full] mr-4 p-3'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col items-start gap-3 w-[full]'>
                            <label htmlFor='fullname' className='text-black font-bold'>Fullname:</label>
                            <div className={`${close ? 'block' : 'hidden'} flex flex-col items-start gap-2`}>
                                <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} id="fullname" placeholder='Fullname' className='border w-[500px] p-2 border-blue-400 rounded-lg outline-none' />
                                <div className='flex items-center gap-2 mt-2'>
                                    <button onClick={handleSubmit} className='bg-blue-500 px-4 py-2 rounded-lg text-white'>Save</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={open} className='bg-blue-500 px-4 py-2 rounded-lg text-white'>{close ? 'Cancel' : 'Edit'}</button>
                        </div>
                    </div>



                    <div className='flex items-center justify-between mt-7'>
                        <div className='flex flex-col items-start gap-3 w-[full]'>
                            <label htmlFor='email' className='text-black font-bold'>Email:</label>
                            <div className={`${close2 ? 'block' : 'hidden'} flex flex-col items-start gap-2`}>
                                <input type="text" name="email" value={formData.email} onChange={handleChange} id="email" placeholder='Email' className='border w-[500px] p-2 border-blue-400 rounded-lg outline-none' />
                                <div className='flex items-center gap-2 mt-2'>
                                    <button onClick={handleSubmit} className='bg-blue-500 px-4 py-2 rounded-lg text-white'>Save</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={open2} className='bg-blue-500 px-4 py-2 rounded-lg text-white'>{close2 ? 'Cancel' : 'Edit'}</button>
                        </div>
                    </div>


                  
                    <div className='flex items-center justify-between mt-7'>
                        <div className='flex flex-col items-start gap-3 w-[full]'>
                            <label htmlFor='phone' className='text-black font-bold'>Phone:</label>
                            <div className={`${close3 ? 'block' : 'hidden'} flex flex-col items-start gap-2`}>
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} id="phone" placeholder='Phone' className='border w-[500px] p-2 border-blue-400 rounded-lg outline-none' />
                                <div className='flex items-center gap-2 mt-2'>
                                    <button onClick={handleSubmit} className='bg-blue-500 px-4 py-2 rounded-lg text-white'>Save</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={open3} className='bg-blue-500 px-4 py-2 rounded-lg text-white'>{close3 ? 'Cancel' : 'Edit'}</button>
                        </div>
                    </div>

        
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
};

export default AdminSetting;


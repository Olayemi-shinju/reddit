import React, { useEffect, useState } from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { TbAward } from "react-icons/tb";
import { TbShare3 } from "react-icons/tb";
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import DetailRightNav from '../Navigation/DetailRightNav';
import { useContext } from "react";
import { ToggleClass } from '../Context/Context';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const SinglePost = () => {
    const { id } = useParams()
    const getUser = JSON.parse(localStorage.getItem('userDetail'));
    const users = getUser?.fullname.slice(0, 1).toUpperCase();
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const { light } = useContext(ToggleClass)
    const [formData, setFormData] = useState({ text: '', });

    const handleChange = (event) => {
        setFormData({ ...formData, text: event.target.value });
    };
    const handleSubmit = async () => {
        try {
            if (!formData.text) {
                toast.info('Please fill the field')
            } else {
                const getUser = JSON.parse(localStorage.getItem('userDetail'));
                const userId = getUser?.id
                const data = {
                    text: formData.text,
                    user_id: userId
                }
                const res = await axios.post(`https://ola-reddit.onrender.com/api/comment/${id}`, data)
                setComment((prevComments) => [...prevComments, res.data.data])
                setFormData({ text: '' });
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchPostComments = async () => {
            try {
                const res = await axios.get(`https://ola-reddit.onrender.com/api/comments/${id}`);
                if (res.data.status === 200) {
                    setComment(res.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchPostComments();
    }, [id]);


    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`https://ola-reddit.onrender.com/api/post/${id}`)
                setPost(res.data.data)
               
            } catch (error) {
                console.log(error)
            }
        }
        fetchPost()
    }, [id])


    return (
        <div>
            <div className={`${light ? 'bg-gray-950' : 'bg-white'} w-full lg:grid lg:grid-cols-12 lg:w-[100%] pb-2`}>
                <div className="lg:ml-[330px] col-span-8 w-[100%] pt-20">
                    <div className='lg:w-[70%] w-[100%] p-2 '>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <div className='w-[30px] cursor-pointer h-[30px] flex items-center justify-center rounded-full bg-gray-600'>
                                    <IoArrowBack className='text-xl font-light text-white' onClick={goBack} />
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className="flex flex-col items-end cursor-pointer">
                                        {post.user?.avatar == null ? (
                                            <div className="w-[30px] relative bg-gray-400 flex items-center justify-center h-[30px] rounded-full text-lime-700">
                                                {users}
                                            </div>
                                        ) : (
                                            <div className="">
                                                <img src={`https://ola-reddit.onrender.com/${post.user?.avatar}`} alt="" srcset="" className="h-[30px] w-[30px] rounded-full" />
                                            </div>
                                        )}

                                        <div className="h-[7px] absolute  w-[7px] rounded-full bg-green-700 mt-[25px]"></div>
                                    </div>
                                    <h2 className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>
                                        {post.user?.fullname} • {new Date(post?.date_created / 60 * 60).toDateString()}
                                    </h2>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <HiOutlineDotsHorizontal className={`${light ? 'text-white' : 'text-black'} text-md`} />
                            </div>
                        </div>
                        <div className='p-2'>
                            <li className={`${light ? 'text-white' : 'text-black'} text-xl list-none font-semibold`}>{post.title}</li>
                        </div>
                        {
                            post.img && <div className='w-full'>
                                <img src={`http://localhost:4000/${post.img}`} alt="" className='object-cover w-full rounded-lg' />
                            </div>
                        }



                        <div className='mt-3 flex items-center gap-4 border-b-[0.25px] border-b-gray-700 pb-3 mb-5'>
                            <div className='flex items-center gap-1 bg-gray-700 px-2 py-2 rounded-full'>
                                <button className="bg-transparent border-none p-0 m-0">
                                    <FaArrowAltCircleUp className='text-white text-md' />
                                </button>
                                <h1 className='text-white text-sm font-semibold'>{post?.likes}</h1>
                                <button className="bg-transparent border-none p-0 m-0">
                                    <FaArrowAltCircleDown className='text-white text-md' />
                                </button>
                            </div>
                            <div className='flex items-center gap-1 bg-gray-700 px-3 py-2 rounded-full'>
                                <button className="bg-transparent border-none p-0 m-0 flex items-center gap-1 text-white text-sm font-semibold">
                                    <BsChat className='text-white text-md' /> {comment.length}
                                </button>
                            </div>
                            <div className='flex items-center gap-1 bg-gray-700 px-5 py-3 rounded-full'>
                                <button className="bg-transparent border-none p-0 m-0">
                                    <TbAward className='text-white text-md' />
                                </button>
                            </div>
                            <div className='flex items-center gap-1 bg-gray-700 px-3 py-2 rounded-full'>
                                <button className="bg-transparent border-none p-0 m-0 flex items-center gap-1 text-white text-sm font-semibold">
                                    <TbShare3 className='text-white text-md' /> Share
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='border border[0.25] border-gray-700 rounded-3xl lg:w-[60%] py-2 px-2'>
                            <textarea
                                value={formData.text}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        handleSubmit();
                                    }
                                }}
                                name='text'
                                onChange={handleChange}
                                className={`${light ? "bg-gray-950 text-white" : 'bg-white text-black'} outline-none w-full p-3`}
                            ></textarea>

                            <div className='flex items-center justify-between'>
                                <li className='text-md text-gray-400 list-none pl-5'>T</li>
                                <div className='flex gap-3 text-white'>
                                    <button className='font-semibold text-xs bg-gray-800 px-3 py-2 rounded-3xl'>Cancel</button>
                                    <button className='font-semibold text-xs bg-blue-600 px-3 py-2 rounded-3xl' onClick={handleSubmit}>Comment</button>
                                </div>
                            </div>
                        </div>

                        {
                            comment?.slice().reverse().map((e) => (
                                <div>
                                    <div className='flex items-start gap-4  border-l-2 border-gray-800 border[0.25] pl-5 mt-5'>
                                        <div className="flex flex-col items-end cursor-pointer" key={e?._id}>
                                            {e?.user?.avatar == null ? (
                                                <div className="w-[30px] relative bg-gray-400 flex items-center justify-center h-[30px] rounded-full text-lime-700">
                                                    {users}
                                                </div>
                                            ) : (
                                                <div className="">
                                                    <img src={`http://localhost:4000/${e.user?.avatar}`} alt="" srcset="" className="h-[30px] w-[30px] rounded-full" />
                                                </div>
                                            )}

                                            <div className="h-[7px] absolute  w-[7px] rounded-full bg-green-700 mt-[25px]"></div>
                                        </div>
                                        <div className='flex flex-col '>
                                            <h2 className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>
                                                {e?.user?.fullname} • {new Date(e?.date_created).toDateString()}
                                            </h2>
                                            <p className={`${light ? 'text-white' : 'text-black'} mt-1 text-base`}>{e?.text}</p>
                                        </div>
                                    </div>

                                    <div className='mt-3 flex items-center gap-4 pb-3 mb-5'>
                                        <div className='flex items-center gap-1 px-2 py-2 rounded-full'>
                                            <button className="bg-transparent border-none p-0 m-0">
                                                <FaArrowAltCircleUp className='text-gray-500 text-md' />
                                            </button>
                                            <h1 className='text-gray-500 text-sm font-semibold'>0k</h1>
                                            <button className="bg-transparent border-none p-0 m-0">
                                                <FaArrowAltCircleDown className='text-gray-500 text-md' />
                                            </button>
                                        </div>
                                        <div className='flex items-center gap-1 px-3 py-2 rounded-full'>
                                            <button className="bg-transparent border-none p-0 m-0 flex items-center gap-1 text-gray-500 text-xs font-semibold">
                                                <BsChat className='text-gray-500 text-lg' /> Reply
                                            </button>
                                        </div>
                                        <div className='flex items-center gap-1 px-5 py-3 rounded-full'>
                                            <button className="bg-transparent border-none flex items-center text-gray-500 p-0 text-xs font-semibold m-0">
                                                <TbAward className='text-gray-500 text-lg' /> Award
                                            </button>
                                        </div>
                                        <div className='flex items-center gap-1 px-3 py-2 rounded-full'>
                                            <button className="bg-transparent border-none p-0 m-0 flex items-center gap-1 text-gray-500 text-xs font-semibold">
                                                <TbShare3 className='text-white text-lg' /> Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        {/* Nested Comment Reply */}
                        {/* <div className='pl-4'>
                            <div className='mt-4 pl-6 border-l-2 border-gray-800'>
                                <div className='flex items-start gap-4'>
                                    <div className='w-[30px] h-[30px] bg-gray-600 flex items-center justify-center rounded-full text-white'>C</div>
                                    <div className='flex flex-col'>
                                        <h2 className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>Charlie • 1 hr ago</h2>
                                        <p className={`${light ? 'text-white ' : 'text-black'} mt-1 text-base`}>This is a reply to Bob's comment!</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
                <DetailRightNav className="grid-col-9 w-full" />

            <ToastContainer/>
            </div>
        </div>
    )
}

export default SinglePost

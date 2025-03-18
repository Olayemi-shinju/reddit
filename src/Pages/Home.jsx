import React, { useEffect, useState } from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { TbAward } from "react-icons/tb";
import { TbShare3 } from "react-icons/tb";
import Rightnav from '../Navigation/Rightnav';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ToggleClass } from '../Context/Context';
import axios from 'axios';
import Nav from '../Navigation/Nav';

const Home = () => {
  const [getPost, setGetPost] = useState([]);
  const { light, open } = useContext(ToggleClass);
  const getUser = JSON.parse(localStorage.getItem('userDetail'));
  const users = getUser?.fullname.slice(0, 1).toUpperCase();
  const userID = getUser?.id;
  const storeLogin = localStorage.getItem('login');
  const [likeCounts, setLikeCounts] = useState({});



  const navigate = useNavigate();

  const handleIfLogin = (_id) => {
    if (storeLogin === 'true') {
      navigate(`/Singlepage/${_id}`);
    } else {
      open();
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get('https://ola-reddit.onrender.com/api/post');
        if (res.data.status === 200) {
          setGetPost(res.data.data);
        
        } else {
          setGetPost([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, []);

  const handleLike = async (_id) => {
    const data = { user_id: userID, post_id: _id }
    try {
      const res = await axios.post('https://ola-reddit.onrender.com/api/like', data);
      if (res.data.status === 200) {
        const resp = await axios.get(`https://ola-reddit.onrender.com/api/like/${_id}`);
        setLikeCounts((prevLikeCounts) => ({ ...prevLikeCounts, [_id]: resp.data.data }));
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleDisLike = async (_id) => {
    const data = { userId: userID, }
    try {
      const res = await axios.delete(`https://ola-reddit.onrender.com/api/dislike/${_id}`, { data });
      setLikeCounts((prevLikeCounts) => ({ ...prevLikeCounts, [_id]: res.data.data }));
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className={`${light ? 'bg-gray-950' : 'bg-white'} lg:grid lg:grid-cols-12`}>
      <div className="lg:ml-[300px] lg:col-span-8 pt-20">
        {getPost?.slice().reverse().map((post, index) => (
          <div className='p-2 border-b-[0.25px] boder-b-gray-700' key={post._id}>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <div className="flex flex-col items-end cursor-pointer">
                  {post.user?.avatar == null ? (
                    <div className="w-[30px] relative bg-gray-400 flex items-center justify-center h-[30px] rounded-full text-lime-700">
                      {users}
                    </div>
                  ) : (
                    <div className="">
                      <img src={`https://ola-reddit.onrender.com/${post.user?.avatar}`} alt={post?.title} className="h-[30px] w-[30px] rounded-full" />
                    </div>
                  )}

                  <div className="h-[7px] absolute w-[7px] rounded-full bg-green-700 mt-[25px]"></div>
                </div>
                <h2 className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>
                  {post.user?.fullname} • {new Date(post?.date_created /60 * 60).toDateString()}
                </h2>
              </div>
              <div className='flex items-center gap-3'>
                <button className='px-3 py-0.5 text-sm bg-blue-600 text-white font-bold rounded-full'>Join</button>
                <HiOutlineDotsHorizontal className={`${light ? 'text-white' : 'text-black'} text-md`} />
              </div>
            </div>
            <div className='p-2'>
              <li className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{post.title}</li>
            </div>
            {post.body && <div className='p-2'>
              <li className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{post.body}</li>
            </div>}
            {post.url && <div className='p-2'>
              <Link to={post.url} className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{post.url}</Link>
            </div>}
            {post.img && <div className='w-full'>
              <img src={`https://ola-reddit.onrender.com/${post.img}`} alt="" className='object-cover w-full rounded-lg' />
            </div>}

            <div className='mt-3 flex items-center gap-4 mb-5 w-full'>
              <div className='flex items-center gap-1 px-3 py-2 rounded-full bg-gray-700'>
                <button className="bg-transparent border-none p-0 m-0" onClick={() => handleLike(post._id)}>
                  <FaArrowAltCircleUp className='text-white text-md' />
                </button>
                <h1 className='text-white text-sm font-semibold'>{likeCounts[post._id] || post.likes}</h1>
                <button className="bg-transparent border-none p-0 m-0" onClick={() => handleDisLike(post._id)}>
                  <FaArrowAltCircleDown className='text-white text-md' />
                </button>
              </div>


              <button
                className='flex items-center text-white font-semibold gap-1 bg-gray-700 px-3 py-2 rounded-full'
                onClick={() => handleIfLogin(post._id)}
              >
                <BsChat className='text-white text-md' />{post.comments?.length}
              </button>

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
        ))}
      </div>
      <Rightnav className=" fixed top-0 w-[30%] right-0" />
      <Nav className='hidden' getPost={getPost} />
    </div>
  )
}

export default Home;

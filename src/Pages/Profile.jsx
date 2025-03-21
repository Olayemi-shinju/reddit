import React, { useState, useContext, useEffect } from 'react';
import { PiCameraPlusLight } from "react-icons/pi";
import ProfileRightNav from '../Navigation/ProfileRightnav';
import { Link, useNavigate } from 'react-router-dom';
import { ToggleClass } from '../Context/Context';
import axios from 'axios';
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const Profile = () => {
  const { user } = useContext(ToggleClass);
  const getUser = JSON.parse(localStorage.getItem('userDetail'));
  const users = getUser?.fullname?.slice(0, 1).toUpperCase();
  const userId = getUser?.id;
  const userName = getUser?.fullname;
  const [activeTab, setActiveTab] = useState('post');
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const { light } = useContext(ToggleClass);
  const [openPostId, setOpenPostId] = useState(null); // Track which post's menu is open

  const open = (_id) => {
    // Toggle the menu for the clicked post
    setOpenPostId(prev => (prev === _id ? null : _id));
  };

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const response = await axios.get(`https://ola-reddit.onrender.com/api/posts/${userId}`);
        setPost(response.data.data);
      };
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const response = await axios.get(`https://ola-reddit.onrender.com/api/comment/${userId}`);
        setComment(response.data.data);
      };
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  const handleDelete = async (_id) => {
    try {
      const confirm = window.confirm('Are You Sure You Want To Delete This Post?');
      if (confirm) {
        const res = await axios.delete(`https://ola-reddit.onrender.com/api/posts/${_id}`);
        if (res.data.status === 200) {
          toast.info(res.data.msg);
          // Filter out the deleted post from the existing state
          setPost(post.filter((post) => post._id !== _id));
        } else {
          toast.error(res.data.msg);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (_id) => {
    try {
      const confirm = window.confirm('Are You Sure You Want To Delete This Comment?');
      if (confirm) {
        const res = await axios.delete(`https://ola-reddit.onrender.com/api/comment/${_id}`);
        if (res.data.status === 200) {
          toast.info(res.data.msg);
          // Filter out the deleted comment from the existing state
          setComment(comment.filter((comment) => comment._id !== _id));
        } else {
          toast.error(res.data.msg);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='lg:ml-[310px] p-2 mt-[50px]'>
      <div className='lg:w-[63%] border-b-[0.25px] border-b-gray-200 pb-10'>
        <div className='flex items-center gap-7'>
          <div className='flex items-end'>
            {user == null ? (
              <div className="w-[60px] relative bg-gray-400 flex items-center justify-center h-[60px] rounded-full text-lime-700">
                {users}
              </div>
            ) : (
              <div className="">
                <img src={user.avatar} alt="" className="h-[60px] w-[60px] rounded-full" />
              </div>
            )}
            <Link to='/setting' className='absolute ml-10 mt-[30px]'>
              <div className="relative w-[30px] h-[30px] bg-gray-300 rounded-full flex justify-center items-center">
                <PiCameraPlusLight className="text-black text-xl" />
              </div>
            </Link>
          </div>
          <div>
            <h1 className='text-2xl text-gray-600 font-bold'>{userName}</h1>
            <li className='list-none text-gray-500 text-sm font-semibold'>u/{userName}</li>
          </div>
        </div>
        <div className='mt-10 flex lg:w-[460px] items-center justify-between'>
          <div>
            <button className={`text-black text-sm font-semibold ${activeTab === 'post' ? 'bg-blue-600 text-white' : 'bg-gray-400'} px-4 py-2 rounded-3xl`} onClick={() => setActiveTab('post')}>Post</button>
          </div>
          <div>
            <button className={`text-black text-sm font-semibold ${activeTab === 'comment' ? 'bg-blue-600 text-white' : 'bg-gray-400'} px-4 py-2 rounded-3xl`} onClick={() => setActiveTab('comment')}>Comment</button>
          </div>
          <div>
            <button className='text-black text-sm font-semibold bg-gray-400 px-4 py-2 rounded-3xl'>Upvoted</button>
          </div>
          <div>
            <button className='text-black text-sm font-semibold bg-gray-400 px-4 py-2 rounded-3xl'>DownVoted</button>
          </div>
        </div>
      </div>
      {activeTab === 'post' ? (
        post?.length > 0 ? (
          post.map((postItem) => (
            <div key={postItem._id} className='lg:w-[60%] mt-3'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                  <div className="flex flex-col items-end cursor-pointer">
                    {!postItem.user.avatar ? (
                      <div className="w-[30px] relative bg-gray-400 flex items-center justify-center h-[30px] rounded-full text-lime-700">
                        {users}
                      </div>
                    ) : (
                      <img src={postItem.user.avatar} alt="" className="h-[30px] w-[30px] rounded-full" />
                    )}
                    <div className="h-[7px] absolute w-[7px] rounded-full bg-green-700 mt-[25px]"></div>
                  </div>
                  <h1 className={`${light ? 'text-gray-500' : 'text-black'} text-sm`}>
                    <p className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>
                      {postItem.user.fullname} • {new Date(postItem?.date_created / 60 * 60).toDateString()}
                    </p>
                  </h1>
                </div>
                <div>
                  <div className='flex items-center gap-3'>
                    <button className='px-3 py-0.5 text-sm bg-blue-600 text-white font-bold rounded-full'>Join</button>
                    <HiOutlineDotsHorizontal className={`${light ? 'text-white' : 'text-black'} cursor-pointer`} onClick={() => open(postItem._id)} />
                  </div>
                  <div className={`${openPostId === postItem._id ? 'block' : 'hidden'}`}>
                    <div className={`${light ? 'bg-white' : 'bg-gray-400'} absolute lg:w-[100px] mt-[12px] rounded-md py-2 shadow flex flex-col gap-3`}>
                      <div onClick={() => handleDelete(postItem._id)} className='flex cursor-pointer py-1 px-2 hover:bg-slate-300 items-center gap-4'>
                        <RiDeleteBin6Line className={`${light ? 'text-gray-600' : 'text-white'} text-md cursor-pointer`} />
                        <li className='list-none text-sm font-semibold text-gray-600'>Delete</li>
                      </div>
                      <div onClick={() => navigate(`/UpdatePost/${postItem._id}`)} className='flex py-1 px-2 hover:bg-slate-300 cursor-pointer items-center gap-4'>
                        <CiEdit className={`${light ? 'text-gray-600' : 'text-white'} text-md cursor-pointer`} />
                        <li className='list-none text-sm font-semibold text-gray-600'>Edit</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <li className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{postItem.title}</li>
              </div>
              {postItem.body && (
                <div className='p-2'>
                  <li className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{postItem.body}</li>
                </div>
              )}
              {postItem.url && (
                <div className='p-2'>
                  <Link to={postItem.url} className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{postItem.url}</Link>
                </div>
              )}
              {postItem.img && (
                <div className=''>
                  <img src={postItem.img} alt="" className='object-cover w-full rounded-lg' />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='mt-6 flex flex-col items-center justify-center lg:w-[65%]'>
            <img src="https://www.redditstatic.com/shreddit/assets/hmm-snoo.png" alt="" className='w-[60px]' />
            <h1 className='text-sm font-semibold text-gray-700'>{userName} hasn't posted yet</h1>
          </div>
        )
      ) : activeTab === 'comment' ? (
        <div className="pb-[350px]">
          {
            comment?.map((e) => (
              <div className='lg:w-[60%] mt-3 ' key={e?.id}>
                <div className='flex items-start gap-4 mt-11 border-l-2 border-gray-800 pl-5'>
                  <div className="flex flex-col items-end cursor-pointer">
                    {e?.user?.avatar == null ? (
                      <div className="w-[30px] relative bg-gray-400 flex items-center justify-center h-[30px] rounded-full text-lime-700">
                        {users}
                      </div>
                    ) : (
                      <div className="">
                        <img src={e?.user?.avatar} alt="" className="h-[30px] w-[30px] rounded-full" />
                      </div>
                    )}
                    <div className="h-[7px] absolute w-[7px] rounded-full bg-green-700 mt-[25px]"></div>
                  </div>
                  <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center'>
                      <h2 className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>
                        {e?.user?.fullname} • {new Date(e?.user?.date_created).toDateString()}
                      </h2>
                      <RiDeleteBin6Line onClick={() => handleDeleteComment(e?._id)} className={`${light ? 'text-white' : 'text-black'} cursor-pointer`} />
                    </div>
                    <div className={`${light ? 'text-white' : 'text-black'} text-sm mt-2`}>
                      {e?.text}
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      ) : null}
      <ToastContainer />
      <ProfileRightNav />
    </div>
  );
};

export default Profile;

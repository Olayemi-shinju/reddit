import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { ToggleClass } from '../Context/Context';
import AdminSideNav from './AdminPage';
import AdminNav from './AdminNav';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ViewPost = () => {
  const { light } = useContext(ToggleClass)
  const getUser = JSON.parse(localStorage.getItem('userDetail'));
  const users = getUser?.fullname.slice(0, 1).toUpperCase();
  const [getPost, setGetPost] = useState([])
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get('https://ola-reddit.onrender.com/api/post')
        if (res.data.status === 200) {
          setGetPost(res.data.data)
        } else {
          setGetPost([])
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }, [])
  const handleDelete = async (_id) => {
    try {
      const confirm = window.confirm('Are You Sure You Want To Delete This Post?')
      if (confirm) {
        const res = await axios.delete(`https://ola-reddit.onrender.com/api/posts/${_id}`)
        if (res.data.status === 200) {
          toast.success(res.data.msg)
          // Filter out the deleted post from the existing state
          setGetPost(getPost.filter((post) => post._id !== _id))
        } else {
          toast.error(res.data.msg)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className='flex items-start'>
        <AdminSideNav />
        <AdminNav />
      </div>
      <div className="lg:ml-[300px] w-[40%] lg:col-span-8 pt-20">
        {
          getPost.map((post, index) => (
            <div className='p-2' key={post._id}>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                  <div className="flex flex-col items-end cursor-pointer">
                    {post.user.avatar == null ? (
                      <div className="w-[30px] relative bg-gray-400 flex items-center justify-center h-[30px] rounded-full text-lime-700">
                        {users}
                      </div>
                    ) : (
                      <div className="">
                        <img src={`https://ola-reddit.onrender.com/${post.user.avatar}`} alt="" srcset="" className="h-[30px] w-[30px] rounded-full" />
                      </div>
                    )}

                    <div className="h-[7px] absolute  w-[7px] rounded-full bg-green-700 mt-[25px]"></div>
                  </div>
                  <h2 className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>
                    {post.user?.fullname} • {new Date(post.user?.date_created).toDateString()}
                  </h2>
                </div>
                <div className='flex items-center gap-3'>
                  <button className='px-3 py-0.5 text-sm bg-blue-600 text-white font-bold rounded-full'>Join</button>
                  <RiDeleteBin6Line onClick={() => handleDelete(post._id)} className={`${light ? 'text-white' : 'text-black'} text-md cursor-pointer`} />
                </div>
              </div>
              <div className='p-2'>
                <li className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{post.title}</li>
              </div>
              {
                post.body && <div className='p-2'>
                  <li className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{post.body}</li>
                </div>
              }
              {
                post.url && <div className='p-2'>
                  <li className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{post.url}</li>
                </div>
              }
              <div className=''>
                <img src={`${post.img ? `https://ola-reddit.onrender.com/${post.img}` : null}`} alt={post?.img} className='object-cover w-full rounded-lg' />
              </div>
            </div>
          ))
        }

      </div>
      <ToastContainer/>
    </div>
  )
}

export default ViewPost

import React, { useContext, useEffect, useState } from 'react'
import { ToggleClass } from '../Context/Context';
import axios from 'axios';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import AdminSideNav from './AdminPage';
import AdminNav from './AdminNav';
const ViewSinglePost = () => {
  const getUser = JSON.parse(localStorage.getItem('userDetail'));
  const users = getUser?.fullname?.slice(0, 1).toUpperCase();
  const { id } = useParams()

  const [post, setPost] = useState([])
  const { light } = useContext(ToggleClass)
  useEffect(() => {
    try {
      const fetchPost = async () => {
        const response = await axios.get(`https://ola-reddit.onrender.com/api/posts/${id}`)
        setPost(response.data.data)
      }
      fetchPost()
    } catch (error) {
      console.log(error)
    }
  }, [id])
  const handleDelete = async (_id) => {
    try {
      const confirm = window.confirm('Are You Sure You Want To Delete This Post?')
      if (confirm) {
        const res = await axios.delete(`https://ola-reddit.onrender.com/api/posts/${_id}`)
        if (res.data.status === 200) {
          toast.success(res.data.msg)
          // Filter out the deleted post from the existing state
          setPost(post.filter((post) => post._id !== _id))
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
      <div className='lg:ml-[300px] mt-14'>

        {
          post?.map((postItem) => (
            <div key={postItem._id} className='lg:w-[60%] mt-3'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                  <div className="flex flex-col items-end cursor-pointer">
                    {!postItem.user.avatar ? (
                      <div className="w-[30px] relative bg-gray-400 flex items-center justify-center h-[30px] rounded-full text-lime-700">
                        {users}
                      </div>
                    ) : (
                      <img src={`https://ola-reddit.onrender.com/${postItem.user.avatar}`} alt="" className="h-[30px] w-[30px] rounded-full" />
                    )}
                    <div className="h-[7px] absolute w-[7px] rounded-full bg-green-700 mt-[25px]"></div>
                  </div>
                  <h1 className={`${light ? 'text-gray-500' : 'text-black'} text-sm`}>
                    <h2 className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>
                      {postItem.user.fullname} • {new Date(postItem.user.date_created).toDateString()}
                    </h2>
                  </h1>
                </div>
                <div className='flex items-center gap-3'>
                  <button className='px-3 py-0.5 text-sm bg-blue-600 text-white font-bold rounded-full'>Join</button>
                  <RiDeleteBin6Line onClick={() => handleDelete(postItem._id)} className={`${light ? 'text-white' : 'text-black'} text-md cursor-pointer`} />
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
                  <li className={`${light ? 'text-white' : 'text-black'} text-lg list-none font-semibold`}>{postItem.url}</li>
                </div>
              )}
              {postItem.img && (
                <div className=''>
                  <img src={`https://ola-reddit.onrender.com/${postItem?.img}`} alt={postItem?.img} className='object-cover w-full rounded-lg' />
                </div>
              )}
            </div>
          ))
        }
      </div>
      <ToastContainer/>
    </div>
  )
}

export default ViewSinglePost
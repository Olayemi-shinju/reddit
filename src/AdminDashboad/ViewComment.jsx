import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { ToggleClass } from '../Context/Context';
import AdminSideNav from './AdminPage';
import AdminNav from './AdminNav';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ViewComment = () => {
  const { light } = useContext(ToggleClass)
  const getUser = JSON.parse(localStorage.getItem('userDetail'));
  const users = getUser?.fullname.slice(0, 1).toUpperCase();
  const [getPost, setGetPost] = useState([])
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/comments')
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
  const handleDeleteComment = async (_id) => {
    try {
      const confirm = window.confirm('Are You Sure You Want To Delete This Comment?')
      if (confirm) {
        const res = await axios.delete(`http://localhost:4000/api/comment/${_id}`)

        if (res.data.status === 200) {
          toast.success(res.data.msg)
          // Filter out the deleted post from the existing state
          setGetPost(getPost.filter((comment) => comment._id !== _id))
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
          getPost?.map((e) => (
            <div>
              <div className='flex items-start gap-4 mt-11 border-l-2 border-gray-800 border[0.25] pl-5'>
                <div className="flex flex-col items-end cursor-pointer">
                  {e.user?.avatar == null ? (
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
                <div className='flex flex-col'>
                  <div className='flex justify-between gap-40 items-center'>
                    <h2 className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>
                      {e.user?.fullname} • {new Date(e.user?.date_created).toDateString()}
                    </h2>
                    <RiDeleteBin6Line
                      className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold cursor-pointer`}
                      onClick={() => handleDeleteComment(e._id)}
                    />
                  </div>
                  <p className={`${light ? 'text-white' : 'text-black'} mt-1 text-base`}>{e.text}</p>
                </div>
              </div>
            </div>
          ))
        }

      </div>
      <ToastContainer/>
    </div>
  )
}

export default ViewComment

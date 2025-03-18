import React, { useContext, useEffect, useState } from 'react'
import { ToggleClass } from '../Context/Context';
import axios from 'axios';
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import AdminSideNav from './AdminPage';
import AdminNav from './AdminNav';
const ViewSingleComment = () => {
  const getUser = JSON.parse(localStorage.getItem('userDetail'));
  const users = getUser?.email?.slice(0, 1).toUpperCase();
  const { id } = useParams()
  const [comment, setComment] = useState([])
  const { light } = useContext(ToggleClass)

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const response = await axios.get(`http://localhost:4000/api/comment/${id}`)
        if (response.data.status === 200) {
          setComment(response.data.data)
        } else {
          setComment([])
        }
      }
      fetchPost()
    } catch (error) {
      console.log(error)
    }
  }, [id])
  const handleDeleteComment = async (_id) => {
    try {
      const confirm = window.confirm('Are You Sure You Want To Delete This Comment?')
      if (confirm) {
        const res = await axios.delete(`http://localhost:4000/api/comment/${_id}`)

        if (res.data.status === 200) {
          toast.success(res.data.msg)
          // Filter out the deleted post from the existing state
          setComment(comment.filter((comment) => comment._id !== _id))
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
      <div className="lg:ml-[300px]">
        {
          (comment && comment.length === 0) ? (
            <div className='flex items-center justify-center h-screen'>
              <h1 className='text-4xl font-semibold'>This user has no comments</h1>
            </div>
          ) : (
            comment?.map((e) => (
              <div className='lg:w-[60%] mt-24 '>
                <div className='flex items-start gap-4 mt-11 border-l-2 border-gray-800 border[0.25] pl-5'>
                  <div className="flex flex-col items-end cursor-pointer">
                    {e.user?.avatar == null ? (
                      <div className="w-[30px] relative bg-gray-400 flex items-center justify-center h-[30px] rounded-full text-lime-700">
                        {users}
                      </div>
                    ) : (
                      <div className="">
                        <img src={`http://localhost:4000/${e.user?.avatar}`} alt="" className="h-[30px] w-[30px] rounded-full" />
                      </div>
                    )}
                    <div className="h-[7px] absolute w-[7px] rounded-full bg-green-700 mt-[25px]"></div>
                  </div>
                  <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center'>
                      <h2 className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold`}>
                        {e.user.fullname} • {new Date(e.user.date_created).toDateString()}
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
          )
        }
      </div>

      <ToastContainer />
    </div>
  )
}

export default ViewSingleComment

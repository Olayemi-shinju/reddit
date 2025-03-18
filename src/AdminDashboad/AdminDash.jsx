import React, { useContext, useEffect, useState } from 'react'
import AdminSideNav from './AdminPage'
import AdminNav from './AdminNav'
import { AiOutlineUser } from 'react-icons/ai'
import UsersTable from './User'
import { ToggleClass } from '../Context/Context'
import axios from 'axios'
const AdminDash = () => {
    const { getUser } = useContext(ToggleClass)
    const [getPost, setGetPost] = useState([])
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
          try {
            const res = await axios.get('http://localhost:4000/api/post')
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

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const res = await axios.get('http://localhost:4000/api/comments')
          if (res.data.status === 200) {
            setPost(res.data.data)
          } else {
            setPost([])
          }
        } catch (error) {
          console.log(error)
        }
      }
      fetchPost()
    }, [])
    return (
        <div>
            <div className='flex items-start'>
                <AdminSideNav />
                <AdminNav />
            </div>
            <div className="lg:ml-[270px] mt-[60px] lg:flex items-center gap-3">
                <div className='bg-white rounded-lg shadow-md p-4 lg:w-80 mt-2'>
                    <div className="flex items-center mb-4">
                        <AiOutlineUser className="text-blue-500 mr-2" size={24} />
                        <h2 className="text-lg font-bold">Total Users</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <h1 className="text-4xl font-bold">{getUser.length}</h1>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-md p-4 lg:w-80 mt-2'>
                    <div className="flex items-center mb-4">
                        <AiOutlineUser className="text-blue-500 mr-2" size={24} />
                        <h2 className="text-lg font-bold">Total Comment</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <h1 className="text-4xl font-bold">{post.length}</h1>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-md p-4 lg:w-80 mt-2'>
                    <div className="flex items-center mb-4">
                        <AiOutlineUser className="text-blue-500 mr-2" size={24} />
                        <h2 className="text-lg font-bold">Total Post</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <h1 className="text-4xl font-bold">{getPost.length}</h1>
                    </div>
                </div>
            </div>
            <div className='lg:ml-[270px] mt-[60px]'>
                <UsersTable/>
            </div>

        </div>
    )
}

export default AdminDash

import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChangeUsernameModal = ({ closeModal, saveUsername }) => {
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        fullname: ''
    })

    const getUserId = JSON.parse(localStorage.getItem('userDetail'))
    const id = getUserId.id
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(formData)
            if (!formData.fullname.trim()) return setError('Please fiil the field')
            const res = await axios.put(`http://localhost:4000/api/${id}`, formData)
            if (res.data.status === 200) {
                toast.success(res.data.msg)
                closeModal()
                saveUsername()
            } else {
                toast.error(res.data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Change Username</h2>

                    {/* Input field */}
                    <input
                        type="text"
                        name='fullname'
                        value={formData.fullname}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg border-gray-300 mb-4"
                        placeholder="Enter new username"
                    />

                    {/* Buttons */}
                    <div className="flex justify-between">
                        <button onClick={closeModal}
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button onClick={handleSubmit}
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChangeUsernameModal;

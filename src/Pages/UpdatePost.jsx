import React, { useState, useContext } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import { ToggleClass } from '../Context/Context';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePost = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const { light } = useContext(ToggleClass);
    const [selectedOption, setSelectedOption] = useState('text');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const [link, setLink] = useState('');
    const [dragging, setDragging] = useState(false);
    const [imagePreview, setImagePreview] = useState(null); // State for image preview

    // Handle drag over event to highlight the drop area
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    // Handle drag leave event to reset the area highlight
    const handleDragLeave = () => {
        setDragging(false);
    };

    // Handle drop event to get the dropped file
    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            previewImage(file);
            setImage(file); // Call the setImage function to handle the image
        }
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            previewImage(file);
            setImage(file); // Call the setImage function to handle the image
        }
    };

    // Function to generate the image preview using FileReader
    const previewImage = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result); // Set the image preview state
        };
        reader.readAsDataURL(file); // Read the file as data URL
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handlePostSubmission = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', text);
        formData.append('img', image);
        formData.append('url', link);

        try {
            if (!title.trim()) return toast.error('Please Enter a Title')
            const resp = await axios.put(`https://ola-reddit.onrender.com/api/post/${id}`, formData)
            if (resp.data.status === 200) {
                toast.success(resp.data.msg)
                navigate('/')
            } else {
                toast.error(resp.data.msg)
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <div className="lg:ml-[310px] pt-14 lg:w-[48%] p-3 h-[100vh] w-full">
                <div className='flex items-center justify-between '>
                    <h1 className={`${light ? 'text-gray-400' : 'text-gray-700'} text-2xl font-bold`}>Edit post</h1>
                    <li className={`${light ? 'text-white' : 'text-black'} text-sm font-semibold list-none`}>Drafts</li>
                </div>
                <div className={`${light ? 'bg-gray-600' : 'bg-gray-300'} mt-3 w-[205px]  rounded-3xl px-3 py-2 flex items-center justify-between`}>
                    <div className={`${light ? 'bg-white' : 'bg-black text-white'} h-[25px] w-[25px] rounded-full font-bold flex items-center justify-center`}>r/</div>
                    <li className={`${light ? 'text-gray-300' : 'text-black'} text-sm font-semibold list-none`}>Select a Community</li>
                    <RiArrowDownSLine className={`${light ? ' text-white' : 'text-black'} text-xl`} />
                </div>
                <div className={`${light ? 'text-white' : 'text-black'} flex cursor-pointer items-center lg:w-[40%] justify-between mt-10 pl-5 font-semibold text-sm  list-none`}>
                    <li onClick={() => handleOptionChange('text')}>Text</li>
                    <li onClick={() => handleOptionChange('image')}>Images & Video</li>
                    <li onClick={() => handleOptionChange('link')}>Link</li>
                </div>
                <div className='w-full'>
                    <div className="relative mt-8 w-full">
                        <input
                            id="username"
                            type="text"
                            name='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={`${light ? 'border border-gray-800 bg-gray-950 text-white' : 'text-black bg-white border border-gray-500'} peer w-full p-4  rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input`}
                        />
                        <label
                            htmlFor="username"
                            className="absolute left-7 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                        >
                            Title <span className="text-red-700">*</span>
                        </label>
                    </div>
                    <div className='h-[20px]'> </div>
                    {selectedOption === 'text' && (
                        <div className='rounded-3xl w-full py-2 px-2'>
                            <textarea
                                placeholder='Body'
                                value={text}
                                name='body'
                                onChange={(e) => setText(e.target.value)}
                                className={`${light ? "bg-gray-950 border-gray-800 border" : 'bg-white border border-gray-500'} rounded-2xl  outline-none border text-sm text-gray-500 w-full p-3`}
                            />
                        </div>
                    )}
                    {selectedOption === 'image' && (
                        <div className='rounded-3xl w-full py-2 px-2'>
                            <div>
                                {/* File input and drag/drop area */}
                                <div
                                    className={`${light ? 'border border-gray-800 bg-gray-950 text-white' : 'text-black bg-white border border-gray-500'
                                        } peer w-full p-6 rounded-3xl outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform cursor-pointer`}
                                    onClick={() => document.getElementById('file-input').click()}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        id="file-input"
                                        type="file"
                                        name='img'
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />

                                    {/* Drag/Drop area */}
                                    <div className={`flex items-center justify-center h-full ${dragging ? 'border-blue-500' : ''}`}>
                                        <p className="text-center text-lg">
                                            {dragging ? (
                                                <span className="text-blue-500">Release to upload image</span>
                                            ) : (
                                                <span>Drag and drop your image here, or click to browse files</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Preview */}
                            {imagePreview && (
                                <div className="mt-4 flex justify-center">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-32 h-32 object-cover rounded-3xl border-2 border-gray-300"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                    {selectedOption === 'link' && (
                        <div className="relative mt-8 w-full">
                            <input
                                id="url"
                                type="text"
                                name='url'
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                className={`${light ? " border-gray-800 bg-gray-950 text-white" : 'border-gray-500 bg-white text-gray-700'} peer w-full p-4 border rounded-3xl outline-none focus:outline-none focus:ring-2 autofill-input`}
                            />
                            <label
                                htmlFor="url"
                                className="absolute left-7 top-4 text-sm text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:top-0 transition-all"
                            >
                                Url <span className="text-red-700">*</span>
                            </label>
                        </div>
                    )}
                    <div className='h-[20px]'></div>
                    <div className='flex gap-3 text-white justify-end'>
                        <button className='font-semibold text-xs bg-blue-600 px-3 py-2 rounded-3xl'>Save Draft</button>
                        <button className='font-semibold text-xs bg-blue-600 px-3 py-2 rounded-3xl' onClick={handlePostSubmission}>Post</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdatePost;

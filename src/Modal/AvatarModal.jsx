import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AvatarUploadModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // Open modal
  const openModal = () => setIsModalOpen(true);
  const getUserId = JSON.parse(localStorage.getItem('userDetail'))
  const id = getUserId?.id
  // Close modal
  const closeModal = () => {
    setImagePreview(null);
    setImageFile(null);
    setIsModalOpen(false);
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle save button click
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('avatar', imageFile);

      const response = await axios.put(`https://ola-reddit.onrender.com/api/${id}`, formData);
      if(response.data.status === 200){
        toast.success(response.data.msg)
        closeModal()
      }else{
        toast.error(response.data.msg)
      }
      // Handle success response
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  return (
    <div>
      {/* Button to trigger modal */}
      <div className="flex items-center justify-between pr-5 bg-gray-200 cursor-pointer mt-7 rounded-xl py-3 px-2" onClick={openModal} >
        <h1 className="text-md font-semibold text-gray-600">Avatar</h1>
        <MdOutlineKeyboardArrowRight className="text-xl text-gray-700" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Change Avatar</h2>

            {/* Avatar drag and drop area */}
            <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg mb-4 text-center" onDragOver={handleDragOver} onDrop={handleDrop} >
              {/* Image preview if there's an uploaded image */}
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-32 h-32 rounded-full mx-auto mb-4" />
              ) : (
                <div className="text-gray-500">
                  <p className="text-sm">Drag and drop an image here, or</p>
                  <button className="text-blue-500 mt-2 text-sm" onClick={() => document.getElementById('file-input').click()} >
                    Browse Files
                  </button>
                </div>
              )}

              {/* Hidden file input */}
              <input id="file-input" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button onClick={closeModal} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400" >
                Cancel
              </button>
              <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default AvatarUploadModal;


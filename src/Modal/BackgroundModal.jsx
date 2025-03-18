import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const BackgroundUploadModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [backgroundPreview, setBackgroundPreview] = useState(null);
    const [backgroundFile, setBackgroundFile] = useState(null);

    // Open modal
    const openModal = () => setIsModalOpen(true);

    // Close modal
    const closeModal = () => {
        setBackgroundPreview(null);
        setBackgroundFile(null);
        setIsModalOpen(false);
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackgroundPreview(reader.result);
                setBackgroundFile(file);
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
                setBackgroundPreview(reader.result);
                setBackgroundFile(file);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            {/* Button to trigger modal */}
            <div
                className="flex items-center justify-between pr-5 bg-gray-200 cursor-pointer mt-7 rounded-xl py-3 px-2"
                onClick={openModal}
            >
                <h1 className="text-md font-semibold text-gray-600">Background</h1>
                <MdOutlineKeyboardArrowRight className="text-xl text-gray-700" />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Change Background</h2>

                        {/* Background drag and drop area */}
                        <div
                            className="border-2 border-dashed border-gray-300 p-6 rounded-lg mb-4 text-center"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            {/* Background preview if there's an uploaded image */}
                            {backgroundPreview ? (
                                <div
                                    className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
                                    style={{ backgroundImage: `url(${backgroundPreview})` }}
                                />
                            ) : (
                                <div className="text-gray-500">
                                    <p className="text-sm">Drag and drop a background image here, or</p>
                                    <button
                                        className="text-blue-500 mt-2 text-sm"
                                        onClick={() => document.getElementById('file-input').click()}
                                    >
                                        Browse Files
                                    </button>
                                </div>
                            )}

                            {/* Hidden file input */}
                            <input
                                id="file-input"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                name='background_img'
                            
                                onChange={handleFileChange}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between">
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => console.log('Background saved:', backgroundFile)} // You can replace this with save logic
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BackgroundUploadModal;

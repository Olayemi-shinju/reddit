import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const DescriptionUpdateModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState('');
    const [tempDescription, setTempDescription] = useState('');

    // Open modal
    const openModal = () => {
        setTempDescription(description); // Set the current description to temporary state when opening
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setTempDescription(description); // Revert to the original description when canceled
    };

    // Save description
    const saveDescription = () => {
        setDescription(tempDescription); // Save the temporary description to the main state
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Button to trigger modal */}
            <div
                className="flex items-center justify-between pr-5 bg-gray-200 cursor-pointer mt-7 rounded-xl py-3 px-2"
                onClick={openModal}
            >
                <h1 className="text-md font-semibold text-gray-600">Description</h1>
                <MdOutlineKeyboardArrowRight className="text-xl text-gray-700" />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Update Description</h2>

                        {/* Text area for the description */}
                        <textarea
                            value={tempDescription}
                            onChange={(e) => setTempDescription(e.target.value)}
                            className="w-full h-32 px-4 py-2 border rounded-lg border-gray-300 mb-4"
                            placeholder="Enter your description here"
                        />

                        {/* Buttons */}
                        <div className="flex justify-between">
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={saveDescription}
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

export default DescriptionUpdateModal;

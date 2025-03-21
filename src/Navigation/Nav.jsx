import { FaReddit } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdQrCodeScanner } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import Login from "../Authentication/Login";  // Importing the Login component
import { LuMessageCircleMore } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { RiNotificationLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { ToggleClass } from '../Context/Context';
import Side from "../Modal/Side";

const Nav = () => {
    const { light, login, close, user, closeModal, closeSide, openModal, openSide, open, sideOpen, opens, isOpen } = useContext(ToggleClass);

    const getUser = JSON.parse(localStorage.getItem('userDetail'));
    const users = getUser?.fullname.slice(0, 1).toUpperCase();




    return (
        <div>
            <div className={`${light ? "  bg-gray-950" : 'bg-white'} fixed gap-7 md:justify-between justify-between top-0 left-0 right-0 z-30 flex items-center px-4 py-2 border-b-[0.25px] border-b-gray-700`}>
                <div className="flex items-center md:justify-between gap-2 lg:jutify-between">
                    <div className="flex items-center lg:gap-4 gap-2">
                        <div className="lg:hidden">
                            <IoMenu onClick={openModal} className={`${light ? "text-white" : 'text-black'} cursor-pointer text-2xl`} />
                        </div>
                        <Link to="/" className="flex gap-1 items-center">
                            <FaReddit className="text-orange-600 text-xl lg:text-3xl" />
                            <h1 className={`${light ? " text-white " : 'text-orange-600'} text-3xl font-bold lg:block hidden`}>reddit</h1>
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className={`${light ? " bg-gray-700" : 'bg-gray-300'} flex items-center gap-3 lg:ml-10 rounded-full px-2 w-[45%] py-0.5 lg:w-[560px]`}>
                        <IoIosSearch className={`${light ? " text-white" : 'text-black'} text-2xl  cursor-pointer`} />
                        <input
                            type="text"
                            placeholder="Search Reddit"
                            className="bg-transparent border-none w-full text-gray-400 outline-none p-1.5 text-sm "
                        />
                    </div>
                </div>
                {
                    login === false ?
                        <div className="flex items-center gap-2 mr-5">
                            <div className="hidden lg:block xl:block md:block">
                                <button className="text-white flex items-center gap-2 text-sm font-bold px-4 py-2.5 bg-gray-700 rounded-full">
                                    <MdQrCodeScanner className="text-white text-xl" />
                                    Get App</button>
                            </div>
                            <div>
                                <button
                                    className="lg:px-3 lg:py-2.5 md:px-4 px-3 py-1.5 md:py-3 sm:px-3 sm:py-2 xs:py-1 xs:px-4 text-sm font-semibold rounded-full hover:underline text-white bg-orange-700"
                                    onClick={open} // Open the modal when clicked
                                >
                                    Log in
                                </button>
                            </div>
                            <HiOutlineDotsHorizontal className={`${light ? "text-white" : 'text-black'} text-xl font-semibold ml-4 cursor-pointer`} />
                        </div>
                        :
                        <div className="flex items-center gap-3">
                            <div>
                                <FiSend className={`${light ? "text-white" : 'text-black'}  text-xl cursor-pointer`} />
                            </div>
                            <div>
                                <LuMessageCircleMore className={`${light ? "text-white" : 'text-black'}  text-2xl cursor-pointer`} />
                            </div>
                            <Link to='/post' className="flex items-center gap-1 cursor-pointer group hover:underline">
                                <GoPlus className={`${light ? "text-white" : 'text-black'} text-3xl cursor-pointer`} />
                                <li className={`${light ? "text-white" : 'text-black'} text-sm list-none group-hover:underline font-semibold`}>Create</li>
                            </Link>
                            <div>
                                <RiNotificationLine className={`${light ? "text-white" : 'text-black'} text-xl cursor-pointer`} />
                            </div>
                            <div className="flex flex-col items-end cursor-pointer" onClick={openSide}>
                                {user?.avatar == null ? (
                                    <div className="w-[30px] relative bg-gray-400 flex items-center justify-center h-[30px] rounded-full text-lime-700">
                                        {users} {/* Render the first letter of the user's name */}
                                    </div>
                                ) : (
                                    <div className="">
                                        <img src={user?.avatar} alt="" srcset="" className="lg:h-[30px] lg:w-[30px] w-[20px] h-[20px] rounded-full" />
                                    </div>
                                )}
                                <div className="h-[7px] absolute w-[7px] rounded-full bg-green-700 mt-[20px] lg:mt-[25px]"></div>
                            </div>

                        </div>
                }
            </div>

            {/* Modal for login */}
            {isOpen && (
                <div>
                    <Login close={close} />  {/* Passing the close function to the Login component */}
                    <div
                        className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-gray-900 bg-opacity-50"
                        onClick={close}  // Clicking outside closes the modal
                    ></div>
                </div>
            )}
            {
                sideOpen && (
                    <div>
                        <Modal />
                        <div
                            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-gray-950 bg-opacity-50"
                            onClick={closeSide}  // Clicking outside closes the modal
                        ></div>
                    </div>
                )
            }
            {
                opens && (
                    <div>
                        <Side />
                        <div
                            className="fixed top-0 left-0 right-0 bottom-0 z-index bg-gray-950 bg-opacity-50"
                            onClick={closeModal}  // Clicking outside closes the modal
                        ></div>
                    </div>
                )
            }
        </div>
    );
};

export default Nav;

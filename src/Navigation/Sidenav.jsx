import React, { useState, useContext } from 'react';
import { TfiHome } from "react-icons/tfi";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { ToggleClass } from '../Context/Context';
import { FaRegFaceMeh } from "react-icons/fa6";
import { LuGamepad2 } from "react-icons/lu"; 
import { CiSquareInfo } from "react-icons/ci";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { PiStarLight } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";

const Sidenav = () => {
    const { light } = useContext(ToggleClass);
    
    // State to track the visibility of the dropdown
    const [topicsOpen, setTopicsOpen] = useState(false);
    const [internetCultureOpen, setInternetCultureOpen] = useState(false);
    const [gamesOpen, setGamesOpen] = useState(false);
    const [qasOpen, setQasOpen] = useState(false);
    const [technologyOpen, setTechnologyOpen] = useState(false);
    const [popCultureOpen, setPopCultureOpen] = useState(false);
    const [movieTvOpen, setMovieTvOpen] = useState(false);
    
    // Toggle functions for each section
    const toggleTopics = () => setTopicsOpen(!topicsOpen);
    const toggleInternetCulture = () => setInternetCultureOpen(!internetCultureOpen);
    const toggleGames = () => setGamesOpen(!gamesOpen);
    const toggleQas = () => setQasOpen(!qasOpen);
    const toggleTechnology = () => setTechnologyOpen(!technologyOpen);
    const togglePopCulture = () => setPopCultureOpen(!popCultureOpen);
    const toggleMovieTv = () => setMovieTvOpen(!movieTvOpen);

    return (
        <div className={`${light ? "bg-gray-950" : 'bg-white'} px-6 fixed h-screen w-[22%] border-r-[0.25px] pb-6 border-r-gray-700 hidden lg:block overflow-y-auto max-h-screen`}>
            <div className=''>
                <div className='border-b-[0.25px] border-b-gray-700 pb-3 mt-10'>
                    <Link to='/' className='flex items-center gap-3 px-4 py-2 pb-3'>
                        <TfiHome className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                        <li className={`${light ? 'text-white' : 'text-black'} list-none text-sm`}>Home</li>
                    </Link>
                    <div className='flex items-center gap-3 w-full py-2 bg-gray-700 rounded-lg px-2'>
                        <BiSolidRightTopArrowCircle className='text-white text-2xl' />
                        <li className='list-none text-sm text-white'>Popular</li>
                    </div>
                </div>
                <div className='border-b-[0.25px] py-6 p-2 border-b-gray-700'>
                    <div className='flex items-center justify-between' onClick={toggleTopics}>
                        <li className='text-sm text-gray-600 list-none'>TOPICS</li>
                        {topicsOpen ? (
                            <RiArrowUpSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                        ) : (
                            <RiArrowDownSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                        )}
                    </div>
                    {topicsOpen && (
                        <div className='pl-3 mt-5 transition-all duration-500 ease-in-out'>
                            <div className='flex justify-between items-center' onClick={toggleInternetCulture}>
                                <div className='flex gap-3 items-center'>
                                    <FaRegFaceMeh className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                    <li className='text-gray-600 text-sm list-none'>Internet Culture <span>(Viral)</span></li>
                                </div>
                                {internetCultureOpen ? (
                                    <RiArrowUpSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                ) : (
                                    <RiArrowDownSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                )}
                            </div>
                            {internetCultureOpen && <div className='ml-5 text-gray-600 text-sm'>Content related to viral internet culture.</div>}
                        </div>
                    )}
                    {topicsOpen && (
                        <div className='pl-3 mt-7 transition-all duration-500 ease-in-out'>
                            <div className='flex justify-between items-center' onClick={toggleGames}>
                                <div className='flex gap-3 items-center'>
                                    <LuGamepad2 className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                    <li className='text-gray-600 text-sm list-none'>Games</li>
                                </div>
                                {gamesOpen ? (
                                    <RiArrowUpSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                ) : (
                                    <RiArrowDownSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                )}
                            </div>
                            {gamesOpen && <div className='ml-5 text-gray-600 text-sm'>Content related to gaming.</div>}
                        </div>
                    )}
                    {topicsOpen && (
                        <div className='pl-3 mt-7 transition-all duration-500 ease-in-out'>
                            <div className='flex justify-between items-center' onClick={toggleQas}>
                                <div className='flex gap-3 items-center'>
                                    <CiSquareInfo className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                    <li className='text-gray-700 text-sm list-none'>Q&As</li>
                                </div>
                                {qasOpen ? (
                                    <RiArrowUpSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                ) : (
                                    <RiArrowDownSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                )}
                            </div>
                            {qasOpen && <div className='ml-5 text-gray-600 text-sm'>Content related to questions and answers.</div>}
                        </div>
                    )}
                    {topicsOpen && (
                        <div className='pl-3 mt-7 transition-all duration-500 ease-in-out'>
                            <div className='flex justify-between items-center' onClick={toggleTechnology}>
                                <div className='flex gap-3 items-center'>
                                    <LiaVectorSquareSolid className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                    <li className='text-gray-700 text-sm list-none'>Technology</li>
                                </div>
                                {technologyOpen ? (
                                    <RiArrowUpSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                ) : (
                                    <RiArrowDownSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                )}
                            </div>
                            {technologyOpen && <div className='ml-5 text-gray-600 text-sm'>Content related to technology.</div>}
                        </div>
                    )}
                    {topicsOpen && (
                        <div className='pl-3 mt-7 transition-all duration-500 ease-in-out'>
                            <div className='flex justify-between items-center' onClick={togglePopCulture}>
                                <div className='flex gap-3 items-center'>
                                    <PiStarLight className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                    <li className='text-gray-700 text-sm list-none'>Pop Culture</li>
                                </div>
                                {popCultureOpen ? (
                                    <RiArrowUpSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                ) : (
                                    <RiArrowDownSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                )}
                            </div>
                            {popCultureOpen && <div className='ml-5 text-gray-600 text-sm'>Content related to pop culture.</div>}
                        </div>
                    )}
                    {topicsOpen && (
                        <div className='pl-3 mt-7 transition-all duration-500 ease-in-out'>
                            <div className='flex justify-between items-center' onClick={toggleMovieTv}>
                                <div className='flex gap-3 items-center'>
                                    <BiMoviePlay className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                    <li className='text-gray-700 text-sm list-none'>Movie & TV</li>
                                </div>
                                {movieTvOpen ? (
                                    <RiArrowUpSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                ) : (
                                    <RiArrowDownSLine className={`${light ? 'text-white' : 'text-black'} text-xl`} />
                                )}
                            </div>
                            {movieTvOpen && <div className='ml-5 text-gray-600 text-sm'>Content related to movies and TV shows.</div>}
                        </div>
                    )}
                </div>
                <div className='py-6 p-2 flex items-center justify-between'>
                    <li className='text-sm text-gray-600 list-none'>RESOURCES</li>
                    <RiArrowDownSLine className={`${light ? 'text-white' : 'text-black'} text-lg`} />
                </div>
            </div>
        </div>
    );
};

export default Sidenav;

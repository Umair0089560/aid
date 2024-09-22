import React from 'react'
import { IoChevronDown } from "react-icons/io5";
const LHeader = () => {

    return (
        <div className='l_header'>
            <div>
                <div className="w-full gap-5 py-5 max-lg:py-3  flex items-center justify-center">

                    <h4 className='font-bold flex items-center'>Quick Donation</h4>

                    <div className="max-lg:hidden flex items-center gap-5">

                        {/* Sadaqah Button */}
                        <button className="h-auto text-black text-xs font-large flex gap-1 items-center">
                            <input
                                type="radio"
                                id="sadaqah"
                                name="donation_type"
                                className="w-5 h-5"
                                value="sadaqah"
                                defaultChecked
                            />
                            <div className="cursor-pointer bg-yellow-400 rounded-full h-6 w-6 font-bold text-xs transition-transform transform-gpu group-hover:scale-110 flex items-center justify-center">
                                S
                            </div>
                            Sadaqah
                        </button>

                        {/* Sadaqah Jariya Button */}
                        <button className="h-auto text-black text-xs font-medium flex gap-1 items-center">
                            <input
                                type="radio"
                                id="sadaqah-jariya"
                                name="donation_type"
                                className="w-5 h-5"
                                value="sadaqah_jariya"
                            />
                            <div className="relative cursor-pointer bg-yellow-400 rounded-full h-6 w-7 font-bold text-xs transition-transform transform-gpu group-hover:scale-110 flex items-center justify-center">
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-default">
                                    SJ
                                </span>
                            </div>
                            Sadaqah Jariya
                        </button>

                        {/* Zakat Button */}
                        <button className="h-auto text-black text-xs font-medium flex gap-1 items-center">
                            <input
                                type="radio"
                                id="zakat"
                                name="donation_type"
                                className="w-5 h-5"
                                value="zakat"
                            />
                            <div className="relative cursor-pointer bg-yellow-400 rounded-full h-6 w-6 font-bold text-xs transition-transform transform-gpu group-hover:scale-110 flex items-center justify-center">
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-default">
                                    Z
                                </span>
                            </div>
                            Zakat
                        </button>
                    </div>

                    <div className="h-auto max-xl:hidden transition font-[500] text-black flex rounded-md bg-white text-ellipsis overflow-hidden">

                        {/* £10 Button */}
                        <div className="border-r border-gray-300 p-3 transition cursor-pointer hover:text-white hover:bg-green-500 hover:bg-opacity-70 hover:border-r-green-500">
                            £10
                        </div>

                        {/* £20 Button */}
                        <div className="border-r border-gray-300 p-3 transition cursor-pointer hover:text-white hover:bg-green-500 hover:bg-opacity-70 hover:border-r-green-500">
                            £20
                        </div>

                        {/* £30 Button (Selected) */}
                        <div className="bg-green-500 text-white p-3 transition cursor-pointer hover:text-white hover:bg-green-500 hover:bg-opacity-70 hover:border-r-green-500">
                            £30
                        </div>

                        {/* £40 Button */}
                        <div className="border-r border-gray-300 p-3 transition cursor-pointer hover:text-white hover:bg-green-500 hover:bg-opacity-70 hover:border-r-green-500">
                            £40
                        </div>

                        {/* £50 Button */}
                        <div className="border-r border-gray-300 p-3 transition cursor-pointer hover:text-white hover:bg-green-500 hover:bg-opacity-70 hover:border-r-green-500">
                            £50
                        </div>
                    </div>

                    <div className="bg-white flex items-center justify-between py-2 px-4 rounded-lg shadow-md">
                        {/* Currency Symbol and Amount Input */}
                        <div className="flex items-center">
                            <span className="text-black font-medium">£</span>
                            <input
                                type="text"
                                value="30"
                                className="text-2xl font-bold text-blue-500 border-none focus:outline-none w-[60px] text-center"
                            />
                        </div>

                        {/* Divider */}
                        <div className="w-[1px] h-[24px] bg-gray-300 mx-3"></div>

                        {/* Currency Selector */}
                        <div className="flex items-center gap-1">
                            <span className="text-black font-medium">GBP</span>
                            <IoChevronDown className='text-black' />
                        </div>
                    </div>

                    <button class="max-lg:w-full w-[210px] font-semibold bg-[#00C98C] py-2 text-black flex items-center justify-center cursor-pointer  rounded-lg  drop-shadow-sm hover:scale-105 transition">DONATE NOW</button>
                </div>
            </div>
        </div>
    )
}

export default LHeader
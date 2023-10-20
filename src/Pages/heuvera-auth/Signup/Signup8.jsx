import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import logo from "../../../images/Heuvera.png"
// import {BsCalendarWeek} from 'react-icons/bs'
import { BsCalendarWeek } from 'react-icons/bs';




export default function WhatDoYouWantToUseUsFor() {
    const [phone, setPhone] = useState("");
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [selectedOption, setSelectedOption] = useState('option1'); // Initialize with a default value
    const [otp, setOtp] = useState("");
    const handleSignUpClick = () => {
        setIsSignedUp(true);
    };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    }

    return (
        <>
            <div className="w-12/12 h-screen flex">
                <div className="w-6/12 h-screen bg-hero">
                    <div className="w-12/12 flex-grow h-screen bg-[#8000FF] opacity-80 flex justify-center">
                        <div className="w-7/12">
                            <h1 className="text-white text-4xl font-bold font-professional pt-28">Heuvera Authentication</h1>
                            <div className="flex gap-0 mt-8">
                                <li className="text-white text-xl" />
                                <h1 className="text-white text-lg"><span className="font-bold">Security First: </span>At Heuvera, the security of your virtual real estate transactions is our top priority.</h1>
                            </div>
                            <div className="flex gap-0 mt-4">
                                <li className="text-white text-xl" />
                                <h1 className="text-white text-lg"><span className="font-bold">Seamless Experience: </span>Our authentication process is designed for a safe and seamless user experience.</h1>
                            </div>
                            <div className="flex gap-0 mt-4">
                                <li className="text-white text-xl" />
                                <h1 className="text-white text-lg"><span className="font-bold">Registration:  </span>Users start by registering and creating an account.</h1>
                            </div>
                            <div className="flex gap-0 mt-4">
                                <li className="text-white text-xl" />
                                <h1 className="text-white text-lg"><span className="font-bold">Identity Verification:  </span>We employ robust identity verification methods to ensure users are who they claim to be.</h1>
                            </div>
                            <div className="flex gap-0 mt-4">
                                <li className="text-white text-xl" />
                                <h1 className="text-white text-lg"><span className="font-bold">Secure Login:   </span>Registered users can sign in securely using their email and password.</h1>
                            </div>
                            <div className="flex gap-0 mt-4">
                                <li className="text-white text-xl" />
                                <h1 className="text-white text-lg"><span className="font-bold">Forgot Password:  </span>Users who forget their password can easily reset it through their registered email.</h1>
                            </div>
                            <div className="flex gap-0 mt-4">
                                <li className="text-white text-xl" />
                                <h1 className="text-white text-lg"><span className="font-bold">Data Security:  </span> All personal information and transactions are encrypted and protected with industry-standard security protocols.</h1>
                            </div>
                            <div className="flex gap-0 mt-4">
                                <li className="text-white text-xl" />
                                <h1 className="text-white text-lg"><span className="font-bold">Support:   </span>For any authentication-related questions or concerns, our support team is ready to assist.</h1>
                            </div>
                            <div className="flex gap-0 mt-4">
                                <li className="text-white text-xl" />
                                <h1 className="text-white text-lg"><span className="font-bold">Trusted Platform:   </span>Choose Heuvera for a secure and trustworthy virtual real estate experience.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section */}
                <div className="w-6/12 h-screen bg-white flex justify-center">
                    <div className="my-60">
                        <div className="w-12/12 flex justify-center mb-4">
                            <img src={logo} className="w-12 h-14" alt="" />
                        </div>
                        <div className="w-12/12">
                            <h1 className="font-bold text-black font-standard text-center text-2xl">
                                What would you use us for?
                            </h1>
                            <h1 className="my-2 text-[#656565] font-standard text-md text-center">
                                Tell us what you would want to use our platform
                                <br></br>for
                            </h1>
                        </div>
                        <div className="w-12/12 mb-5">
                            <label className="flex gap-1 mt-4">
                                <input
                                    type="radio"
                                    value="option1"
                                    checked={selectedOption === 'option1'}
                                    onChange={handleOptionChange}
                                />
                                <h1 className="text-black font-standard text-base">For buying properties</h1>
                            </label>
                            <label className="flex gap-1 mt-4">
                                <input
                                    type="radio"
                                    value="option1"
                                    checked={selectedOption === 'option1'}
                                    onChange={handleOptionChange}
                                />
                                <h1 className="text-black font-standard text-base">Generally for travel purposes</h1>
                            </label>
                            <label className="flex gap-1 mt-4">
                                <input
                                    type="radio"
                                    value="option1"
                                    checked={selectedOption === 'option1'}
                                    onChange={handleOptionChange}
                                />
                                <h1 className="text-black font-standard text-base">Renting or booking stays</h1>
                            </label>
                            <label className="flex gap-1 mt-4">
                                <input
                                    type="radio"
                                    value="option1"
                                    checked={selectedOption === 'option1'}
                                    onChange={handleOptionChange}
                                />
                                <h1 className="text-black font-standard text-base">Connecting with agents</h1>
                            </label>
                            <label className="flex gap-1 mt-4">
                                <input
                                    type="radio"
                                    value="option1"
                                    checked={selectedOption === 'option1'}
                                    onChange={handleOptionChange}
                                />
                                <h1 className="text-black font-standard text-base">To explore properties</h1>
                            </label>
                        </div>
                        <button
                            onClick={handleSignUpClick}
                            className="bg-[#8000FF] w-full h-14 rounded-lg text-white font-standard text-md mt-3.5 mb-7"
                        >
                            Proceed
                        </button>

                    </div>

                </div>
            </div>

        </>
    );
}
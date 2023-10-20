import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import logo from "../../../images/Heuvera.png"
// import {BsCalendarWeek} from 'react-icons/bs'
import { BsCalendarWeek } from 'react-icons/bs';




export default function DateOfBirthPage() {
    const [phone, setPhone] = useState("");
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [otp, setOtp] = useState("");
    const handleSignUpClick = () => {
        setIsSignedUp(true);
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
                            Let’s know who you are
                            </h1>
                            <h1 className="my-2 text-[#656565] font-standard text-md text-center">
                            We collect this information to improve your<br></br>experience
                            </h1>
                        </div>
                        <div className="w-12/12 mb-5">
                            <h1 className="my-2 text-[#656565] font-standard text-md mt-5">Tell us when you were born! </h1>
                            <div className="w-full flex gap-2 px-2 border border rounded-lg h-14">
                                <BsCalendarWeek className="text-2xl my-4"/>
                                <input className="w-full h-12 my-1 rounded-lg"/>
                            </div>
                        </div>
                        <h1 className="text-[#8000FF] underline">Users don't see this information</h1>
                        <div className="w-full flex justify-end">
                        <button
                            onClick={handleSignUpClick}
                            className="bg-[#8000FF] w-36 h-14 rounded-lg text-white font-standard text-md mt-3.5 mb-7"
                        >
                            Next
                        </button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}
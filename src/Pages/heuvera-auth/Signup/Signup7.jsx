import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import logo from "../../../images/Heuvera.png"

export default function CreatePin() {
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
                        <div className="my-40">
                            <div className="w-12/12 flex justify-center mb-4">
                                <img src={logo} className="w-12 h-14" alt="" />
                            </div>
                            <div className="w-12/12">
                                <h1 className="font-bold text-black font-standard text-center text-2xl">
                                Create a Heuvera pin
                                </h1>
                                <h1 className="my-2 text-[#656565] font-standard text-md text-center">
                                This is an optional pin code to secure your<br></br>account further
                                </h1>
                            </div>
                            <div className="w-12/12 flex gap-2 mt-14 mb-5 justify-center">
                                <input
                                    className="border border w-14 h-14 rounded-lg px-4"
                                    placeholder=""
                                    value={otp}
                                    onChange={handleOtpChange}
                                />
                                <input
                                    className="border border w-14 h-14 rounded-lg px-4"
                                    placeholder=""
                                    value={otp}
                                    onChange={handleOtpChange}
                                />
                                <input
                                    className="border border w-14 h-14 rounded-lg px-4"
                                    placeholder=""
                                    value={otp}
                                    onChange={handleOtpChange}
                                />
                                <input
                                    className="border border w-14 h-14 rounded-lg px-4"
                                    placeholder=""
                                    value={otp}
                                    onChange={handleOtpChange}
                                />

                            </div>
                            <div className="w-12/12 flex justify-between mb-6">
                            <h1 className="text-[#8000FF] underline">What does this do?</h1>
                            </div>
                            <button
                                onClick={handleSignUpClick}
                                className="bg-white border border-[#8000FF] w-full h-14 rounded-lg text-[#8000FF] font-standard text-md mt-7 mb-3.5"
                            >
                                Skip
                            </button>
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
    )
}
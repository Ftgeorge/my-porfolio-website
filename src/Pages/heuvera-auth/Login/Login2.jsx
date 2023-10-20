import logo from "../../../images/Heuvera.png"
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function Login2() {
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
            <div className="w-12/12 h-screen bg-white flex justify-center">
                <div className="my-60">
                    <div className="w-12/12 flex justify-center mb-4">
                        <img src={logo} className="w-12 h-14" alt="" />
                    </div>
                    <div className="w-12/12">
                        <h1 className="font-bold text-black font-standard text-center text-2xl">
                        Sure it’s you?
                        </h1>
                        <h1 className="my-2 text-[#656565] font-standard text-md text-center">
                        We’ve sent a unique one-time-password
<br></br>to your mail
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
                        <h1 className="text-gray-700 font-standard">Didn't get the code?</h1>
                        <h1 className="text-gray-700 font-standard">00:50</h1>
                    </div>
                    <button
                        onClick={handleSignUpClick}
                        className="bg-white border border-[#8000FF] w-full h-14 rounded-lg text-[#8000FF] font-standard text-md mt-7 mb-3.5"
                    >
                        Resend
                    </button>
                    <button
                        onClick={handleSignUpClick}
                        className="bg-[#8000FF] w-full h-14 rounded-lg text-white font-standard text-md mt-3.5 mb-7"
                    >
                        Verify
                    </button>


                </div>

            </div>


        </>
    );
}
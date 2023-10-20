import logo from "../../../images/Heuvera.png"
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function Login3() {
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
                        Log in to Heuvera 
                        </h1>
                        <h1 className="my-2 text-[#656565] font-standard text-md text-center">
                        Don’t have an account?<span className="text-[#8000FF]">Create one</span> 
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
                        <h1 className="text-gray-700 font-standard">Login with password</h1>
                        <h1 className="text-[#8000FF] font-standard underline">Forgot password?</h1>
                    </div>
                    <button
                        onClick={handleSignUpClick}
                        className="bg-[#8000FF] w-full h-14 rounded-lg text-white font-standard text-md mt-3.5 mb-7"
                    >
                        Log in
                    </button>


                </div>

            </div>


        </>
    );
}
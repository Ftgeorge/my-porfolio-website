import logo from "../../../images/Heuvera.png"
export default function Login5() {
    return (
        <>
            <div className="w-12/12 h-screen bg-white flex justify-center">
                <div className="my-40">
                    <div className="w-12/12 flex justify-center mb-4">
                        <img src={logo} className="w-12 h-14" alt="" />
                    </div>
                    <div className="w-12/12">
                        <h1 className="mt-5 font-bold text-black font-standard text-center text-2xl">
                            Create a new password
                        </h1>
                        <h1 className="text-black font-standard text-xl text-center mt-2">
                            Create a new password you would remember
                            <br></br>to access Heuvera
                        </h1>
                    </div>
                    <div className="w-12/12">
                        <input
                            className="border border w-full h-14 rounded-lg px-4 mt-4"
                            placeholder="New Password"
                        />
                    </div>
                    <div className="w-12/12 mt-2">
                        <input
                            className="border border w-full h-14 rounded-lg px-4"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <div className="w-12/12 flex justify-between mt-4">
                        <h1 className="text-black font-standard text-md text-center underline font-bold">
                        I remember my password
                        </h1>
                    </div>
                    <button
                        // onClick={handleSignUpClick}
                        className="bg-[#8000FF] w-full h-14 rounded-lg text-white font-standard text-md my-7"
                    >
                        Log in
                    </button>
                </div>
            </div>

        </>
    );
}
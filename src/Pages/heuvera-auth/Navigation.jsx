export default function Navigation (){
    return(
        <>
        {/* Navigation */}
            <div className="bg-white flex justify-between px-4 py-4 shadow shadow-red-600 shadow-lg">
                <h1 className="text-black text-4xl font-bold"><span className="text-red-600">L'</span>ounge</h1>
                <div className="flex">
                    <h1 className="text-lg mx-2.5">Home</h1>
                    <h1 className="text-lg mx-2.5">About</h1>
                    <h1 className="text-lg mx-2.5">Projects</h1>
                    <h1 className="text-lg mx-2.5">Contact</h1>
                </div>
            </div>
            {/* Container */}
            <div className="w-12/12 my-10 py-10"></div>
        </>
    );
}
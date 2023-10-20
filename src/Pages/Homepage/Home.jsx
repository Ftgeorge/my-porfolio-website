import Connectbtn from "../../components/Connect";
import HomeNavigation from "../Navigation/HomeNavigation";
import user from "../Homepage/Images/User.jpg";
import java from "../Homepage/Images/Java.png"
import TypeScript from "../Homepage/Images/TypeScript.png";
import Python from "../Homepage/Images/Python.png"
import SQL from "../Homepage/Images/SQL.png"
import ReactJS from "../Homepage/Images/React.png"
import NodeJs from "../Homepage/Images/NodeJS.png"
import Dart from "../Homepage/Images/Dart.png"
import LinkedIn from "../Homepage/Images/LinkedIn.png"
import Github from "../Homepage/Images/Github.png"
import Gmail from "../Homepage/Images/Gmail.png"
import Twitter from "../Homepage/Images/Twitter.jpg"
import ProjectSection from "../../components/Projectspage";


function Home (){
    return(
        <>
   <HomeNavigation/>
   <section className="">
    <div className="w-12/12 mx-44">
        <div className="flex gap-2 justify-center">
            <div className="w-7/12">
                <div className="mt-52 mx-8">
                <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-50">
                    Hi! I'm George
                </h1>
                <h1 className="text-2xl font-extrabold">
                    FULLSTACK DEVELOPER
                </h1>
                <h1 className="text-gray-600 mt-8 text-xl">
                    I'm a passionate and dedicated programmer with a focus on creating innovative solutions. This website showcases my diverse projects
                    and experiences in web and mobile development, reflecting my journey as a developer and continuous skill enhancement.
                </h1>
                <div className="mt-16">
                    <Connectbtn/>
                </div>
                </div>
            </div>
            <div className="w-5/12 flex justify-center py-28 pb-52">
                <div className="rounded-full w-96 h-96 bg-gray-400 my-12">
                    <img src={user} className="w-96 h-96 rounded-full" alt=""/>
                </div>
            </div>
        </div>
        {/* About */}
    </div>
    <div style={{ backgroundImage: "url(/Background.jpg)",
backgroundRepeat: "no-repeat",
backgroundSize: "cover"}}>
            <h1 className="pt-20 text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-900 text-center text-3xl">About</h1>
            <h1 className="pb-28 text-center text-base text-gray-300">Step inside and get to know the mind behind the code</h1>
            <div className="flex gap-5 px-44 pb-12">``
        <div className="w-6/12">
            <div className="flex gap-10">
            <img src={user} className="w-64 h-64 rounded-2xl" alt=""/>
            <div>
            <h1 className="text-white mt-8 text-3xl text-bold">Fabunmi George Oluwatosin</h1>
        <h1 className="mt-2 text-2xl text-gray-400 text-bold">FULLSTACK DEVELOPER</h1>
        <h1 className="mt-2 text-xl text-bold bg-clip-text text-gray-300">Software Engineer, Computer Scientist, Machine Learning Enthusiast</h1>
        <div className="flex justify-start gap-3 mt-4">
<div className="w-12 h-12 rounded-full border border-gray-300">
<img src={LinkedIn} className="w-6 mx-3 my-2.5"/>
</div>
<div className="w-12 h-12 rounded-full border border-gray-300">
    <img src={Twitter} className="w-9 mx-1.5 my-1.5"/>
</div>
<div className="w-12 h-12 rounded-full border border-gray-300">
<img src={Github} className="w-7 mx-2.5 my-2.5"/>
</div>
<div className="w-12 h-12 rounded-full border border-gray-300">
<img src={Gmail} className="w-6 mx-3 my-3"/>
</div>
            </div>
            </div>
            </div>
            <h1 className="text-gray-400 text-2xl py-8">Skills</h1>
        <div className=" flex flex-wrap gap-4">
            <div className="w-32 h-28 shadow shadow-sm shadow-gray-200 rounded-2xl">
                <img src={ReactJS} className="w-20 mx-6 my-5" alt=""/>
            </div>
            <div className="w-32 h-28 shadow shadow-sm shadow-gray-200 rounded-2xl">
                <img src={java} className="w-20 mx-6 my-3" alt=""/>
            </div>
            <div className="w-32 h-28 shadow shadow-sm shadow-gray-200 rounded-2xl">
                <img src={Python} className="w-20 mx-6 my-5" alt=""/>
            </div>
            <div className="w-32 h-28 shadow shadow-sm shadow-gray-200 rounded-2xl">
                <img src={NodeJs} className="w-20 mx-6 my-5" alt=""/>
            </div>
            <div className="w-32 h-28 shadow shadow-sm shadow-gray-200 rounded-2xl">
                <img src={Dart} className="w-20 mx-6 my-5" alt=""/>
            </div>
            <div className="w-32 h-28 shadow shadow-sm shadow-gray-200 rounded-2xl">
                <img src={SQL} className="w-20 mx-6 my-0" alt=""/>
            </div>
            <div className="w-32 h-28 shadow shadow-sm shadow-gray-200 rounded-2xl">
                <img src={TypeScript} className="w-20 mx-6 my-3" alt=""/>
            </div>
        </div>

        </div>
        <div className="w-6/12 rounded-2xl mb-4 border border-gray-400">
        <h1 className="text-gray-200 p-4">
            Hello there!, I'm Fabunmi George, a passionate and dedicated programmer with a strong background in Fullstack Development, Web Development, and Application Development.
            I began my journey in the world of programming some years back due to curiosity and technological exposure at my earlier ages, I started programming at age 12 with the likes of Java, Html etc. My mentor guided me through difficult times
            and encouraged me to push through during hard times. 
            <br></br><br></br>
            Over the past 3 to 4 years, I have honed my skills in a variety of programming languages, frameworks and tools. I love exploring 
            new technologies and always enjoying taking on challenges that push the boundaries of my knowledge. 
            <br></br>
            <br></br>
            Throughtout my career, I have had the priviledges of working on some remarkable projects that have left a positive impact. Projects like Heuvera and Ntracker have not only allowed me to grow as a developer
            but have also reinforced my commitment to excellence in every project I undertake.
            <br></br>
            <br></br>
            Beyond coding, I am truly passionate about the power of technology to change lives. I'm particularly interested in machine langauge. I'm fascinated by the field's ability to develop algorithms and models that can solve 
            real-world problems and enhance various aspects of daily living. I see machine learning as a powerful tool to improve efficiency, provide personalized experiences, and revolutionalize industries, this makes me eager to explore
            its applications and contribute to creating a better future through technology.
            <br></br>
            <br></br>
            When I'm not immersed in coding, you'll often find me engaged in various sports or video games, enjoying an active and entertaining lifestyle.
        </h1>
        </div>
        
        </div>
        <h1 className="font-cursive text-gray-400 text-center text-5xl pb-12">'Programming is not merely code; it's an art that transforms ideas into solutions, shaping a better world.'</h1>
        </div>
        <div className="bg-white">
            <h1 className="pt-20 text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-900 text-center text-3xl">Projects</h1>
            <h1 className="pb-28 text-center text-base text-gray-500">Here are a selection of my latest projects</h1>
            <div className="mx-44">
                <ProjectSection/>
            </div>
        </div>
   </section>
        </>
    )
}
export default Home;
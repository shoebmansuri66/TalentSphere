import { Mail } from "lucide-react";
import { useState,useEffect  } from "react";

const data = [
    {
        title: "Great quality!",
        text: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite... The Mitech team works really hard to ensure high level of quality",
        name: "Gabriel Nolan",
        role: "Consultant",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        title: "Awesome Design",
        text: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!",
        name: "Ashley Jenkins",
        role: "Designer",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        title: "Perfect Service",
        text: "They helped me find the best job quickly. Highly recommended!",
        name: "John Wells",
        role: "Developer",
        img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
];
const candidates = [
    { id: 1, name: 'Candidate 1', imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Candidate 2', imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'Candidate 3', imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { id: 4, name: 'Candidate 4', imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg' },
];

 

export default function Home() {
     const [active, setActive] = useState(0);
     useEffect(() => {
    // 3 seconds ka interval set kiya hai
    const interval = setInterval(() => {
      setActive((prevIndex) => 
        // Agar last item par pahunch gaya toh wapas 0 par aa jaye (Loop logic)
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    // Jab component unmount ho toh interval ko saaf (clear) karna zaroori hai
    return () => clearInterval(interval);
  }, [data.length]); // data.length par depend karta hai
    return (
        <>
            <div className="lg:px-[90px] md:px-10 px-6 py-16 bg-blue-100">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* LEFT */}
                    <div className="w-full lg:max-w-[600px]">

                        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] leading-tight font-semibold text-gray-900 mb-6">
                            There Are <span className="text-blue-600 font-bold">93,178</span> Postings Here For you!
                        </h1>

                        <p className="text-gray-500 text-[14px] md:text-[15px] mb-6">
                            Find Jobs, Employment & Career Opportunities
                        </p>

                        {/* SEARCH BAR */}
                        <div className="w-full max-w-[730px] h-auto md:h-[70px] bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center overflow-hidden px-2">

                            <input
                                placeholder="Job title, keywords, or company"
                                className="w-full md:flex-1 h-[50px] md:h-full px-5 text-[14px] outline-none border-b md:border-b-0 md:border-r"
                            />

                            <input
                                placeholder="City or postcode"
                                className="w-full md:flex-1 h-[50px] md:h-full px-5 text-[14px] outline-none"
                            />

                            <button className="bg-blue-600 text-white px-8 h-[50px] md:h-[50px] text-[14px] font-medium rounded-md md:ml-2 mt-2 md:mt-0 hover:bg-blue-700 transition w-full md:w-auto">
                                Find Jobs
                            </button>

                        </div>

                        <p className="text-[13px] text-gray-500 mt-4">
                            <span className="font-medium text-gray-700">Popular Searches :</span>{" "}
                            Designer, Developer, Web, IOS, PHP, Senior, Engineer
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-1/2 relative flex justify-center">

                        <img
                            src="banner-i.png"
                            alt=""
                            className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-auto object-contain"
                        />


                        {/* CARD 1 */}
                        <div className="absolute top-[40px] left-[-25px]  bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-1">
                            <div className="w-7 h-6 bg-orange-100 rounded-lg"><Mail/></div>
                            <div>
                                <p className="text-[13px] font-medium">Work Inquiry From</p>
                                <p className="text-[12px] text-gray-500">Ali Tufan</p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="absolute top-[80px] right-[10px] bg-white shadow-md rounded-lg px-4 py-3">
                            <p className="text-[13px] font-semibold mb-2">10k+ Candidates</p>
                            <div className="flex -space-x-2">
                                <div className="w-7 h-7 bg-gray-300 rounded-full border-2 border-white"><img src="candidate-1.webp" alt="" /></div>
                                <div className="w-7 h-7 bg-gray-400 rounded-full border-2 border-white"><img src="candidate-2.webp" alt="" /></div>
                                <div className="w-7 h-7 bg-gray-500 rounded-full border-2 border-white"><img src="candidate-3.webp" className="rounded-full" alt="" /></div>
                                <div className="w-7 h-7 bg-gray-600 rounded-full border-2 border-white"><img src="candidate-4.webp" className="rounded-full" alt="" /></div>
                                <div className="w-7 h-7 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-[10px]">
                                    +
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="absolute bottom-[120px] right-[20px] bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-3">
                            <div className="w-9 h-9 bg-red-100 rounded-lg"></div>
                            <div>
                                <p className="text-[13px] font-semibold">Creative Agency</p>
                                <p className="text-[11px] text-gray-500">Startup</p>
                            </div>
                            <div className="ml-2 text-red-400 text-sm">✔</div>
                        </div>

                        {/* CARD 4 */}
                        <div className="absolute bottom-[30px] left-[60px] bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-3">
                            <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center text-sm">
                                ⬆️
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold">Upload Your CV</p>
                                <p className="text-[11px] text-gray-500">It only takes a few seconds</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-100% h-150 border border-gray-300 flex flex-col justify-center items-center">
                <div>
                    <h1 className="flex justify-center w-100% text-2xl pt-20">Popular job Categaries</h1>
                    <h1 className="flex justify-center w-100% text-xs p-3">2020 jobs live - 293 added today.</h1>
                </div>
                <div className="flex flex">
                    <div className="w-70 h-18 m-10 p-3 flex flex-row gap-3 justify-center align-center  bg-gray-100 ">
                        <i className="fa-solid fa-coins text-blue-500 bg-white border h-9  m-1 text-3xl bg-gray-100"></i>
                        <div>
                            <p className="text-black-  hover: text-blue-700">Accounting / Finance</p>
                            <p className="text-xs">(2 open positions)</p>
                        </div>
                    </div>

                    <div className="w-70 h-18 m-10 p-3 flex flex-row gap-3 justify-center align-center  bg-gray-100 ">
                        <i className=" fa-solid fa-bullhorn text-blue-500 bg-white border h-9  m-1 text-3xl bg-gray-100"></i>
                        <div>
                            <p className="text-black-  hover: text-blue-700">Marketing</p>
                            <p className="text-xs">(86 open positions)</p>
                        </div>
                    </div>


                    <div className="w-70 h-18 m-10 p-3 flex flex-row gap-3 justify-center align-center  bg-gray-100 ">
                        <i className="fa-solid fa-compass-drafting text-blue-500 bg-white border h-9  m-1 text-3xl bg-gray-100"></i>
                        <div>
                            <p className="text-black-  hover: text-blue-700">Design</p>
                            <p className="text-xs">(43 open positions)</p>
                        </div>
                    </div>
                </div>


                <div className="flex flex">
                    <div className="w-70 h-18 m-10 p-3 flex flex-row gap-3 justify-center align-center  bg-gray-100 ">
                        <i className="fa-solid fa-laptop-code text-blue-500 bg-white border h-9  m-1 text-3xl bg-gray-100"></i>
                        <div>
                            <p className="text-black-  hover: text-blue-700">Development</p>
                            <p className="text-xs">(12 open positions)</p>
                        </div>
                    </div>
                    <div className="w-70 h-18 m-10 p-3 flex flex-row gap-3 justify-center align-center  bg-gray-100 ">
                        <i className="fa-solid fa-arrow-up-from-ground-water text-blue-500 bg-white border h-9  m-1 text-3xl bg-gray-100"></i>
                        <div>
                            <p className="text-black-  hover: text-blue-700">Human Resource</p>
                            <p className="text-xs">(55 open positions)</p>
                        </div>
                    </div>
                    <div className="w-70 h-18 m-10 p-3 flex flex-row gap-3 justify-center align-center  bg-gray-100 ">
                        <i className="fa-solid fa-rocket text-blue-500 bg-white border h-9  m-1 text-3xl bg-gray-100"></i>
                        <div>
                            <p className="text-black-  hover: text-blue-700">Automotive Jobs</p>
                            <p className="text-xs">(2 open positions)</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex">
                    <div className="w-70 h-18 m-10 p-3 flex flex-row gap-3 justify-center align-center  bg-gray-100 ">
                        <i className=" fa-solid fa-bullhorn text-blue-500 bg-white border h-9  m-1 text-3xl bg-gray-100"></i>
                        <div>
                            <p className="text-black-  hover: text-blue-700">Customer Service</p>
                            <p className="text-xs">(2 open positions)</p>
                        </div>
                    </div>
                    <div className="w-70 h-18 m-10 p-3 flex flex-row gap-3 justify-center align-center  bg-gray-100 ">
                        <i className="fa-solid fa-briefcase-medical text-blue-500 bg-white border h-9  m-1 text-3xl bg-gray-100"></i>
                        <div>
                            <p className="text-black-  hover: text-blue-700">Health and Care</p>
                            <p className="text-xs">(25 open positions)</p>
                        </div>
                    </div>
                    <div className="w-70 h-18 m-10 p-3 flex flex-row gap-3 justify-center align-center  bg-gray-100 ">
                        <i className="fa-solid fa-car-side text-blue-500 bg-white border h-9  m-1 text-3xl bg-gray-100"></i>
                        <div>
                            <p className="text-black-  hover: text-blue-700">Project Management</p>
                            <p className="text-xs">(92 open positions)</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
               
                <div className="w-139 h-35  m-10 px-5 pt-5 flex flex-row gap-3 justify-start align-center  bg-gray-100 ">
                   
                    <div>
                        <p className="text-black  hover: text-blue-700">Software Engineer (Android), Libraries</p>
                      

                    </div>
                </div>

              
            </div> */}
            <div className="w-100% h-200 m-2 p-4 border border-gray-300">
                <div>
                    <h1 className="flex justify-center w-100% text-2xl pt-15">Featured Jobs </h1>
                    <h1 className="flex justify-center w-100% text-xs p-3">Know your worth and find the job that qualify your life</h1>
                </div>
                <div className="flex justify-evenly">
                    <div className="w-[500px] mt-20  rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between ">

                        {/* LEFT SIDE */}
                        <div className="flex gap-4">

                            {/* Logo */}
                            <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                                <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-1.webp" alt="" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="font-semibold text-sm">
                                    Software Engineer (Android), Libraries
                                </h2>

                                {/* Info Row */}
                                <div className="text-xs">
                                    <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
                                    <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
                                    <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
                                    <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

                                </div>

                                {/* Tags */}
                                <div className="flex gap-3 mt-3">
                                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                                        Full Time
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
                                        Private
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
                                        Urgent
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bookmark Icon */}
                        <div>
                            <i className="fa-regular fa-bookmark"></i>
                        </div>

                    </div>
                    <div className="w-[500px] mt-20 rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start hover:border border-gray-200">

                        {/* LEFT SIDE */}
                        <div className="flex gap-4">

                            {/* Logo */}
                            <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                                <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-2.webp" alt="" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="font-semibold text-sm">
                                    Software Engineer (Android), Libraries
                                </h2>

                                {/* Info Row */}
                                <div className="text-xs">
                                    <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
                                    <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
                                    <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
                                    <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

                                </div>

                                {/* Tags */}
                                <div className="flex gap-3 mt-3">
                                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                                        Full Time
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
                                        Private
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
                                        Urgent
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bookmark Icon */}
                        <div>
                            <i className="fa-regular fa-bookmark"></i>
                        </div>

                    </div>

                </div>
                <div className="flex justify-evenly">
                    <div className="w-[500px] mt-20 h ml-1 mr-2 rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

                        {/* LEFT SIDE */}
                        <div className="flex gap-4">

                            {/* Logo */}
                            <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                                <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-4.webp" alt="" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="font-semibold text-sm">
                                    Software Engineer (Android), Libraries
                                </h2>

                                {/* Info Row */}
                                <div className="text-xs">
                                    <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
                                    <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
                                    <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
                                    <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

                                </div>

                                {/* Tags */}
                                <div className="flex gap-3 mt-3">
                                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                                        Full Time
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
                                        Private
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
                                        Urgent
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bookmark Icon */}
                        <div>
                            <i className="fa-regular fa-bookmark"></i>
                        </div>

                    </div>
                    <div className="w-[500px] mt-20  rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start hover:border border-gray-200">

                        {/* LEFT SIDE */}
                        <div className="flex gap-4">

                            {/* Logo */}
                            <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                                <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-5.webp" alt="" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="font-semibold text-sm">
                                    Software Engineer (Android), Libraries
                                </h2>

                                {/* Info Row */}
                                <div className="text-xs">
                                    <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
                                    <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
                                    <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
                                    <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

                                </div>

                                {/* Tags */}
                                <div className="flex gap-3 mt-3">
                                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                                        Full Time
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
                                        Private
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
                                        Urgent
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bookmark Icon */}
                        <div>
                            <i className="fa-regular fa-bookmark"></i>
                        </div>

                    </div>

                </div>
                <div className="flex justify-evenly">
                    <div className="w-[500px] mt-20  rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start hover:border border-gray-200">

                        {/* LEFT SIDE */}
                        <div className="flex gap-4">

                            {/* Logo */}
                            <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                                <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-1.webp" alt="" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="font-semibold text-sm">
                                    Software Engineer (Android), Libraries
                                </h2>

                                {/* Info Row */}
                                <div className="text-xs">
                                    <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
                                    <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
                                    <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
                                    <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

                                </div>

                                {/* Tags */}
                                <div className="flex gap-3 mt-3">
                                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                                        Full Time
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
                                        Private
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
                                        Urgent
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bookmark Icon */}
                        <div>
                            <i className="fa-regular fa-bookmark"></i>
                        </div>

                    </div>
                    <div className="w-[500px] mt-20  rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start hover:border border-gray-200">

                        {/* LEFT SIDE */}
                        <div className="flex gap-4">

                            {/* Logo */}
                            <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                                <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-2.webp" alt="" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="font-semibold text-sm">
                                    Software Engineer (Android), Libraries
                                </h2>

                                {/* Info Row */}
                                <div className="text-xs">
                                    <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
                                    <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
                                    <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
                                    <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

                                </div>

                                {/* Tags */}
                                <div className="flex gap-3 mt-3">
                                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                                        Full Time
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
                                        Private
                                    </span>
                                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
                                        Urgent
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bookmark Icon */}
                        <div>
                            <i className="fa-regular fa-bookmark"></i>
                        </div>

                    </div>

                </div>
                <div className="p-10 flex justify-center">
                    <button className="h-10 w-40 text-sm bg-blue-700 text-white hover:bg-blue-800">Load more Listing</button>
                </div>
            </div>
            <div>
                <div className="bg-gray-100 py-20">
                    {/* Heading */}
                    
                    <h1 className="text-center text-3xl font-semibold">
                        Testimonials From Our Customers
                    </h1>
                    <p className="text-center text-gray-500 mt-2">
                        Lorem ipsum dolor sit amet elit
                    </p>

                    {/* Cards */}
                    <div className="flex justify-center items-center gap-6 mt-10">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActive(index)}
                                className={`w-[350px] p-6 rounded-xl transition-all duration-300 cursor-pointer
                                   ${active === index
                                        ? "bg-white shadow-xl scale-105"
                                        : "bg-gray-200 opacity-50"
                                    }`}
                            >
                                <h3 className="text-blue-600 font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm">{item.text}</p>

                                {/* User */}
                                <div className="flex items-center gap-3 mt-6">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{item.name}</h4>
                                        <p className="text-xs text-gray-500">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 gap-2">
                        {data.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setActive(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer ${active === index ? "bg-black" : "bg-gray-400"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="w-full h-50  border border-gray-300 flex row">
                <img className="h-10 mx-10 mt-20 " src="img10.webp" alt="logo" />
                <img className="h-10 mx-10 mt-20" src="img11.webp" alt="logo" />
                <img className="h-10 mx-10 mt-20" src="img10.webp" alt="logo" />
                <img className="h-10 mx-10 mt-20" src="img11.webp" alt="logo" />
                <img className="h-10 mx-10 mt-20" src="img12.webp" alt="logo" />
                <img className="h-10 mx-10 mt-20" src="img13.webp" alt="logo" />
            </div>
            <div className="w-full h-250 flex flex-col border border-gray-300">
                <div className=" px-30 pt-20 pb-70  flex row gap-10">
                    <img className="w-120" src="img14.webp" alt="logo" />
                    <div>
                        <h1 className="text-4xl pl-5 font-bold ">Millions of Jobs. Find the one that suits you.</h1>
                        <p className="h-30 w-80 text-xs mt-5 ml-5">Search all the open positions on the web. Get your own  personalized salary estimate.
                            Read reviews on over 600,000 companies worldwide.</p>

                        <span className="flex row">
                            <i className="fa-solid fa-check text-xs"></i><p className="text-xs ml-6 mb-7">Bring to the table win-win survival</p>
                        </span>
                        <span className="flex row">
                            <i className="fa-solid fa-check text-xs"></i><p className="text-xs ml-6 mb-7">Capitalize on low hanging fruit to identify</p>
                        </span>
                        <span className="flex row">
                            <i className="fa-solid fa-check text-xs"></i><p className="text-xs ml-6 mb-7">But I must explain to you how all this</p>
                        </span>
                        <div>
                            <button className="h-10 w-30 text-white bg-blue-700 border border rounded-full">Get started</button>
                        </div>
                    </div>
                </div>
                <div className="lg:px-[90px] px-6 py-20 -mt-40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-10">

                        <div>
                            <h2 className="text-5xl font-bold">4M</h2>
                            <p className="text-gray-500 mt-2">
                                4 million daily active users
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold">12k</h2>
                            <p className="text-gray-500 mt-2">
                                Over 12k open job positions
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold">20M</h2>
                            <p className="text-gray-500 mt-2">
                                Over 20 million stories shared
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}
import React from 'react';
import {
    MapPin, PhoneCallIcon, Clock, Bookmark,
    Play, Mail
} from 'lucide-react';
import { Outlet } from "react-router-dom";

export default function Overview1() {
    const userData = {
        name: "udemy", // Image ke text se match karne ke liye change kiya
        location: "London, UK",
        role: "Accounting / Finance",
        Phonenumber: "123 456 7890",
        memberSince: "info@udemy.com",
        tags: ["Open Jobs – 15"],
        profileImg: "company-1.webp"
    };

    // Sidebar details array
    const details = [
        { label: "Primary industry:", value: "Software" },
        { label: "Company size:", value: "501-1,000" },
        { label: "Founded in:", value: "2011" },
        { label: "Phone:", value: "123 456 7890" },
        { label: "Email:", value: "info@udemy.com" },
        { label: "Location:", value: "London, UK" },
    ];



    return (
        <div className="w-full max-w-6xl mx-auto p-6 space-y-10">
            <Outlet />

            {/* --- SECTION 1: HEADER CARD (Aapka Purana Code) --- */}
            <div className="w-full p-6 bg-gradient-to-r from-[#f8faff] to-[#f0f4ff] rounded-2xl border border-blue-50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className=" w-full h-50 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                    <div className="relative">
                        <img
                            src={userData.profileImg || "https://via.placeholder.com/100"}
                            alt={userData.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                        />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">{userData.name}</h1>
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-y-2 gap-x-5 text-sm text-gray-600 font-medium">
                            <span className="text-blue-600">{userData.role}</span>
                            <span className="flex items-center gap-1"><MapPin size={16} className="text-gray-400" /> {userData.location}</span>
                            <span className="flex items-center gap-1"><PhoneCallIcon size={16} className="text-gray-400" /> {userData.Phonenumber}</span>
                            <span className="flex items-center gap-1"><Mail size={16} className="text-gray-400" />  {userData.memberSince}</span>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                            {userData.tags.map((tag, index) => (
                                <span key={index} className="px-4 py-1 bg-[#e8efff] text-blue-600 text-xs font-bold rounded-lg uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => alert('Downloading CV...')} className="px-8 py-3 bg-[#1a68d1] h-15 w-50 text-sm  text-white font-semibold rounded-xl hover:bg-blue-700 transition-all">Private message</button>
                    <button className="p-3 bg-white border border-gray-200 text-blue-600 rounded-xl hover:bg-blue-50 shadow-sm"><Bookmark size={24} /></button>
                </div>
            </div>

            {/* --- SECTION 2: NEW ABOUT & SIDEBAR (Image se match karta hua) --- */}
            <div className="grid grid-cols-2 md:grid-cols-[1.8fr,1fr] gap-90">

                {/* Left Side: About & Video */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Candidates About</h2>

                    {/* Video Placeholder */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md group w-170">

                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <button className="w-16 h-16 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <Play fill="white" size={28} className="ml-1" />
                            </button>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed w-170 text-sm">
                        Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat.
                        Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie.
                        Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-8 w-170 text-sm">
                        Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est.
                        Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus.
                        Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar.
                    </p>
                </div>

                {/* Right Side: Information Sidebar */}
                <div className="w-[400px] bg-[#F5F7FC] rounded-2xl p-8 shadow-sm">
                    {/* Details List */}
                    <div className="space-y-7 mb-8">
                        {details.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span className="text-gray-800 font-medium text-[15px]">{item.label}</span>
                                <span className="text-gray-500 text-[15px]">{item.value}</span>
                            </div>
                        ))}

                        {/* Social Media Row */}
                        <div className="flex justify-between items-center">
                            <span className="text-gray-800 font-medium text-[15px]">Social media:</span>
                            <div className="flex gap-4 text-gray-600">
                                <a href="#" className="hover:text-blue-600 transition-colors"><i className="fa-brands fa-facebook-f text-sm"></i></a>
                                <a href="#" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-twitter text-sm"></i></a>
                                <a href="#" className="hover:text-pink-500 transition-colors"><i className="fa-brands fa-instagram text-sm"></i></a>
                                <a href="#" className="hover:text-blue-800 transition-colors"><i className="fa-brands fa-linkedin-in text-sm"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Website Button */}
                    <a
                        href="https://www.udemy.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full text-center bg-[#D6E2F5] hover:bg-[#c5d6f0] text-[#1967D2] font-medium py-4 rounded-xl transition-all"
                    >
                        www.udemy.com
                    </a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-10 bg-white flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                    {/* Description Text */}


                    {/* Image Gallery Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <img src="employers-single-1.webp" alt="work" className="w-full h-40 object-cover rounded-xl" />
                        <img src="employers-single-2.webp" alt="work" className="w-full h-40 object-cover rounded-xl" />
                        <img src="employers-single-3.webp" alt="work" className="w-full h-40 object-cover rounded-xl" />
                        <img src="employers-single-4.png" alt="work" className="w-full h-40 object-cover rounded-xl" />
                    </div>
                    <div className="w-full mt-5">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Moody’s Corporation, often referred to as Moody’s, is an American business and
                            financial services company. It is the holding company for Moody’s Investors
                            Service (MIS), an American credit rating agency, and Moody’s Analytics (MA),
                            an American provider of financial analysis software and services.
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed mt-4">
                            Moody’s was founded by John Moody in 1909 to produce manuals of statistics
                            related to stocks and bonds and bond ratings. Moody’s was acquired by
                            Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off Moody’s
                            Corporation as a separate company that was listed on the NYSE under MCO.
                            In 2007, Moody’s Corporation was split into two operating divisions,
                            Moody’s Investors Service, the rating agency, and Moody’s Analytics.
                        </p>
                    </div>
                </div>

                {/* LEFT CONTENT AREA */}

                {/* RIGHT SIDEBAR */}
                <div className="w-full md:w-1/3 space-y-6">

                    <div className="max-w-7xl mx-auto p-8 bg-[#F5F7FC] rounded-2xl">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Job Location</h2>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* RIGHT SIDE: GOOGLE MAP BOX */}
                            <div className="w-full md:w-1/1 h-[300px] rounded-xl overflow-hidden shadow-sm relative border border-gray-100">
                                {/* Iframe for the Map */}
                                <iframe
                                    title="Job Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937611493!2d-73.98731968459418!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className='pl-5'>
                    <h1 className='text-2xl font-bold'>3 Other Jobs avaiable</h1>
                    <p className='text-xs pt-2'>2020 jobs live - 293 added today.</p>
                </div>
                <div className="w-[550px] h-25 mt-10 pt-5 rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between ">

                    {/* LEFT SIDE */}
                    <div className="flex gap-4">

                        {/* Logo */}
                        <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                            <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="company-1.webp" alt="" />
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
                        </div>
                    </div>

                    <div>
                        <i className="fa-regular fa-bookmark"></i>
                    </div>

                </div>
                <div className="w-[550px] h-25 mt-10 pt-5 ml-1 mr-1rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

                    {/* LEFT SIDE */}
                    <div className="flex gap-4">

                        {/* Logo */}
                        <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                            <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="company-2.webp" alt="" />
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


                        </div>
                    </div>

                    {/* Bookmark Icon */}
                    <div>
                        <i className="fa-regular fa-bookmark"></i>
                    </div>

                </div>

            </div>
            <div className="flex flex-col">
                <div className="w-[550px] h-25 mt-10 pt-5 ml-1 mr-2 rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

                    {/* LEFT SIDE */}
                    <div className="flex gap-4">

                        {/* Logo */}
                        <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                            <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="company-3.webp" alt="" />
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

                        </div>
                    </div>

                    {/* Bookmark Icon */}
                    <div>
                        <i className="fa-regular fa-bookmark"></i>
                    </div>

                </div>
            </div>

        </div>
    );
}


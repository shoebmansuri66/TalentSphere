import React from 'react';
import {
    MapPin, DollarSign, Clock, Bookmark,
    Play, CalendarDays, Hourglass,
    Wallet, UserRound, Languages, GraduationCap
} from 'lucide-react';
import { Outlet } from "react-router-dom";

function Overview1() {
    const userData = {
        name: "Nicole Wells", // Image ke text se match karne ke liye change kiya
        role: "UI Designer",
        location: "London, UK",
        rate: 99,
        memberSince: "Aug 19, 2020",
        tags: ["App", "Design", "Digital"],
        profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    };

    // Sidebar details array
    const candidateDetails = [
        { icon: CalendarDays, label: "Experience:", value: "0-2 Years" },
        { icon: Hourglass, label: "Age:", value: "28-33 Years" },
        { icon: Wallet, label: "Current Salary:", value: "11K - 15K" },
        { icon: Wallet, label: "Expected Salary:", value: "26K - 30K" },
        { icon: UserRound, label: "Gender:", value: "Female" },
        { icon: Languages, label: "Language:", value: "English, German, Spanish" },
        { icon: GraduationCap, label: "Education Level:", value: "Master Degree" },
    ];
    const skills = ["app", "administrative", "android", "wordpress", "design", "react"];

    const education = [
        {
            initial: "M",
            title: "Bachelors in Fine Arts",
            college: "Modern College",
            duration: "2012 - 2014",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            color: "text-red-500",
            bg: "bg-red-50",
        },
        {
            initial: "H",
            title: "Computer Science",
            college: "Harvard University",
            duration: "2008 - 2012",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            color: "text-red-500",
            bg: "bg-red-50",
        },
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
                            <span className="flex items-center gap-1"><DollarSign size={16} className="text-gray-400" /> ${userData.rate} / hour</span>
                            <span className="flex items-center gap-1"><Clock size={16} className="text-gray-400" /> Member Since, {userData.memberSince}</span>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                            {userData.tags.map((tag, index) => (
                                <span key={index} className="px-4 py-1 bg-[#e8efff] text-blue-600 text-xs font-bold rounded-lg uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => alert('Downloading CV...')} className="px-8 py-3 bg-[#1a68d1] h-15 w-40 text-sm  text-white font-semibold rounded-xl hover:bg-blue-700 transition-all">Download CV</button>
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
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                            alt="Candidates working"
                        />
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
                <div className=" w-90  bg-[#f8faff] p-8 rounded-3xl border border-gray-100 space-y-6 h-170 shadow-sm" >
                    {candidateDetails.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                            <div className="p-2 bg-white rounded-lg shadow-sm text-blue-500">
                                <item.icon size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">{item.label}</h4>
                                <p className="text-sm text-gray-500">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-10 bg-white flex flex-col md:flex-row gap-8">

                {/* LEFT CONTENT AREA */}
                <div className="w-full md:w-2/3">
                    {/* Description Text */}


                    {/* Image Gallery Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <img src="employers-single-1.webp" alt="work" className="w-full h-40 object-cover rounded-xl" />
                        <img src="employers-single-2.webp" alt="work" className="w-full h-40 object-cover rounded-xl" />
                        <img src="employers-single-3.webp" alt="work" className="w-full h-40 object-cover rounded-xl" />
                        <img src="employers-single-4.png" alt="work" className="w-full h-40 object-cover rounded-xl" />
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="w-full md:w-1/3 space-y-6">

                    {/* Social Media Box */}
                    <div className="bg-[#F5F7FC] p-6 rounded-xl flex justify-between items-center">
                        <h3 className="font-bold text-gray-800">Social media</h3>
                        <div className="flex gap-4 text-gray-600">
                            <a href="#" className="hover:text-blue-600"><i className="fa-brands fa-facebook-f text-sm"></i></a>
                            <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-twitter text-sm"></i></a>
                            <a href="#" className="hover:text-pink-500"><i className="fa-brands fa-instagram text-sm"></i></a>
                            <a href="#" className="hover:text-blue-800"><i className="fa-brands fa-linkedin-in text-sm"></i></a>
                        </div>
                    </div>

                    {/* Professional Skills Box */}
                    <div className="bg-[#F5F7FC] p-8 rounded-xl">
                        <h3 className="font-bold text-gray-800 mb-6">Professional Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-white px-4 py-2 rounded-lg text-gray-500 text-xs hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-7xl mx- pr-10 flex flex-col md:flex-row gap-12 bg-white">

                {/* LEFT SECTION: EDUCATION TIMELINE */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-lg font-bold text-gray-800 mb-8">Education</h2>

                    <div className="relative border-l border-dashed border-red-200 ml-4 space-y-12">
                        {education.map((item, index) => (
                            <div key={index} className="relative pl-10">
                                {/* Timeline Icon/Circle */}
                                <div className={`absolute -left-[19px] top-0 w-9 h-9 rounded-full ${item.bg} ${item.color} flex items-center justify-center text-sm font-medium border border-white shadow-sm`}>
                                    {item.initial}
                                </div>

                                {/* Content */}
                                <div className="flex items-center gap-4 mb-2">
                                    <h3 className="text-[15px] font-bold text-gray-800">{item.title}</h3>
                                    <span className="bg-red-50 text-red-500 px-4 py-1 rounded-full text-[11px] font-medium">
                                        {item.duration}
                                    </span>
                                </div>
                                <h4 className="text-red-500 text-sm mb-4">{item.college}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SECTION: CONTACT FORM */}
                <div className="w-full md:w-1/3">
                    <div className="bg-[#F5F7FC] p-8 rounded-2xl shadow-sm">
                        <h2 className="text-lg font-bold text-gray-800 mb-6">Contact Us</h2>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-4 rounded-xl border border-gray-100 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-4 rounded-xl border border-gray-100 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows="5"
                                    className="w-full p-4 rounded-xl border border-gray-100 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                                ></textarea>
                            </div>
                            <button className="w-full bg-[#1967D2] hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-all shadow-md">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-800 mb-8">Work & Experience</h2>

                <div className="relative border-l border-dashed border-blue-200 ml-4 space-y-12">
                    {/* Item 1 */}
                    <div className="relative pl-10">
                        <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-medium border border-white shadow-sm">
                            S
                        </div>
                        <div className="flex items-center gap-4 mb-1">
                            <h3 className="text-[15px] font-bold text-gray-800">Product Designer</h3>
                            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[11px] font-medium">
                                2008 - 201214
                            </span>
                        </div>
                        <h4 className="text-blue-600 text-sm mb-4">Spotify Inc.</h4>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-10">
                        <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-medium border border-white shadow-sm">
                            D
                        </div>
                        <div className="flex items-center gap-4 mb-1">
                            <h3 className="text-[15px] font-bold text-gray-800">Sr UX Engineer</h3>
                            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[11px] font-medium">
                                2012 - 2014
                            </span>
                        </div>
                        <h4 className="text-blue-600 text-sm mb-4">Dropbox Inc.</h4>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>
                </div>
            </div>

            {/* AWARDS SECTION */}
            <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-800 mb-8">Awards</h2>

                <div className="relative border-l border-dashed border-orange-200 ml-4 space-y-12">
                    {/* Item 1 */}
                    <div className="relative pl-10">
                        <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-sm font-medium border border-white shadow-sm">
                            E
                        </div>
                        <div className="flex items-center gap-4 mb-1">
                            <h3 className="text-[15px] font-bold text-gray-800">Perfect Attendance Programs</h3>
                            <span className="bg-orange-50 text-orange-400 px-4 py-1 rounded-full text-[11px] font-medium">
                                2008 - 2014
                            </span>
                        </div>
                        <h4 className="text-orange-400 text-sm mb-4">Software Algorithm</h4>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-10">
                        <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-sm font-medium border border-white shadow-sm">
                            f
                        </div>
                        <div className="flex items-center gap-4 mb-1">
                            <h3 className="text-[15px] font-bold text-gray-800">Top Performer Recognition</h3>
                            <span className="bg-orange-50 text-orange-400 px-4 py-1 rounded-full text-[11px] font-medium">
                                2012 - 2014
                            </span>
                        </div>
                        <h4 className="text-orange-400 text-sm mb-4">Web Application</h4>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview1;


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
        { icon: CalendarDays, label: "Date Posted:", value: "Posted 1 hours ago" },
        { icon: Hourglass, label: "Expiration date:", value: "April 06, 2021" },
        { icon: Hourglass, label: "Location:", value: "London, UK" },
        { icon: UserRound, label: "Job Title:", value: "Designer" },
        { icon: Wallet, label: "Hours:", value: "50h / week" },
        { icon: Languages, label: "Rate:", value: "$15 - $25 / hour" },
        { icon: Wallet, label: "Expected Salary:", value: "$35k - $45k" },
    ];
    const skills = ["app", "administrative", "android", "wordpress", "design", "react"];
    const details = [
        { label: "Primary industry:", value: "Software" },
        { label: "Company size:", value: "501-1,000" },
        { label: "Founded in:", value: "2011" },
        { label: "Phone:", value: "123 456 7890" },
        { label: "Email:", value: "info@udemy.com" },
        { label: "Location:", value: "London, UK" },
    ];

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
    const JobCard = ({ title, company, location, time, salary, logo }) => (
        <div className="w-[600px] mb-6 rounded-xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex justify-between items-start">
            <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-100">
                    <img src={logo} alt={company} className="h-10 object-contain" />
                </div>
                <div>
                    <h2 className="font-semibold text-sm text-gray-800">{title}</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-gray-500 text-[11px]">
                        <span><i className="fa-solid fa-briefcase mr-1"></i>{company}</span>
                        <span><i className="fa-solid fa-location-dot mr-1"></i>{location}</span>
                        <span><i className="fa-regular fa-clock mr-1"></i>{time}</span>
                        <span><i className="fa-solid fa-money-bill mr-1"></i>{salary}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <span className="px-3 py-1 text-[10px] rounded-full bg-blue-50 text-blue-600">Full Time</span>
                        <span className="px-3 py-1 text-[10px] rounded-full bg-green-50 text-green-600">Private</span>
                        <span className="px-3 py-1 text-[10px] rounded-full bg-yellow-50 text-yellow-600">Urgent</span>
                    </div>
                </div>
            </div>
            <button className="text-gray-400 hover:text-blue-500 transition-colors">
                <i className="fa-regular fa-bookmark text-lg"></i>
            </button>
        </div>
    );


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
                    <h2 className="text-2xl font-bold text-gray-900">Job Description</h2>

                    {/* Video Placeholder */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md group w-170">

                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <button className="w-16 h-16 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <Play fill="white" size={28} className="ml-1" />
                            </button>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed w-170 text-sm">
                        As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients.
                        We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows.
                        This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
                    <div className="text-gray-600 leading-relaxed w-170 text-sm">
                        <h1 className="text-xl font-bold" >Key Responsibilities</h1>
                        <p >   Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</p><br />
                        <p>Work with BAs, product managers and tech teams to lead the Product Design</p><br />
                        <p>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</p><br />
                        <p>Accurately estimate design tickets during planning sessions.</p><br />
                        <p>Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.</p><br />
                        <p>Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.</p><br />
                        <p>Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheelPresent your work to the wider business at Show & Tell sessions.</p><br />
                        <p>Present your work to the wider business at Show & Tell sessions.</p><br />
                        <h1 className="text-xl font-bold">Skill & Experience</h1><br />
                        <p>You have at least 3 years’ experience working as a Product Designer.</p><br />
                        <p>You have experience using Sketch and InVision or Framer X</p><br />
                        <p>You have some previous experience working in an agile environment – Think two-week sprints.</p><br />
                        <p>You are familiar using Jira and Confluence in your workflow</p><br />
                    </div>
                    <div className='h-15 w-150 flex row gap-5'>
                        <h1>Share this job</h1>
                        <button className='p-1 h-10.5 w-30 border border bg-blue-800 flex items-center justify-center text-white p-1.2'><a href="#" className="hover:text-blue-600 transition-colors"><i className="fa-brands fa-facebook-f text-sm text-white bg-blue-800 "></i></a>facebook</button>
                        <button className='p-1 h-10.5 w-30 border border bg-sky-300 flex items-center justify-center text-white p-1.2'><a href="#" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-twitter text-sm"></i></a> Twitter</button>
                        <button className='p-1 h-10.5 w-30 border border bg-sky-700 flex items-center justify-center text-white p-1.2'>Linkedin</button>
                    </div>


                </div>

                {/* Right Side: Information Sidebar */}
                <div className=" w-90  bg-[#f8faff] p-8   rounded-3xl border border-gray-100 space-y-6 h-280  shadow-sm" >
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
            <div className="max-w-7xl mx-auto p-10 bg-white flex flex-col md:flex-row gap-8">

                {/* LEFT CONTENT AREA */}


                {/* RIGHT SIDEBAR */}
                <div className="w-full md:w-1/3 space-y-6">

                    {/* Social Media Box */}


                    {/* Professional Skills Box */}


                </div>
            </div>
            <div className="max-w-7xl mx- pr-10 flex flex-col md:flex-row gap-12 bg-white">
                <div className=''>
                    <JobCard
                        title="Software Engineer (Android), Libraries"
                        company="Segment"
                        location="London, UK"
                        time="11 hours ago"
                        salary="$35k - $45k"
                        logo="1-1.webp"
                    />
                    <JobCard
                        title="Senior UI/UX Designer"
                        company="Google"
                        location="Mountain View, CA"
                        time="2 hours ago"
                        salary="$120k - $150k"
                        logo="1-2.webp"
                    />
                    <JobCard
                        title="Senior UI/UX Designer"
                        company="Google"
                        location="Mountain View, CA"
                        time="2 hours ago"
                        salary="$120k - $150k"
                        logo="1-4.webp"
                    />
                    <JobCard
                        title="Senior UI/UX Designer"
                        company="Google"
                        location="Mountain View, CA"
                        time="2 hours ago"
                        salary="$120k - $150k"
                        logo="1-3.webp"
                    />
                </div>
                <div className="w-[400px] bg-[#F5F7FC] rounded-2xl p-8 -mr-10 -mt-10 shadow-sm">
                    {/* Details List */}
                    <div className="space-y-7 mb-8">
                        <div className='flex row gap-10'>
                            <img src="1-1.webp" alt="" />
                            <div className="flex flex-col">
                                <p >Segment</p>
                                <p className='text-xs text-blue-700'>View company profile</p>
                            </div>
                        </div>

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
            <div className="mt-12">



            </div>



        </div>
    );
}

export default Overview1;


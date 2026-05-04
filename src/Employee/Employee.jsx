import { useDispatch } from "react-redux";
import { filterJobs } from "../../Redux/redux";
import { useState } from "react";

export default function Findjob() {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        keyword: "",
        location: "",
        category: "",
        type: "",
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        dispatch(filterJobs(filters));
    };
    return (
        <>
            <div className="w-full h-50 border border-gray-300 bg-gray-200 flex flex-col justify-center items-center">
                <h1 className="text-2xl"> Companies</h1>
                <h1 className="text-xs"> Home /Companies</h1>
            </div>
            <div className="flex row gap-10 px-20 pt-10  ">
                <div className="p-4 bg-gray-100 rounded-md max-w-1/3 p-15 h-200 ">

                    <span><i className="fa-solid fa-magnifying-glass text-[14px]"></i><label htmlFor="" className="text-[14px] p-2  font-medium">Search by Keyword</label>
                        <input name="keyword" placeholder="Search by KeywordsJob title, keywords, or company" onChange={handleChange}
                            className="mb-8 my-3 p-2 w-60 h-10 text-[12px] boeder border rounded bg-white" /></span>

                    <span> <i className="fa-solid fa-location-pin text-xs"></i> <label htmlFor="" className="text-[14px] p-2  font-medium">Location</label>
                        <input name="location" placeholder="Location" onChange={handleChange}
                            className="mb-8 my-3 p-2  w-60 h-10 text-[12px] boeder border rounded bg-white" /></span>

                    <div className="m-10">
                        <div class="relative mb-6 flex flex-col justify-center items-center  w-50 h-15 ">
                            <label htmlForr="labels-range-input" class="sr-only">Labels range</label>
                            <input id="labels-range-input" type="range" value="1000" min="100" max="1500"
                                className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer" />
                            <button className="bg-blue-100 p-2 text-blue-500 border border  mt-3 h-8 w-16 "> 100km</button>
                        </div>
                    </div>
                    <div className=" w-60 h-25 flex flex-col">
                        <label htmlFor="" className="text-[14px] p-2 py-  font-medium">Categary</label>
                        <input name="location" placeholder=" choose a Category" onChange={handleChange} className="mb-2 p-2  w-60 h-10 text-[12px] boeder border rounded bg-white" />
                    </div>

                    <div className="pt-10 px-5">
                        <button className="text-blue-500 bg-blue-200 p-1 mt-3 ">view more</button>
                        <div class="relative mb-6 mt-10 flex flex-col justify-center items-center  w-50 h-15">
                            <label htmlFor="">Salary</label>
                            <label htmlForr="labels-range-input" class="sr-only">Labels range</label>
                            <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer" />
                            <button className="bg-blue-100  text-blue-500 border border  mt-3 h-8 w-19">$ 100000</button>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col">
                    <div className="  flex flex-row justify-between ltems-center w-170 ">
                        <div className="m-2">20 jobs</div>
                        <div>
                            <select name="" id="" className="border border m-2 text-sm"><option className="text-sm" value="">Sort by (default)</option>
                                <option className="text-sm" value="">Oldest</option>
                                <option className="text-sm" value="">Newest</option></select>
                            <select name="" id="" className="border border m-2 text-sm"><option className="text-sm" value="">All</option>
                                <option className="text-sm" value="">10 per page</option>
                                <option className="text-sm" value="">20 per page</option>
                                <option className="text-sm" value="">30 per page</option></select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-[550px] h-25 mt-20 pt-5 rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between ">

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
                        <div className="w-[550px] h-25 mt-20 pt-5 ml-1 mr-1rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

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
                        <div className="w-[550px] h-25 mt-20 pt-5 ml-1 mr-2 rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

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
                        <div className="w-[550px] h-25 mt-20 pt-5 mr-1rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

                            {/* LEFT SIDE */}
                            <div className="flex gap-4">

                                {/* Logo */}
                                <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                                    <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="company-4.webp" alt="" />
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
                        <div className="w-[550px] h-25 mt-20 pt-5 mr-2 rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

                            {/* LEFT SIDE */}
                            <div className="flex gap-4">

                                {/* Logo */}
                                <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                                    <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-3.webp" alt="" />
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
                        <div className="w-[550px] h-25 mt-20 pt-5 mr-1rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

                            {/* LEFT SIDE */}
                            <div className="flex gap-4">

                                {/* Logo */}
                                <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
                                    <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="company-5.webp" alt="" />
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
            </div>


        </>
    )
}
// import { useDispatch } from "react-redux";
// import { filterJobs } from "../../Redux/redux";
// import { useState } from "react";

// export default function Findjob() {
//   const dispatch = useDispatch();
//   const [filters, setFilters] = useState({
//     keyword: "",
//     location: "",
//     category: "",
//     type: "",
//   });

//   const handleChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const applyFilters = () => {
//     dispatch(filterJobs(filters));
//   };

//   return (
//     <>
//       <div className="w-full h-50 border border-gray-300 bg-gray-200 flex flex-col justify-center items-center">
//         <h1 className="text-2xl"> Find Jobs</h1>
//         <h1 className="text-xs"> Home /jobs</h1>
//       </div>
//       <div className="flex row gap-10 px-20 pt-10 ">
//         <div className="p-4 bg-gray-100 rounded-md max-w-1/3 p-15 ">

//           <span><i className="fa-solid fa-magnifying-glass text-[14px]"></i><label htmlFor="" className="text-[14px] p-2  font-medium">Search by Keyword</label>
//             <input name="keyword" placeholder="Search by KeywordsJob title, keywords, or company" onChange={handleChange}
//               className="mb-8 my-3 p-2 w-60 h-10 text-[12px] boeder border rounded bg-white" /></span>

//           <span> <i className="fa-solid fa-location-pin text-xs"></i> <label htmlFor="" className="text-[14px] p-2  font-medium">Location</label>
//             <input name="location" placeholder="Location" onChange={handleChange}
//               className="mb-8 my-3 p-2  w-60 h-10 text-[12px] boeder border rounded bg-white" /></span>
//           <div className="m-10">
//             <div class="relative mb-6 flex flex-col justify-center items-center  w-50 h-15 ">
//               <label htmlForr="labels-range-input" class="sr-only">Labels range</label>
//               <input id="labels-range-input" type="range" value="1000" min="100" max="1500"
//                 className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer" />
//               <button className="bg-blue-100 p-2 text-blue-500 border border  mt-3 h-8 w-16 "> 100km</button>
//             </div>
//           </div>
//           <div className=" w-60 h-25 flex flex-col">
//             <label htmlFor="" className="text-[14px] p-2 py-  font-medium">Categary</label>
//             <input name="location" placeholder=" choose a Category" onChange={handleChange} className="mb-2 p-2  w-60 h-10 text-[12px] boeder border rounded bg-white" />
//           </div>
//           <div className="pt-10 px-5">
//             <h1 className="text-medium my-5">Job Type</h1>
//             <div className="flex flex-col gap-4">
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Freelancer</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Full Time</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Part Time</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Temporary</span>
//               </label>

//             </div>

//           </div>
//           <div className="pt-10 px-5">
//             <h1 className="text-medium my-5">Date posted</h1>
//             <div className="flex flex-col gap-4">
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Alr</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Last Hour</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Last 24 Hour</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Last 7 Days</span>
//               </label>

//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Last 14 Days</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Last 30 Days</span>
//               </label>

//             </div>

//           </div>
//           <div className="pt-10 px-5">
//             <h1 className="text-medium my-5">Experience</h1>
//             <div className="flex flex-col gap-4">
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">Fresh</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">1 Year</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">2 Year</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">3 Year</span>
//               </label>
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer
//                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
//                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
//                 <span class="select-none ms-3 text-xs  text-heading">4 Year</span>
//               </label>

//             </div>
//             <button className="text-blue-500 bg-blue-200 p-1 mt-3">view more</button>
//             <div class="relative mb-6 mt-10 flex flex-col justify-center items-center  w-50 h-15">
//               <label htmlFor="">Salary</label>
//               <label htmlForr="labels-range-input" class="sr-only">Labels range</label>
//               <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer" />
//               <button className="bg-blue-100  text-blue-500 border border  mt-3 h-8 w-19">$ 100000</button>
//             </div>

//           </div>

//         </div>
//         <div className="flex flex-col">
//           <div className="  flex flex-row justify-between ltems-center  -mr-50 ">
//             <div className="m-2">show 10 jobs</div>
//             <div>
//               <select name="" id="" className="border border m-2 text-sm"><option className="text-sm" value="">Sort by (default)</option>
//                 <option className="text-sm" value="">Oldest</option>
//                 <option className="text-sm" value="">Newest</option></select>
//               <select name="" id="" className="border border m-2 text-sm"><option className="text-sm" value="">All</option>
//                 <option className="text-sm" value="">10 per page</option>
//                 <option className="text-sm" value="">20 per page</option>
//                 <option className="text-sm" value="">30 per page</option></select>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <div className="w-[500px] mt-20  rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between ">

//               {/* LEFT SIDE */}
//               <div className="flex gap-4">

//                 {/* Logo */}
//                 <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
//                   <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-1.webp" alt="" />
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h2 className="font-semibold text-sm">
//                     Software Engineer (Android), Libraries
//                   </h2>

//                   {/* Info Row */}
//                   <div className="text-xs">
//                     <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
//                     <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
//                     <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
//                     <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

//                   </div>

//                   {/* Tags */}
//                   <div className="flex gap-3 mt-3">
//                     <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
//                       Full Time
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
//                       Private
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
//                       Urgent
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Bookmark Icon */}
//               <div>
//                 <i className="fa-regular fa-bookmark"></i>
//               </div>

//             </div>
//             <div className="w-[500px] mt-20 ml-1 mr-1rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

//               {/* LEFT SIDE */}
//               <div className="flex gap-4">

//                 {/* Logo */}
//                 <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
//                   <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-2.webp" alt="" />
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h2 className="font-semibold text-sm">
//                     Software Engineer (Android), Libraries
//                   </h2>

//                   {/* Info Row */}
//                   <div className="text-xs">
//                     <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
//                     <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
//                     <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
//                     <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

//                   </div>

//                   {/* Tags */}
//                   <div className="flex gap-3 mt-3">
//                     <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
//                       Full Time
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
//                       Private
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
//                       Urgent
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Bookmark Icon */}
//               <div>
//                 <i className="fa-regular fa-bookmark"></i>
//               </div>

//             </div>

//           </div>
//           <div className="flex flex-col">
//             <div className="w-[500px] mt-15 ml-1 mr-2 rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

//               {/* LEFT SIDE */}
//               <div className="flex gap-4">

//                 {/* Logo */}
//                 <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
//                   <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-4.webp" alt="" />
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h2 className="font-semibold text-sm">
//                     Software Engineer (Android), Libraries
//                   </h2>

//                   {/* Info Row */}
//                   <div className="text-xs">
//                     <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
//                     <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
//                     <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
//                     <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

//                   </div>

//                   {/* Tags */}
//                   <div className="flex gap-3 mt-3">
//                     <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
//                       Full Time
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
//                       Private
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
//                       Urgent
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Bookmark Icon */}
//               <div>
//                 <i className="fa-regular fa-bookmark"></i>
//               </div>

//             </div>
//             <div className="w-[500px] mt-15 mr-1rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

//               {/* LEFT SIDE */}
//               <div className="flex gap-4">

//                 {/* Logo */}
//                 <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
//                   <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-5.webp" alt="" />
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h2 className="font-semibold text-sm">
//                     Software Engineer (Android), Libraries
//                   </h2>

//                   {/* Info Row */}
//                   <div className="text-xs">
//                     <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
//                     <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
//                     <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
//                     <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

//                   </div>

//                   {/* Tags */}
//                   <div className="flex gap-3 mt-3">
//                     <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
//                       Full Time
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
//                       Private
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
//                       Urgent
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Bookmark Icon */}
//               <div>
//                 <i className="fa-regular fa-bookmark"></i>
//               </div>

//             </div>

//           </div>
//           <div className="flex flex-col">
//             <div className="w-[500px] mt-15 mr-2 rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

//               {/* LEFT SIDE */}
//               <div className="flex gap-4">

//                 {/* Logo */}
//                 <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
//                   <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-1.webp" alt="" />
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h2 className="font-semibold text-sm">
//                     Software Engineer (Android), Libraries
//                   </h2>

//                   {/* Info Row */}
//                   <div className="text-xs">
//                     <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
//                     <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
//                     <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
//                     <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

//                   </div>

//                   {/* Tags */}
//                   <div className="flex gap-3 mt-3">
//                     <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
//                       Full Time
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
//                       Private
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
//                       Urgent
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Bookmark Icon */}
//               <div>
//                 <i className="fa-regular fa-bookmark"></i>
//               </div>

//             </div>
//             <div className="w-[500px] mt-15 mr-1rounded-xl p-2 bg-gray-100 shadow-xs flex justify-between items-start">

//               {/* LEFT SIDE */}
//               <div className="flex gap-4">

//                 {/* Logo */}
//                 <div className="w-12 h-12  text-white flex items-center justify-center rounded-lg">
//                   <img className="bg-white  h-10 mt-2  text-3xl bg-gray-100" src="1-2.webp" alt="" />
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h2 className="font-semibold text-sm">
//                     Software Engineer (Android), Libraries
//                   </h2>

//                   {/* Info Row */}
//                   <div className="text-xs">
//                     <i className="fa-solid fa-briefcase mr-2 mt-4 text-xs"></i><span className="text-xs" >Segment</span>
//                     <i className="fa-solid fa-location-dot mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >London, UK</span>
//                     <i className="fa-regular fa-clock mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >11 hours ago</span>
//                     <i className="fa-solid fa-money-bill-wheat mr-2 ml-2 mt-4 text-xs"></i><span className="text-xs" >$35k - $45k</span>

//                   </div>

//                   {/* Tags */}
//                   <div className="flex gap-3 mt-3">
//                     <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
//                       Full Time
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
//                       Private
//                     </span>
//                     <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-600">
//                       Urgent
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Bookmark Icon */}
//               <div>
//                 <i className="fa-regular fa-bookmark"></i>
//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterJobs } from "../../Redux/redux";

// Reusable Job Card to save space and fix rendering
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

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="w-full h-40 bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800">Find Jobs</h1>
        <p className="text-sm text-gray-500 mt-2">Home / Jobs</p>
      </div>

      <div className="max-w-7xl mx-auto flex gap-10 px-10 pt-10">
        {/* SIDEBAR FILTERS */}
        <div className="w-1/4 p-6 bg-gray-50 rounded-xl h-fit border border-gray-100">
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 block mb-2">Search by Keyword</label>
            <div className="relative">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-3 text-gray-400"></i>
              <input 
                name="keyword" 
                placeholder="Job title or company" 
                onChange={handleChange}
                className="pl-10 p-2 w-full text-xs border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 block mb-2">Location</label>
            <div className="relative">
              <i className="fa-solid fa-location-pin absolute left-3 top-3 text-gray-400"></i>
              <input 
                name="location" 
                placeholder="City or country" 
                onChange={handleChange}
                className="pl-10 p-2 w-full text-xs border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              />
            </div>
          </div>

          {/* Range Slider for Salary */}
          <div className="mb-8">
            <label className="text-sm font-semibold text-gray-700 block mb-4">Salary Range</label>
            <input type="range" min="100" max="1500" className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            <div className="text-center mt-3">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs font-bold">$1000 - $1500</span>
            </div>
          </div>

          {/* Job Type Checkboxes */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Job Type</h3>
            <div className="space-y-3">
              {['Freelancer', 'Full Time', 'Part Time', 'Temporary'].map((type) => (
                <label key={type} className="flex items-center cursor-pointer group">
                  <input type="checkbox" className="hidden peer" />
                  <div className="w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"></div>
                  <span className="ml-3 text-xs text-gray-600 group-hover:text-blue-600">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* JOB LISTINGS SECTION */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg border border-gray-100">
            <span className="text-gray-600 text-sm">Showing <span className="font-bold text-gray-800">10</span> jobs</span>
            <div className="flex gap-3">
              <select className="bg-gray-50 border border-gray-200 text-xs p-2 rounded-lg outline-none">
                <option>Sort by (Default)</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>

          {/* Mapping through jobs (Example data) */}
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
          {/* Add more JobCards here */}
        </div>
      </div>
    </div>
  );
}

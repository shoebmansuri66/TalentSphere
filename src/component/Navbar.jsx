// import React from "react";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Helper to check if the current path starts with /candidate
//   const isCandidateActive = location.pathname.startsWith("/candidate");

//   const handleDropdownChange = (e) => {
//     if (e.target.value) {
//       navigate(e.target.value);
//     }
//   };

//   return (
//     <div className="p-6 w-full h-20 flex items-center gap-10 text-sm border border-gray-300">
//       {/* Logo */}
//       <NavLink to="/">
//         <img src="logo.png" alt="logo" className="-m-1.5 w-32" />
//       </NavLink>

//       {/* Standard Links */}
//       <NavLink to="/home" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-600"}>Home</NavLink>
//       <NavLink to="/find" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-600"}>Findjob</NavLink>
//       <NavLink to="/employee" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-600"}>Employee</NavLink>

//       {/* Candidate Dropdown */}
//       <select 
//         onChange={handleDropdownChange}
//         value={isCandidateActive ? location.pathname : ""}
//         className={`bg-transparent outline-none cursor-pointer ${isCandidateActive ? "text-blue-500 font-bold" : "text-gray-600"}`}
//       >
//         <option value="/candidate" >Candidate</option>
//         <option value="/candidate/overview">Overview</option>
//         <option value="/candidate/dashboard">Dashboard</option>
        
//       </select>

//       <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-600"}>About</NavLink>
//       <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-600"}>Contact</NavLink>

//       {/* Action Buttons */}
//       <div className="flex gap-4 items-center ml-auto">
//         <NavLink to="/upload" className="text-blue-500">Upload your CV</NavLink>
//         <NavLink to="/login" className="px-4 py-1 bg-blue-100 hover:bg-blue-700 hover:text-white transition-colors">Login/Register</NavLink>
//         <NavLink to="/" className="px-4 py-1 bg-blue-700 text-white hover:bg-blue-800 transition-colors">Job Post</NavLink>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// Reusable Dropdown Component to keep the code clean
const NavDropdown = ({ title, baseRoute, links }) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(baseRoute);

  return (
    <div className="relative group cursor-pointer py-2">
      <span className={`flex items-center gap-1 transition-colors ${isActive ? "text-blue-600 font-bold" : "text-gray-700 group-hover:text-blue-600"}`}>
        {title}
        <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
      
      {/* Dropdown Menu */}
      <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
        {links.map((link, index) => (
          <NavLink 
            key={index} 
            to={link.path} 
            className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 last:border-none transition-colors"
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="px-8 w-full h-20 flex items-center gap-8 text-sm border-b border-gray-200 bg-white sticky top-0 z-[100]">
      {/* Logo */}
      <NavLink to="/">
        <img src="logo.png" alt="logo" className="w-32" />
      </NavLink>

      {/* 1. Home (No Dropdown) */}
      <NavLink to="/home" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"}>
        Home
      </NavLink>

      {/* 2. Find Jobs Dropdown */}
        <NavDropdown 
          title="FindJobs" 
          baseRoute="/find" 
          links={[
            { label: "FindJobs", path: "/find" },
            { label: "Overview", path: "overview3" },
          ]} 
        />

        {/* 3. Employers Dropdown */}
        <NavDropdown 
        title="Employers" 
        baseRoute="/employee" 
        links={[
          { label: "Employers List", path: "/employee" },
          { label: "Employee Single", path: "overview2" },
          { label: "EMployee Dashboard", path: "dashboard" },
        ]} 
      />

      {/* 4. Candidate Dropdown */}
      <NavDropdown 
        title="Candidates" 
        baseRoute="/candidate" 
        links={[
          { label: "Candidate List", path: "/candidate" },
          { label: "Candidate single", path: "overview" },
          { label: "My Dashboard", path: "/candidate/dashboard" },
        ]} 
      />

      {/* 5. Pages Dropdown */}
      <NavDropdown 
        title="Pages" 
        baseRoute="/pages" 
        links={[
          { label: "About Us", path: "/about" },
          { label: "Contact Us", path: "/contact" },
        ]} 
      />

      {/* Right Side Buttons */}
      <div className="flex gap-4 items-center ml-auto">
        <NavLink to="/upload" className="hidden lg:block text-blue-600 font-medium hover:underline">Upload CV</NavLink>
        <NavLink to="/login" className="px-5 py-2.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-medium">Login / Register</NavLink>
        <NavLink to="/post-job" className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all font-medium">Job Post</NavLink>
      </div>
    </div>
  );
}
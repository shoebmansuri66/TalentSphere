import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HiOutlineHome, HiOutlineUserCircle, HiOutlinePaperAirplane, 
  HiOutlineBriefcase, HiOutlineDocumentText, HiOutlineBookmark, 
  HiOutlineCube, HiOutlineChatAlt2, HiOutlineBell 
} from 'react-icons/hi';

const Dashboard1 = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/employee/dashboard', icon: <HiOutlineHome size={22} /> },
    { name: 'Company Profile', path: '/employee/profile', icon: <HiOutlineUserCircle size={22} /> },
    { name: 'Post A New Job', path: '/employee/post-job', icon: <HiOutlinePaperAirplane size={22} /> },
    { name: 'Manage Jobs', path: '/employee/manage-jobs', icon: <HiOutlineBriefcase size={22} /> },
    { name: 'All Applicants', path: '/employee/applicants', icon: <HiOutlineDocumentText size={22} /> },
    { name: 'Shortlisted Resumes', path: '/employee/shortlisted', icon: <HiOutlineBookmark size={22} /> },
    { name: 'Packages', path: '/employee/packages', icon: <HiOutlineCube size={22} /> },
    { name: 'Messages', path: '/employee/messages', icon: <HiOutlineChatAlt2 size={22} /> },
    { name: 'Resume Alerts', path: '/employee/alerts', icon: <HiOutlineBell size={22} /> },
  ];

  return (
    <div className="w-72 h-screen bg-white p-4 border-r border-gray-100 sticky top-0">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-200 
              ${isActive 
                ? 'bg-sky-50 text-blue-600 font-semibold' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`
            }
          >
            <span>{item.icon}</span>
            <span className="text-lg font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Dashboard1;
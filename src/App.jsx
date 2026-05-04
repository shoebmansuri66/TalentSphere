import React from "react"
import Navbar from "./component/Navbar.jsx"
import Logo from "./pages/Logo.jsx"
import Home from "./pages/Home.jsx"
import Findjob from "./find job/Findjob.jsx"
import Employee from "./Employee/Employee.jsx"
import Candidate from "./candidate/Candidate.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Registration from "./component/Registration.jsx"
import Login from "./component/Login.jsx"
import JobPost from "./component/JobPost.jsx"
import Footer from "./component/Footer.jsx"
import { Bounce, ToastContainer } from "react-toastify"
import "./App.css"
import { Route, Routes, useLocation } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import Overview1 from "./candidate/Overview1.jsx";
import Overview2 from "./Employee/Overview2.jsx";
import Overview3 from "./find job/Overview3.jsx";
import Dashboard from "./Employee/Dashboard1.jsx";
// employee Dashboard
import CompanyProfile from "./Employee/CompanyProfile.jsx";
import PostJob from "./Employee/PostJob.jsx";

// import JobList from "./find job/Joblist.jsx"

export default function Axpp() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/contact");
 
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000} theme="dark" transition={Bounce} />
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/find" element={<Findjob />}></Route>
        <Route  path="/overview3" element={<Overview3 />}></Route>
        <Route path="/employee" element={<Employee />}> </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
        <Route path="/dashboard/profile" element={<CompanyProfile />}> </Route>
        <Route path="/dashboard/post-job" element={<PostJob />}> </Route>
        {/* <Route path="/" element={<ManageJobs />}> </Route>
        <Route path="/" element={< AllApplicants/>}> </Route>
        <Route path="/" element={< ShortlistedResumes/>}> </Route>
        <Route path="/" element={<Packages />}> </Route>
        <Route path="/" element={<Messages />}> </Route>
        <Route path="/" element={< ResumeAlerts/>}> </Route> */}
 
{/* Change Password
Logout
Delete Profile */}
         </Route>
        <Route  path="/overview2" element={<Overview2 />}></Route>
        <Route path="/candidate" element={<Candidate />}></Route>
        <Route  path="/overview" element={<Overview1 />}></Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/jobpost" element={<JobPost />}></Route>
      </Routes>
      <Footer />


    </>
  )
}

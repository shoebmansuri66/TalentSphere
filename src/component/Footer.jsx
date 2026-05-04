export default function Footer() {
  return (
    <>
      <div className="w-100% h-100 p-10  flex flex-row gap-50">
        <div className="px-5 py-10 w-37 flex flex-col gap-6">
          <img src="logo.png" alt="logo" className="" />
          <div>
            <p className="text-bold text-sm">Call us </p>
            <p className="text-blue-600 text-bold">123 456 7890</p>
          </div>
          <div className="flex flex-col gap-3" >
            <p className=" w-76 text-xs">329 Queensberry Street, North Melbourne VIC</p>
            <p className=" w-76 text-xs">3051, Australia.</p>
            <p className=" w-76 text-xs">support@superio.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 py-12 bg-white">

          {/* Column 1: For Candidates */}
          <div>
            <h5 className="text-sm font-bold mb-5  text-gray-900">For Candidates</h5>
            <div className="flex flex-col gap-3 w-35 ">
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Browse Jobs</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Browse Categories</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Candidate Dashboard</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Job Alerts</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">My Bookmarks</a>
            </div>
          </div>

          {/* Column 2: For Employers */}
          <div>
            <h5 className="text-sm font-bold mb-5 text-gray-900 ">For Employers</h5>
            <div className="flex flex-col gap-3 w-35 ">
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Browse Candidates</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Employer Dashboard</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Add Job</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Job Packages</a>
            </div>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h5 className="text-sm font-bold mb-5 text-gray-900">About Us</h5>
            <div className="flex flex-col gap-3 w-35 ">
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">About Us</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Job Page Invoice</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Terms Page</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Blog</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Contact</a>
            </div>
          </div>

          {/* Column 4: Helpful Resources */}
          <div>
            <h5 className="text-sm font-bold mb-5 text-gray-900">Helpful Resources</h5>
            <div className="flex flex-col gap-3 w-35 ">
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Site Map</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Terms of Use</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Privacy Center</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Security Center</a>
              <a href="#" className="text-xs text-gray-600 hover:text-blue-500 hover:pl-2 transition-all">Accessibility Center</a>
            </div>
          </div>

        </div>
      </div>
      <div className="m-10  flex flex-row justify-between">
        <p className="text-xs">© 2023 Superio by ib-themes. All Right Reserved.</p>
        <div className=" flex flex-row gap-3 text-xs">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>


    </>
  )
}
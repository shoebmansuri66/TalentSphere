import { useSelector } from "react-redux";
import JobCard from "./JobCard.jsx";

export default function JobList() {
  const jobs = useSelector((state) => state.jobs.filteredJobs);

  return (
    <div className="w-2/3 p-4">
      {jobs.slice(0, 10).map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

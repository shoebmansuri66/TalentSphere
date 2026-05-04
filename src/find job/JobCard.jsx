export default function JobCard({ job }) {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-bold">{job.title}</h2>
      <p>{job.company} - {job.location}</p>
      <p className="text-sm text-gray-600">Salary: {job.salary}</p>
      <div className="flex gap-2 mt-2">
        {job.tags.map((tag, i) => (
          <span key={i} className="bg-gray-200 px-2 py-1 rounded text-xs">{tag}</span>
        ))}
      </div>
    </div>
  );
}

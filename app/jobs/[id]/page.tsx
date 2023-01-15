import UpdateJob from "./UpdateJob";

async function getJob(jobId: string) {
  const res = await fetch(
    `http://localhost:3001/jobs/${jobId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const { data } = await res.json();
  return data;
}

export default async function JobPage({ params }: any) {
  const job = await getJob(params.id);

  return (
    <div>
      <div>
        <h2>{job.title}</h2>
        <h5>Company: {job.company}</h5>
        <h5>{job.summary}</h5>
        <h5>Status: {job.status}</h5>
        <h5>Salary: {job.salary_offer}</h5>
        <h5>Location: {job.location}</h5>
        <h5>Deadline: {new Date(job.target_deadline).toLocaleDateString()}</h5>
      </div>

      <UpdateJob params={job} />
    </div>
  );
}

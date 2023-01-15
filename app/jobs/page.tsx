import Link from 'next/link';
import CreateJob from './CreateJob';
import styles from './Jobs.module.css';

async function getJobs() {
  const res = await fetch(
    "http://localhost:3001/jobs", 
    { cache: 'no-store' }
  );

  const data = await res.json();
  return data?.data as any[];
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return(
    <div>
      <h1>Jobs</h1>
      <div className={styles.grid}>
        {jobs?.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
      
      <CreateJob />
    </div>
  );
}

function Job({ job }: any) {
  const { 
    id, 
    title, 
    company, 
    summary, 
    status, 
    salary_offer, 
    location, 
    target_deadline
  } = job || {};

  return (
    <Link href={`/jobs/${id}`} style={{ textDecoration: 'none' }} target="_blank">
      <div className={styles.job}>
        <h2>{title}</h2>
        <h5>Company: {company}</h5>
        <h5>{summary}</h5>
        <h5>Status: {status}</h5>
        <h5>Salary: {salary_offer}</h5>
        <h5>Location: {location}</h5>
        <h5>Deadline {new Date(target_deadline).toLocaleDateString()}</h5>
      </div>
    </Link>
  );
}

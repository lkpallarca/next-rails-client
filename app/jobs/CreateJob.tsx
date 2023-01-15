'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateJob() {
  const [values, setValues] = useState({
    title: "",
    company: "",
    summary: "",
    salary_offer: "",
    location: "",
    target_deadline: "",
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    const { value, id } = e.target;
    setValues((values) => ({
      ...values,
      [id]: value
    }))
  }

  const create = async() => {
    await fetch('http://localhost:3001/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: values.title,
        company: values.company,
        summary: values.summary,
        salary_offer: values.salary_offer,
        location: values.location,
        target_deadline: values.target_deadline
      }),
    });

    setValues({
      title: "",
      company: "",
      summary: "",
      salary_offer: "",
      location: "",
      target_deadline: "",
    });

    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Create a new Job</h3>
      <input
        type="text"
        id='title'
        placeholder="Title"
        value={values.title}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        id='company'
        placeholder="Company"
        value={values.company}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        id='summary'
        placeholder="Summary"
        value={values.summary}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="number"
        id='number'
        placeholder="Salary Offer"
        value={values.salary_offer}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id='location'
        placeholder="Location"
        value={values.location}
        onChange={handleChange}
      />
      <br />
      <input
        type="datetime-local"
        id='target_deadline'
        placeholder="Target Deadline"
        value={values.target_deadline}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">
        Create Job
      </button>
    </form>
  );
}
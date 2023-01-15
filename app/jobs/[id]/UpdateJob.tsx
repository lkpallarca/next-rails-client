'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UpdateJob({params}:any) {
  const [values, setValues] = useState({
    title: params.title,
    company: params.company,
    summary: params.summary,
    salary_offer: params.salary_offer,
    location: params.location,
    target_deadline: params.target_deadline,
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    const { value, id } = e.target;
    setValues((values) => ({
      ...values,
      [id]: value
    }))
  }

  const update = async() => {
    await fetch(`http://localhost:3001/jobs/${params.id}`, {
      method: 'PATCH',
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
    <form onSubmit={update}>
      <h3>Update Job</h3>
      <input
        type="text"
        id='title'
        placeholder="Title"
        value={values.title}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id='company'
        placeholder="Company"
        value={values.company}
        onChange={handleChange}
      />
      <br />
      <textarea
        id='summary'
        placeholder="Summary"
        value={values.summary}
        onChange={handleChange}
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
      />
      <br />
      <button type="submit">
        Update Job
      </button>
    </form>
  );
}
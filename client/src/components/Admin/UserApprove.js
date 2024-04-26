import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Example() {
  const [notApprovedPeople, setNotApprovedPeople] = useState([]);

  useEffect(() => {
    const fetchNotApprovedPeople = async () => {
      try {
        const response = await axios.get('/api/people/not-approved');
        setNotApprovedPeople(response.data);
      } catch (error) {
        console.error('Error fetching not approved people:', error);
      }
    };
    fetchNotApprovedPeople();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`/api/people/approve/${id}`);
      // After approval, fetch updated list of not approved people
      const response = await axios.get('/api/people/not-approved');
      setNotApprovedPeople(response.data);
    } catch (error) {
      console.error('Error approving person:', error);
    }
  };

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {notApprovedPeople.map((person) => (
        <li key={person._id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            <button onClick={() => handleApprove(person._id)} className="mt-2 bg-green-500 px-2 py-1 text-white rounded-md">Approve</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

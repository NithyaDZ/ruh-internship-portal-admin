// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      <nav>
        <ul>
          <li><Link to="/analyze">Analyze</Link></li>
          <li><Link to="/select-internships">Select Internships</Link></li>
          <li><Link to="/update-instructions">Update Instructions</Link></li>
          <li><Link to="/add-internships">Add Internships</Link></li>
          <li><Link to="/preference-update">Preference Update</Link></li>
          <li><Link to="/add-notices">Add Notices</Link></li>
          <li><Link to="/company-details">Company Details</Link></li>
          <li><Link to="/student-feedback">Student Feedback</Link></li>
          <li><Link to="/supervisor-feedback">Supervisor Feedback</Link></li>
          <li><Link to="/diary-updates">Diary Updates</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

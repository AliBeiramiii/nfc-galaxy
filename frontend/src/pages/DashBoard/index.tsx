import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <ul>
        <li>
          <Link to="/reset-password">Reset Password</Link>
        </li>
        <li>
          <Link to="/edit-information">Edit Your Information</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
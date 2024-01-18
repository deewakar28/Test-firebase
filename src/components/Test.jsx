import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Test = () => {
  // State to store the user role
  const [userRole, setUserRole] = useState('');

  // useEffect to run once when the component mounts
  useEffect(() => {
    // Retrieve user role from localStorage
    const storedUserRole = localStorage.getItem('userRole');

    // Update the state with the user role
    setUserRole(storedUserRole || 'Default Role'); // Use 'Default Role' if userRole is not found in localStorage
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Welcome to the Dashboard</h1>
      <p>Your current role is: {userRole}</p>
      {/* Other dashboard content goes here */}
    </div>
  );
};

export default Test;

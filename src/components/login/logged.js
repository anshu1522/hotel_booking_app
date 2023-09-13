import React, { useState } from 'react';
import Logout from './logout';
import Login from './login';

const Logged = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  

  const handleLogin = (user) => {
    // Perform authentication (e.g., validate user credentials)
    // For simplicity, we'll just set loggedIn to true for any username
    setLoggedIn(true);
    setUsername(user);


  };

  const handleLogout = () => {
    // Handle logout logic (e.g., clear session or token)
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      {/* <h1>Hotel Booking App</h1> */}
      {loggedIn ? (
        <Logout onLogout={handleLogout} username={username} />
      ) : (
        <Login onLogin={handleLogin} />
       )} 
      {/* Render the rest of your application components */}

    </div>
  );
};

export default Logged;

import React, { useState } from 'react';
import "./login.css"

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // onLogin();
 
     if (username && password) {
        onLogin(username);
       } else {
        alert('Please fill in both username and password.');
      }
  };

  return (
    <div className='loginpage'>
      <h2>Login for Hotel Details</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <br/>
      <button  className='btn btn-outline-success' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

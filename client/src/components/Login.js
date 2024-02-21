import React, { useState } from 'react';
import { useNavigate   } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  const handleLogin = () => {

    console.log("Sending request to the backend : http://3.220.140.38:5000/login");

    
    fetch('http://3.220.140.38:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then(response => response.json())
      .then(data => {
        console.log("Data : ",data);  

        navigate("/home");
        
        
      })
      .catch(error => {
        console.error('Error during login:', error);
        
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

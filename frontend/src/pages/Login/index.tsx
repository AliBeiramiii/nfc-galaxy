import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const formdata = new FormData();
  formdata.append('username', username);
  formdata.append('password', password);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/customer/login/',
        formdata
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <p><Link to="/register">If you don't have an account, click here</Link> to register.</p>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   mobileNumber: '',
  //   email: '',
  //   username: '',
  //   password: ''
  // });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('email', email);
  formData.append('username', username);
  formData.append('password', password);
  formData.append('mobileNumber', mobileNumber);


  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  const handleRegister = async (e: React.FormEvent) => {
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/customer/register/', formData);
      console.log(response.data); // Log the response from the API
      // Optionally, you can redirect the user to a success page or perform other actions based on the API response
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div>
      <h2>Register</h2>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
        </label>
        <br />
        {/* Other input fields for last name, mobile number, email, username, and password */}
        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Mobile Number:
          <input type="text" name="mobileNumber" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <br />
        <button onClick={handleRegister}>Register</button>'
    </div>
  );
};

export default Register;

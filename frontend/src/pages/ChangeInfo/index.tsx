import React, { useState } from 'react';
import axios from 'axios';

const ResetUserInformation: React.FC = () => {
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');

const formData = new FormData();
formData.append("username", username);
formData.append("email", email);
formData.append("first_name", first_name);
formData.append("last_name", last_name);
formData.append("mobile", mobile);



  const handleResetUserInformation = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/customer/change-info/", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={first_name} onChange={(e) => setFirst_name(e.target.value)} placeholder="First Name" />
      <input type="text" value={last_name} onChange={(e) => setLast_name(e.target.value)} placeholder="Last Name" />
      <input type="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number" />
      <button onClick={handleResetUserInformation}>Reset User Information</button>
    </div>
  );
};

export default ResetUserInformation;
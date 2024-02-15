import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword= () => {
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  
const formData = new FormData();
formData.append("username", username);
formData.append("old_password", oldPassword);
formData.append("new_password", newPassword);

  
      
    const handleResetPassword = async () => {
        if (newPassword !== confirmNewPassword) {
        alert('New passwords do not match. Please try again.');
        return;
        }
        try {
        const response = await axios.post("http://127.0.0.1:8000/api/customer/reset-password/", formData);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    };

  return (
    <div>
      <label>Old Password:</label>
      <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder="old password"/>

      <label>username:</label>
      <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>

      <label>New Password:</label>
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}placeholder="new password" />

      <label>Confirm New Password:</label>
      <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} placeholder="new password again"/>

      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;

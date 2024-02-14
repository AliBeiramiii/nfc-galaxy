// import React from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard: React.FC = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Welcome to your dashboard!</p>
//       <ul>
//         <li>
//           <Link to="/reset-password">Reset Password</Link>
//         </li>
//         <li>
//           <Link to="/edit-information">Edit Your Information</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext, { useAuth } from '../../context-Api/AuthProvider';


const ModelFieldsComponent: React.FC = () => {
    const [fields, setFields] = useState([]);
    // const searchUsername = 'desired-username'; // Provide the desired username for the search
    const {authData, setAuthData} = useAuth();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/customer/dashboard/");
                setFields(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    })

    return (
        <div>
            <h1>Model Fields for User: {authData.user}</h1>
            <ul>
                {fields.map((field: any) => (
                    <li key={field.name}>{field.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ModelFieldsComponent;
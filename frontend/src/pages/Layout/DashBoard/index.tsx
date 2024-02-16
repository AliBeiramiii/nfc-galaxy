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
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../context-Api/AuthProvider';

// const ModelFieldsComponent: React.FC = () => {
//     const [fields, setFields] = useState([]);
//     // const searchUsername = 'desired-username'; // Provide the desired username for the search
//     const {authData, setAuthData} = useAuth();
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await axios.get("http://127.0.0.1:8000/api/customer/dashboard/");
//     //             setFields(response.data);
//     //         } catch (error) {
//     //             console.error(error);
//     //         }
//     //     };

//     //     fetchData();
//     // })

//     return (
//         // <div>
//         //     <h1>Model Fields for User: {authData.user}</h1>
//         //     <ul>
//         //         {fields.map((field: any) => (
//         //             <li key={field.name}>{field.name}</li>
//         //         ))}
//         //     </ul>
//         // </div>
//             <>
//             </>
//     );
// };

// export default ModelFieldsComponent;

import React, { useState } from "react";
import { useAuth } from "../../../context-Api/AuthProvider";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineExitToApp } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard: React.FC = () => {
  const { authData, setAuthData } = useAuth();
  const [tabButtonColor, setTabButtonColor] = useState("white");
  const [tabButtonIndex, setTabButtonIndex] = useState(-1);

  return (
    <>
      <div className="bg-[#1A1A1A] border border-hidden rounded-3xl text-white flex justify-center">
        <div className="flex flex-col justify-start bg-[#272626] border border-hidden rounded-3xl gap-10">
          <div className="flex p-10">سلام {authData.firstname} عزیز</div>
          <div className="flex h-[50px] justify-center">
            <button className="mt-[-3px] hover:mt-[-7px] text-black font-bold py-2 rounded">
              <NavLink to="/">
                <IoHomeSharp size={40} color="white" />
              </NavLink>
            </button>
          </div>
          <ul className="flex flex-col justify-between gap-0 text-2xl mb-10">
            <li
              className="flex justify-start gap-0 hover:cursor-pointer"
              onMouseEnter={() => {
                setTabButtonIndex(0);
              }}
              onMouseLeave={() => {
                setTabButtonIndex(-1);
              }}
            >
              <div className="border border-hidden rounded-tl-xl bg-[#1A1A1A] p-4">
                <MdSpaceDashboard size={40} color={tabButtonIndex===0 ? 'gray' : 'white'} />
              </div>
            <div className={`${tabButtonIndex===0 ? 'text-gray-400' : 'white'} ${' p-4'}`}>
                داشبورد
              </div>
            </li>
            <li className="flex justify-start gap-0 hover:cursor-pointer"
              onMouseEnter={() => {
                setTabButtonIndex(1);
              }}
              onMouseLeave={() => {
                setTabButtonIndex(-1);
              }}>
              <div className="border border-hidden bg-[#1A1A1A] p-4">
                <FaRegEdit size={40} color={tabButtonIndex===1 ? 'gray' : 'white'} />
              </div>
              <div className={`${tabButtonIndex===1 ? 'text-gray-400' : 'white'} ${' p-4'}`}>
                ویرایش حساب
              </div>
            </li>
            <li className="flex justify-start gap-0 hover:cursor-pointer"
              onMouseEnter={() => {
                setTabButtonIndex(2);
              }}
              onMouseLeave={() => {
                setTabButtonIndex(-1);
              }}>
              <div className="border border-hidden bg-[#1A1A1A] p-4">
                <BsFillBasket2Fill size={40} color={tabButtonIndex===2 ? 'gray' : 'white'} />
              </div>
              <div className={`${tabButtonIndex===2 ? 'text-gray-400' : 'white'} ${' p-4'}`}>
                سفارشات
              </div>
            </li>
            <li className="flex justify-start gap-0 hover:cursor-pointer"
              onMouseEnter={() => {
                setTabButtonIndex(3);
              }}
              onMouseLeave={() => {
                setTabButtonIndex(-1);
              }}>
              <div className="border border-hidden bg-[#1A1A1A] p-4">
                <FaTruckFast size={40} color={tabButtonIndex===3 ? 'gray' : 'white'} />
              </div>
              <div className={`${tabButtonIndex===3 ? 'text-gray-400' : 'white'} ${' p-4'}`}>
                پیگیری سفارشات
              </div>
            </li>
            <li className="flex justify-start gap-0 hover:cursor-pointer"
              onMouseEnter={() => {
                setTabButtonIndex(4);
              }}
              onMouseLeave={() => {
                setTabButtonIndex(-1);
              }}>
              <div className="border border-hidden rounded-bl-xl bg-[#1A1A1A] p-4">
                <MdOutlineExitToApp size={40} color={tabButtonIndex===4 ? 'gray' : 'white'} />
              </div>
              <div className={`${tabButtonIndex===4 ? 'text-gray-400' : 'white'} ${' p-4'}`}>خروج</div>
            </li>
          </ul>
        </div>
        <Outlet/>
      </div>
    </>
  );
};

export default DashBoard;

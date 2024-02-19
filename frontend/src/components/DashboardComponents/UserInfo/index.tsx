import React from "react";
import { useAuth } from "../../../context-Api/AuthProvider";

const UserInfo:React.FC = () => {
  const{authData} = useAuth();
  return (
    <>
      <div className="bg-[#1A1A1A] border border-hidden rounded-3xl text-white flex justify-start my-16 gap-10">
        <div className="flex flex-col bg-[#272626] rounded-3xl justify-start">
          <div className="flex text-3xl font-bold p-10 mb-10">
            اطلاعات کاربری
          </div>
          <ul className="flex flex-col justify-between p-2">
            <li className="flex gap-2 p-2">
              <div className="text-xl font-semibold">
               <span className=""> نام: </span>
               <span className="text-gray-400"> {authData.firstname} </span>
                </div>
            </li>
            <li className="flex gap-2 p-2">
              <div className="text-xl font-semibold">
               <span className=""> نام خانوادگی: </span>
               <span className="text-gray-400"> {authData.lastname} </span>
                </div>
            </li>
            <li className="flex gap-2 p-2">
              <div className="text-xl font-semibold">
               <span className=""> شماره موبایل: </span>
               <span className="text-gray-400"> {authData.mobile} </span>
                </div>
            </li>
            <li className="flex gap-2 p-2">
              <div className="text-xl font-semibold">
               <span className=""> ایمیل: </span>
               <span className="text-gray-400"> {authData.email} </span>
                </div>
            </li>
            <li className="flex gap-2 p-2">
              <div className="text-xl font-semibold">
               <span className=""> نام کاربری: </span>
               <span className="text-gray-400"> {authData.user} </span>
                </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 justify-start">
          <div className="flex flex-col gap-10 justify-between">
            <div className="flex text-3xl font-bold">دسترسی سریع</div>
            <div className="flex gap-10 "></div>
          </div>
          <div className="flex flex-col gap-10 justify-between">

          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;

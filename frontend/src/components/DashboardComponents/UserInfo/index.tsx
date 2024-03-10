import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserInfo:React.FC = () => {
  const navigate = useNavigate();
  const [number,setNumber] = useState();

  useEffect(()=>{
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem('refresh');
    const fetchUsername = async () => {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/dashboard/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      }
      ).then((response)=>{
        console.log(response)
        setNumber(response.data?.mobile)
      })
      .catch((error)=>{
        console.log(error);
        console.log('hi');
        if(error.response.status==401){
          axios({
            method: 'post',
            url:'http://127.0.0.1:8000/api/token/refresh/',
            headers:{
              'Content-Type': 'application/json'
            },
            data:{
              'refresh' : refreshToken
            }
          }).then((secondResponse)=>{
            console.log(secondResponse)
            localStorage.setItem('access',secondResponse.data?.access)
          }).catch((error)=>{
            console.log(error);
            if(error.response.status==401){
             localStorage.removeItem('refresh');
             localStorage.removeItem('access');
             localStorage.removeItem('firstname');
            navigate('/');
            }
          })
        }
      })
    };
    if(accessToken){
      fetchUsername();
    }  
  },[])
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
               <span className="text-gray-400"> {} </span>
                </div>
            </li>
            <li className="flex gap-2 p-2">
              <div className="text-xl font-semibold">
               <span className=""> نام خانوادگی: </span>
               <span className="text-gray-400"> {} </span>
                </div>
            </li>
            <li className="flex gap-2 p-2">
              <div className="text-xl font-semibold">
               <span className=""> شماره موبایل: </span>
               <span className="text-gray-400"> {number} </span>
                </div>
            </li>
            <li className="flex gap-2 p-2">
              <div className="text-xl font-semibold">
               <span className=""> ایمیل: </span>
               <span className="text-gray-400"> {} </span>
                </div>
            </li>
            <li className="flex gap-2 p-2">
              <div className="text-xl font-semibold">
               <span className=""> نام کاربری: </span>
               <span className="text-gray-400"> {} </span>
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

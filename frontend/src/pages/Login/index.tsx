import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { useAuth } from "../../context-Api/AuthProvider";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

//fix regex for login

const Login: React.FC = () => {
  const { authData, setAuthData } = useAuth();
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  useEffect(() => {
    setUsernameFocus;
  }, []);

  const setUsernameFocus = () => {
    userRef.current!.focus();
  };
  const setPasswordFocus = () => {
    passRef.current!.focus();
  };

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/customer/login/", formData)
      .then((response: AxiosResponse) => {
        if (response.data.bool) {
          console.log(response.data);
          setAuthData({ ...authData, user: username, pass: password });
          axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/token/',
            data: {
              password : password,
              username : username,
            },
            headers: {
              'Content-Type': 'application/json'
            },
          }
          ).then((secondResponse: AxiosResponse) => {
            localStorage.setItem('refresh',secondResponse.data?.refresh);
            localStorage.setItem('access',secondResponse.data?.access);
            localStorage.setItem('firstname',response.data?.first_name);
            setSuccess(true);
          }).catch((error)=>{
            console.log(error);
          })
        } else {
          setErrMsg(response.data.msg);
          return Promise.resolve();
        }
      })
      .catch((error) => {
        console.log("bruh");
        console.log(error);
      });
  };

  return (
    <>
      <button className="flex justify-start absolute m-10">
        <NavLink to="/">
          <RxCross1 size={30} color="red" />
        </NavLink>
      </button>
      <div className=" bg-white h-screen flex items-center justify-center">
        {success ? (
          <div className="flex flex-col gap-12">
            <div className="text-5xl text-black font-bold flex justify-start mb-3">
              <div className="text-right">شما با موفقیت وارد شدید</div>
            </div>
            <button className=" bg-[#151515] text-white rounded-2xl text-4xl flex justify-center h-14 items-center gap-2 pb-1 focus:outline-none">
              <NavLink to="/" className="flex justify-center">
                <div className="mt-2">
                  <MdOutlineArrowBackIosNew size={30} />
                </div>
                <span>ادامه به خانه</span>
              </NavLink>
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleLogin}>
              {errMsg && (
                <div
                  ref={errRef}
                  className="absolute bg-red-400 text-white text-base font-semibold rounded-xl p-1 mt-16"
                >
                  {errMsg}
                </div>
              )}
              <div className="flex flex-col gap-5">
                <div className="text-4xl text-black font-bold flex justify-start mb-12">
                  <div className="text-right">ورود</div>
                </div>
                <button
                  onClick={setUsernameFocus}
                  type="button"
                  className="text-base text-black font-bold flex justify-start underline underline-offset-8 focus:outline-none"
                >
                  <div className="text-right">نام کاربری</div>
                </button>
                <div className="relative w-[400px] h-12 bg-gray-300 rounded-full flex items-center mb-3">
                  {/* <img
              src={IranFlagIcon}
              alt=""
              className="absolute left-2 w-6 h-auto rounded-2xl"
            />
            <div className="absolute left-9 text-gray-600 font-semibold">
              {toPersianNumber(98)}+
            </div> */}
                  <input
                    type="username"
                    dir="ltr"
                    placeholder="nfcGalaxy"
                    className="w-full h-full pl-4 pr-4 text-gray-800 rounded-2xl bg-gray-300 focus:outline-none text-left"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    ref={userRef}
                    required
                  />
                </div>
                <button
                  onClick={setPasswordFocus}
                  type="button"
                  className="text-base text-black font-bold flex justify-start underline underline-offset-8 focus:outline-none"
                >
                  <div className="text-right">رمز عبور</div>
                </button>
                <div className="relative w-[400px] h-12 bg-gray-300 rounded-full flex items-center mb-6">
                  <></>
                  <input
                    type="password"
                    dir="ltr"
                    placeholder="nfcGalaxy1234"
                    className="w-full h-full pl-4 pr-4 text-gray-800 rounded-2xl bg-gray-300 focus:outline-none text-left"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passRef}
                    required
                  />
                </div>
                <button className=" bg-[#151515] text-white rounded-2xl text-2xl flex justify-center h-14 items-center gap-2 pb-1 focus:outline-none">
                  <div className="mt-1">
                    <MdOutlineArrowBackIosNew size={18} />
                  </div>
                  <span>ادامه</span>
                </button>
                <div className="flex justify-start gap-1">
                  <div className="text-xl text-gray-500 font-semibold">
                    آیا هنوز عضو نیستید؟
                  </div>
                  <NavLink
                    to="/register"
                    className="text-xl text-gray-900 font-semibold"
                  >
                    اکنون عضو شوید
                  </NavLink>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Login;

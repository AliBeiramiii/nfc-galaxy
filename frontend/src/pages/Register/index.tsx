import React, { useState, useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context-Api/AuthProvider";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import IranFlagIcon from "../../assets/IranFlagIcon.png";
import { RxCross1 } from "react-icons/rx";


const Register: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   mobileNumber: '',
  //   email: '',
  //   username: '',
  //   password: ''
  // });

  const { setAuthData } = useAuth();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setUsernameFocus;
  }, []);

  const setUsernameFocus = () => {
    firstNameRef.current!.focus();
  };

  const toPersianNumber = (number: number): string => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .replace(/\d/g, (digit) => persianNumbers[parseInt(digit)]);
  };

  const formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("email", email);
  formData.append("username", username);
  formData.append("password", password);
  formData.append("mobileNumber", mobileNumber);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  const handleRegister = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://127.0.0.1:8000/api/customer/register/",
        formData
      );
      console.log(response.data); // Log the response from the API
      // Optionally, you can redirect the user to a success page or perform other actions based on the API response
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <>
    <button className="flex justify-start absolute m-10">
      <NavLink to="/">
      <RxCross1 size={30} color="red"/>
      </NavLink>
    </button>
    <div className=" bg-white h-screen flex items-center justify-center">
      {success ? (
        <div className="flex flex-col gap-12">
          <div className="text-5xl text-black font-bold flex justify-start mb-3">
            <div className="text-right">شما با موفقیت ثبت نام شدید</div>
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
          <form onSubmit={handleRegister}>
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
                <div className="text-right">عضویت</div>
              </div>
              <div className="relative w-[400px] h-12 bg-gray-300 rounded-full flex items-center mb-3">
                <input
                  type="text"
                  placeholder="نام"
                  className="w-full h-full pl-4 pr-4 text-gray-800 rounded-2xl bg-gray-300 focus:outline-none"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  ref={firstNameRef}
                  required
                />
              </div>
              <div className="relative w-[400px] h-12 bg-gray-300 rounded-full flex items-center mb-3">
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  className="w-full h-full pl-4 pr-4 text-gray-800 rounded-2xl bg-gray-300 focus:outline-none"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="relative w-[400px] h-12 bg-gray-300 rounded-full flex items-center mb-3">
                <input
                  type="username"
                  dir={username ? 'ltr' : 'rtl'}
                  placeholder="نام کاربری"
                  className="w-full h-full pl-4 pr-4 text-gray-800 rounded-2xl bg-gray-300 focus:outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="relative w-[400px] h-12 bg-gray-300 rounded-full flex items-center mb-3">
                <input
                  type="email"
                  dir={email ? 'ltr' : 'rtl'}
                  placeholder="آدرس ایمیل"
                  className="w-full h-full pl-4 pr-4 text-gray-800 rounded-2xl bg-gray-300 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative w-[400px] h-12 bg-gray-300 rounded-full flex items-center mb-3">
                <img
                  src={IranFlagIcon}
                  alt=""
                  className="absolute left-2 w-6 h-auto rounded-2xl"
                />
                <div className="absolute left-9 text-gray-600 font-semibold">
                  {toPersianNumber(98)}+
                </div>
                <input
                  type="username"
                  dir="ltr"
                  placeholder="9123456789"
                  className="w-full h-full pl-20 pr-4 text-gray-800 rounded-2xl bg-gray-300 focus:outline-none text-left"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>
              <div className="relative w-[400px] h-12 bg-gray-300 rounded-full flex items-center mb-3">
                <input
                  type="password"
                  dir={password ? 'ltr' : 'rtl'}
                  placeholder="رمز عبور"
                  className="w-full h-full pl-4 pr-4 text-gray-800 rounded-2xl bg-gray-300 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <div className="text-xl text-gray-500 font-semibold">قبلا عضو شدید؟</div>
              <NavLink to="/login" className="text-xl text-gray-900 font-semibold">اکنون وارد شوید</NavLink>
            </div>
            </div>
          </form>
        </>
      )}
    </div>
    </>
  );
};

export default Register;

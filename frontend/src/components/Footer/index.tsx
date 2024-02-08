import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { RiTwitterXLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { ImYoutube } from "react-icons/im";

const Footer:React.FC = () => {
    const handleYoutubeRedirect = () => {
        window.open("https://www.youtube.com/@nfcgalaxy", "_blank");
      };
      const handleTwitterRedirect = () => {
        window.open("https://twitter.com/nfcgalaxy", "_blank");
      };
      const handleInstagramRedirect = () => {
        window.open("https://instagram.com/nfcgalaxy", "_blank");
      };
  return (
    <div className=" bg-white flex justify-center gap-10 min-h-[280px] p-5 mb-2">
        <div className="flex flex-col gap-3 text-right basis-1/3 pb-10">
            <div className="text-black text-3xl font-semibold pb-1">کهکشان NFC</div>
            <div className="text-black text-lg font-medium pb-3">مدرن تر از قبل زندگی کن</div>
            <div className="text-right font-normal text-lg pb-1 text-gray-600">
            خوش آمدید به NFC galaxy، مقصد نهایی برای کیفیت و ظرافت در کارت‌های
            ویزیت ان اف سی. ما به عنوان تیمی از افراد متخصص...
            </div>
            <NavLink
            to="/about-us"
            className="flex justify-end gap-5 text-gray-900"
          >
            <div className="text-center font-normal text-lg">بیشتر بخوانید</div>
            <div className="pt-1 mr-[-10px]">
              <MdOutlineArrowBackIosNew size={20} />
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center text-right basis-1/3 pr-32 pb-10">
            <div className="flex self-right text-black text-3xl font-medium pb-5">اطلاعات تماس</div>
            <div className="flex self-right text-gray-600 text-lg font-normal pb-3">ایمیل:<span> info@nfcgalaxy.com</span></div></div>
        <div className="flex flex-col text-right basis-1/3 items-center pt-10">
            <div className="text-black text-4xl font-semibold pb-4">باهم، در نجات طبیعت</div>
            <div className="text-black text-3xl font-medium pb-4">شبکه های اجتماعی ما</div>
            <ul className="flex gap-6 pt-3mt-1">
            <li className="h-[50px]">
              <button
                className="mt-[-3px] hover:mt-[-7px] text-black font-bold py-2 rounded"
                onClick={handleInstagramRedirect}
              >
                <SiInstagram size={25} />
              </button>
            </li>
            <li className="h-[50px]">
              <button
                className="mt-[-3px] hover:mt-[-7px] text-black font-bold py-2 rounded"
                onClick={handleTwitterRedirect}
              >
                <RiTwitterXLine size={25} />
              </button>
            </li>
            <li className="h-[50px]">
              <button
                className="mt-[-3px] hover:mt-[-7px] text-black font-bold py-2 rounded"
                onClick={handleYoutubeRedirect}
              >
                <ImYoutube size={28} />
              </button>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Footer
import React, { useContext, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import blackCard1 from "../../assets/BlackNfcCard1.png";
import { GrList } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import BlackNfcCards1 from "../../assets/BlackNfcCards1.png";
import RedNfcCards1 from "../../assets/RedNfcCards1.png";
import BlueNfcCards1 from "../../assets/BlueNfcCards1.png";
import ImageGallery from "react-image-gallery";
import Footer from "../../components/Footer";
import AuthContext, { useAuth } from "../../context-Api/AuthProvider";

const HomePage: React.FC = () => {
  const imgRef = useRef<ImageGallery>(null);
  const {authData, setAuthData} = useAuth();
  const images = [
    {
      original: BlackNfcCards1,
      thumbnail: BlackNfcCards1,
    },
    {
      original: RedNfcCards1,
      thumbnail: RedNfcCards1,
    },
    {
      original: BlueNfcCards1,
      thumbnail: BlueNfcCards1,
    },
  ];
  const [cardShowBg, setCardShowBg] = useState<string>("bg-[#1D1D1D]");
  const handleSlideChange = (currentIndex: number) => {
    if (currentIndex === 2) setCardShowBg("bg-[#1D77C9]");
    else if (currentIndex === 1) setCardShowBg("bg-[#D71436]");
    else setCardShowBg("bg-[#1D1D1D]");
  };
  return (
    <div className=" bg-white flex flex-col gap-4 h-screen">
      <div className=" bg-gradient-to-b from-black via-gray-900 to-gray-900 flex flex-col justify-center gap-14 h-[480px] border rounded-b-[60px]">
        <div className="flex flex-row justify-center gap-60">
          <img
            className="min-w-fit h-[380px] mt-[90px]"
            src={blackCard1}
            alt="BlackNfcCard"
          />
          <div className="flex flex-col text-white mt-3">
            <div className="text-center font-bold text-9xl pb-3">کهکشان</div>
            <div className="text-center font-bold text-9xl pb-3">NFC</div>
            <div className="text-center font-normal text-2xl pb-14">
              نسل جدید کارت ویزیت
            </div>
            <NavLink
              to="/shop"
              className="flex justify-center items-center gap-5 mt-[5px] hover:mt-[1px] hover:mb-[5px]"
            >
              <GrList size={30} />
              <span className="text-center font-bold text-3xl">
                مشاهده محصولات
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className=" bg-white flex flex-col justify-center gap-14 h-[250px] my-4 border border-hidden rounded-b-[60px]">
        <div className="flex flex-col text-black">
          <div className="text-center font-semibold text-6xl pb-10">
            مراحل خرید
          </div>
          <div className="text-center font-normal text-xl pb-8 text-gray-600">
            برای اطلاع از مراحل خرید و ثبت سفارش میتوانید ادامه مطلب را دنبال
            کنید.
          </div>
          <NavLink
            to="/product-purchase-steps"
            className="flex justify-end pl-64 gap-5 mt-[10px] hover:pl-[250px] text-gray-900"
          >
            <div className="text-center font-normal text-xl">ادامه مطلب</div>
            <div className="pt-1 mr-[-10px]">
              <MdOutlineArrowBackIosNew size={20} />
            </div>
          </NavLink>
        </div>
      </div>
      <div
        className={
          `flex flex-row justify-center min-h-[960px] my-12 border border-hidden rounded-[60px] ` +
          cardShowBg
        }
      >
        <ul className="flex flex-col gap-16 justify-center basis-1/3">
          <li className="flex self-end gap-3 text-white font-normal text-xl">
            <span>کیفیت</span>
            <div className="mt-1">
              <FaCircle size={20} />
            </div>
          </li>
          <li className="flex self-end gap-3 text-white font-normal text-xl">
            <span>طراحی بر اساس سلیقه شما</span>
            <div className="mt-1">
              <FaCircle size={20} />
            </div>
          </li>
          <li className="flex self-end gap-3 text-white font-normal text-xl">
            <span>ارسال رایگان به سراسر کشور</span>
            <div className="mt-1">
              <FaCircle size={20} />
            </div>
          </li>
        </ul>
        <div className="flex flex-col justify-center basis-1/3 focus:outline-none">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            renderCustomControls={() => null}
            showNav={false}
            thumbnailPosition="bottom"
            onSlide={(currentIndex: number) => handleSlideChange(currentIndex)}
            renderItem={(item) => (
              <div className="pr-32 pb-10">
                <img
                  src={item.original}
                  alt={item.originalAlt}
                  className="object-contain max-w-[400px] w-full focus:outline-none"
                />
              </div>
            )}
          />
        </div>
        <div className="flex flex-col justify-center basis-1/3 text-right">
          <div className="flex text-white font-bold text-4xl pb-8">
            رنگ و طرحتو خودت انتخاب کن
          </div>
          <div className="flex text-white font-bold text-xl text-right pb-10">
            یک کارت با سلیقه شخصی، با امکانات نامحدود
          </div>
          <NavLink to="/shop" className="flex mt-2 h-[50px]">
            <button className="flex justify-center border border-hidden rounded-3xl h-[40px] w-[110px] items-center bg-gray-100 text-black mt-[10px] hover:mt-[6px] hover:mb-[1px]">
              محصولات
            </button>
          </NavLink>
        </div>
      </div>
      <div className=" bg-white flex flex-col justify-center gap-14 h-[250px] my-8 border border-hidden rounded-[60px]">
        <div className="flex flex-col text-black">
          <div className="text-center font-semibold text-6xl pb-10">
            درباره ما
          </div>
          <div className="text-right font-normal text-lg px-40 pb-1 text-gray-600">
            خوش آمدید به NFC galaxy، مقصد نهایی برای کیفیت و ظرافت در کارت‌های
            ویزیت ان اف سی. ما به عنوان تیمی از افراد متخصص در طراحی و تولید
            کارت‌های ویزیت با استفاده از فناوری‌های پیشرفته، به ارائه محصولاتی
            منحصر به فرد و شگفت‌انگیز در دسته‌ی کارت‌های ویزیت ان اف سی
            می‌پردازیم. از طراحی‌های ساده و حرفه‌ای گرفته تا مدل‌های باورنکردنی
            و هنری، مجموعه‌ی گسترده‌ای از کارت‌های ویزیت ان اف سی را در اختیار
            شما قرار می‌دهیم. با افتخار اعلام می‌کنیم که…
          </div>
          <NavLink
            to="/about-us"
            className="flex justify-end pl-40 gap-5 mt-[10px] hover:pl-[250px] text-gray-900"
          >
            <div className="text-center font-normal text-xl">بیشتر بخوانید</div>
            <div className="pt-1 mr-[-10px]">
              <MdOutlineArrowBackIosNew size={20} />
            </div>
          </NavLink>
        </div>
      </div>
      <div className=" bg-[#303030] flex justify-center gap-14 min-h-[680px] mt-8 border border-hidden rounded-t-[60px]">
        <div className="flex flex-col justify-between text-white">
          <div>
          <div className="text-center font-normal text-6xl pt-10 pb-5">
            محصولات
          </div>
          <div className="flex self-center bg-white w-[330px] h-[2px]"></div>
        </div>
          </div>
        <div className=""></div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;

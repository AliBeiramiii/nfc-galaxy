import React, { useState } from "react";
import Footer from "../../components/Footer";
import ColorButton from "../../components/ColorButton";
import { IoMdRefresh } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";

interface productPageProps {
  productTitle: string;
  productDesc: string;
  productPrice: string;
  colors: string;
  productID: number;
}

const Product: React.FC<productPageProps> = ({
  productTitle,
  productDesc,
  productPrice,
  colors,
  productID,
}) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="h-screen justify-between flex flex-col">
        <div className="flex flex-col justify-start mt-[100px] gap-20 mx-40">
          <div className="flex justify-start gap-20 mx-10 mt-20">
            <div className="flex h-[450px] w-[450px] bg-red-600"></div>
            <div className="flex flex-col justify-start gap-4">
              <div className="flex text-black text-3xl font-bold mt-10">
                {productTitle}
              </div>
              <div className="flex text-txtCol text-xl font-semibold">
                {productDesc}
              </div>
              <div className="flex text-black text-xl font-bold mt-5">
                قیمت : {productPrice} تومان
              </div>
              <div className="flex justify-start gap-2 mt-10 max-h-8">
                <div className="flex text-black pl-3 text-xl font-semibold">
                  انتخاب رنگ:
                </div>
                <ColorButton
                  color="bg-[#2e77bd]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
                <ColorButton
                  color="bg-[#6c62ac]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
                <ColorButton
                  color="bg-[#feef76]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
                <ColorButton
                  color="bg-[#18665c]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
                <ColorButton
                  color="bg-[#f0f0f0]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
                <ColorButton
                  color="bg-[#e0218a]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
                <ColorButton
                  color="bg-[#52666f]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
                <ColorButton
                  color="bg-[#db1e39]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
                <ColorButton
                  color="bg-[#0f0f0f]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
                <ColorButton
                  color="bg-[#f47d62]"
                  onColorSelect={handleColorSelect}
                  btnSelectedColor={selectedColor}
                />
              </div>
              <div className="h-4 mr-4">
                {selectedColor && (
                  <button
                    className="bg-gray-200 text-black rounded-lg text-lg p-1 flex items-center gap-2"
                    onClick={() => {
                      setSelectedColor("");
                    }}
                  >
                    <span>پاک کردن</span>
                    <IoMdRefresh size={28} />
                  </button>
                )}
              </div>
              <div className="flex justify-center h-16 text-xl">
                <button
                  className={`flex justify-center border bg-gray-800 text-white hover:bg-gray-900 border-black rounded-3xl h-[48px] p-3 px-4 items-center mt-2 hover:mt-[6px] hover:mb-[10px]`}
                >
                  <div className="">افزودن به سبد خرید</div>
                </button>
              </div>
              <div className="flex justify-center gap-10 mr-14 text-lg mt-5">
                <div className="flex justify-between items-center gap-1">
                  <FaTruckFast size={20} />
                  <div className=" text-txtCol2">ارسال رایگان</div>
                </div>
                <div className="flex justify-between items-center gap-1">
                  <FaAddressCard size={20} />
                  <div className=" text-txtCol2">تضمین کیفیت</div>
                </div>
                <div className="flex justify-between"></div>
              </div>
            </div>
          </div>
          <div className="mx-48 text-txtCol2 flex flex-col justify-start mt-10">
            <div className="flex flex-col">
              <div className="font-bold">
                محصول منحصر به فرد که شما رو متفاوت میکنه.
              </div>
              <div className="font-normal mt-6">
                کارت ویزیت NFC یک کارت هوشمند است که از تکنولوژی NFC برای انتقال
                اطلاعات شخصی و تماس به صورت بی‌سیم استفاده می‌کند. این کارت‌ها
                برای معرفی شخصی در جلسات کسب و کار و ارتباط با دیگران مورد
                استفاده قرار می‌گیرند. طراحی شیک و امکانات اضافی مانند QR کد و
                رمزگذاری امنیتی از جمله ویژگی‌های آن‌ها می‌باشد.
              </div>
              <div className="font-bold mt-8">
                میخوای کارتی دستت باشه که هیچ کس مثلشو ندیده؟
              </div>
              <div className="font-normal mt-6">
                در این نوع از کارت ویزیت ها،اسم یا کلمه انتخابی شما با ترکیب
                رنگی خریداری شده به صورت گرافیکی طراحی میشه و بر روی کارت چاپ
                میشه.
              </div>
              <div className="font-normal mt-5">
                “لطفا پس از خرید اسم یا کلمه مورد نظر خود را، به آیدی تلگرامی
                nfcgalaxy و یا به اینستاگرام nfcgalaxy ارسال کنید.”
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-4xl mt-10">توضیحات تکمیلی</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="h-1" />
    </>
  );
};

export default Product;

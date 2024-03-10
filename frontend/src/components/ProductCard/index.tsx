import React from "react";
import { NavLink } from "react-router-dom";

interface ImageComponentProps {
  imageUrl: string;
  dirUrl: string;
  price: string;
  productName: string;
}

const ProductCard: React.FC<ImageComponentProps> = ({
  imageUrl,
  dirUrl,
  price,
  productName,
}) => {
  return (
    <>
      <NavLink
        className="flex flex-col justify-start bg-white rounded-b-xl gap-1 pb-5"
        to={dirUrl}
      >
        <div className="flex">
          <img
            className="min-h-fit w-[380px]"
            src={imageUrl}
            alt="NFC-Galaxy-Card"
          />
        </div>
        <div className="flex text-black font-bold justify-center text-lg text-balance w-[380px] text-center">{productName}</div>
        <div className="flex text-txtCol  justify-center text-lg">NFC</div>
        <div className="flex text-txtCol font-semibold justify-center text-xl">
        {price} تومان  
        </div>
        <div className="flex mt-2 h-[50px] justify-center">
            <button className="flex justify-center border border-hidden text-xl rounded-3xl h-[50px] items-center bg-black text-gray-100 mt-[10px] hover:mt-[6px] hover:mb-[1px] p-4">
              انتخاب گزینه ها
            </button>
          </div>
      </NavLink>
    </>
  );
};

export default ProductCard;

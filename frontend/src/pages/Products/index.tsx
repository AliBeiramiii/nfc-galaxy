import React from "react";
import ProductCard from "../../components/ProductCard";
import BlackBaseNfcCard from "../../assets/BlackBaseNfcCards.jpg";
import BlackGraphicalNfcCard from "../../assets/BlackGraphicalNfcCards.jpg";
import GrayRedesignNfcCard from "../../assets/GrayRedesignNfcCards.jpg";
import Footer from "../../components/Footer";

const Products = () => {
  return (
    <>
    <div className="h-screen justify-between flex flex-col">
      <div className="flex flex-col justify-between mt-[100px] gap-20">
        <div className="flex gap-5 text-black text-5xl font-bold justify-center">
          <div className="flex flex-col gap-5 text-center">
            فروشگاه
            <div className="h-1 bg-black w-[190px] self-center" />
          </div>
        </div>
        <div className="flex gap-10 justify-center">
          <ProductCard
            imageUrl={BlackGraphicalNfcCard}
            dirUrl="product/NFC-Graphical-Card"
            price={"1,000,000"}
            productName="کارت ویزیت ان اف سی گرافیکی"
          />
          <ProductCard
            imageUrl={GrayRedesignNfcCard}
            dirUrl="product/NFC-Redesign-Card"
            price={"1,200,000"}
            productName="کارت ویزیت ان اف سی (طراحی دوباره کارت ویزیت آماده شما)"
          />
          <ProductCard
            imageUrl={BlackBaseNfcCard}
            dirUrl="product/NFC-Base-Card"
            price={"450,000"}
            productName="کارت ویزیت ان اف سی Base"
          />
        </div>
      </div>
      <Footer />
    </div>
    <div className="h-1"/>
    </>
  );
};

export default Products;

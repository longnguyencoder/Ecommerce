import React from "react";

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div>
        <img className="h-full w-full object-cover object-left-top"
          src="https://adobus.com.vn/wp-content/uploads/CHIP-KHOAN-TOC-DO-CAO-DFT-HP-CAU-TAO-247x296-1.jpg.webp"
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
            <p>CHIP KHOAN TỐC ĐỘ CAO DFT – HP</p>
            <a className="font-bold text-red-500 opacity-60" href="https://adobus.com.vn/san-pham/mui-khoan-toc-do-cao-dft-hp">CHIP KHOAN TỐC ĐỘ CAO DFT – HP SERIES φ 5 – 17.60 mm</a>
        </div>
        <div className="flex items-center space-x-2">
                <p className="font-semibold">$199</p>
                <p className="line-through opacity-50">$1999</p>
                <p className="text-green-600 font-semibold ">70%off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

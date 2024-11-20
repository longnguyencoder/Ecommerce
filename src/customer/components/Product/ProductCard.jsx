import React from "react";
import "./ProduitCard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15 rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p>{product.title}</p>
          <a
            className="font-bold text-red-500 opacity-60"
            href="https://adobus.com.vn/san-pham/mui-khoan-toc-do-cao-dft-hp"
          >
            {product.brand}
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">${product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold ">{product.discountPersent}%off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

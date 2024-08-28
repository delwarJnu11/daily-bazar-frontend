import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Image from "../common/Image";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="w-full p-4">
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden group">
        <Image
          className="h-[250px]"
          src={
            "https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/product/1.jpg"
          }
        />
        <div className="p-4 relative">
          <p className="text-[13px] text-gray-600 uppercase tracking-wide font-medium my-2">
            Vegetables
          </p>
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-1 mb-3">
            Fresh Organic Villa Farm Lemon 500gm Pack
          </h2>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold text-green-600">
              BDT. 200.00 TK
            </span>
            <span className="text-sm text-gray-500 line-through">
              BDT. 250.00 TK
            </span>
          </div>
          <div className="absolute top-3 right-0 transform translate-x-[7.25rem] transition-transform duration-700 ease-in-out group-hover:translate-x-0 flex gap-1 p-1">
            <div className="w-8 h-8 border border-gray-400 p-1 text-black rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out flex items-center justify-center">
              <CiHeart size={35} className="w-full" />
            </div>
            <div
              className="w-8 h-8 border border-gray-400 p-1 text-black rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out flex items-center justify-center"
              onClick={handleCloseModal}
            >
              <IoEyeOutline size={35} className="w-full" />
            </div>
            <div className="w-8 h-8 border border-gray-400 p-1 text-black rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out flex items-center justify-center">
              <BsCart2 size={35} className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <ProductDetailsModal
          isOpen={isOpen}
          onHandleOverlayClick={handleOverlayClick}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};
export default ProductCard;

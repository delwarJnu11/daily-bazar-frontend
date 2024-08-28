import { useEffect, useState } from "react";
import { GrStar } from "react-icons/gr";
import { HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Image from "../common/Image";

const ProductDetailsModal = ({ onHandleOverlayClick, onCloseModal }) => {
  const [quantity, setQuantity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onHandleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto relative flex transform transition-transform duration-700 ease-out overflow-hidden p-6 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Product Image */}
        <div className="w-1/2 h-full mix-blend-multiply">
          <Image
            className="mix-blend-multiply object-fit"
            src={
              "https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/product/1.jpg"
            }
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="w-1/2 space-y-5 px-6">
          <h2 className="text-xl font-medium line-clamp-2 mt-3">
            Fresh Organic Villa Farm Lemon 500gm Pack
          </h2>
          <p className="text-gray-700">
            This is a detailed description of the product. It highlights the
            features and benefits of the product.
          </p>
          <div className="flex items-center gap-1">
            <GrStar size={20} color="orange" />
            <GrStar size={20} color="orange" />
            <GrStar size={20} color="orange" />
            <GrStar size={20} color="orange" />
            <GrStar size={20} color="orange" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-green-600">
              BDT 500.00 TK
            </span>
            <span className="text-gray-500 line-through ml-2">
              BDT 650.00 TK
            </span>
          </div>
          <div className="flex items-center">
            <button
              className={`bg-gray-300 text-center px-4 py-2 rounded-l-sm rounded-r-none ${
                quantity <= 1 && "cursor-not-allowed"
              }`}
              disabled={quantity === 1}
              onClick={() => {
                if (parseInt(quantity) > 1) setQuantity(parseInt(quantity) - 1);
              }}
            >
              <HiMinusSmall />
            </button>
            <strong className="bg-white text-base font-medium px-4 py-[3px] border-t border-gray-300 border-b">
              {quantity}
            </strong>
            <button
              className="bg-gray-300 text-center px-4 py-2 rounded-r-sm rounded-l-none"
              onClick={() => setQuantity(parseInt(quantity) + 1)}
            >
              <HiPlusSmall />
            </button>
          </div>
          <button className="bg-green-600 text-white font-medium text-sm uppercase px-6 py-2 rounded-sm transition-transform ease-in-out duration-700 hover:scale-105">
            Add To Cart
          </button>

          <div className="w-8 h-8 absolute -top-[17px] right-1 border border-red-400 rounded-full flex items-center justify-center">
            <button onClick={onCloseModal} className="p-2" title="cancel">
              <RxCross2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsModal;

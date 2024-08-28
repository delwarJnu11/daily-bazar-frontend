import { FiSearch } from "react-icons/fi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import logo from "./../../assets/images/logo.png";

const HeaderTop = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-4 gap-4">
      {/* Logo */}
      <div className="w-full lg:w-auto text-center">
        <img src={logo} alt="Carrot Logo" className="mx-auto" />
      </div>

      {/* Search Box */}
      <form className="w-full lg:w-1/2 xl:w-1/3 flex items-center border border-primary rounded-sm overflow-hidden">
        <input
          type="search"
          name="search"
          id="search"
          className="w-full p-4 focus:ring-2 focus:ring-green-500 focus:outline-none border-r border-primary"
          placeholder="Search For items..."
        />
        <select
          name="category"
          id="category"
          className="hidden lg:block p-4 border-primary focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="all">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="fish&meat">Fish & Meat</option>
          <option value="grocery">Grocery</option>
        </select>
        <button type="submit" className="p-4 bg-primary text-white">
          <FiSearch size={24} />
        </button>
      </form>

      {/* Account, Favorites, Cart Icons */}
      <div className="hidden md:flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-10 w-full lg:w-auto">
        <div className="flex items-center gap-2 text-xl font-medium">
          <PiEnvelopeSimpleThin size={24} />
          <span>dailybazar@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-xl font-medium">
          <MdOutlineLocalPhone size={24} />
          <span>+88 017 4949 76 76</span>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;

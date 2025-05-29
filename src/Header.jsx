import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = ({ cartCount, openCartModal }) => {
  return (
    <div
      className="w-full flex justify-around items-center p-3 bg-gradient-to-r from-cyan-950 via-cyan-900 to-cyan-800
     text-white  text-lg"
    >
      <button
        className="cursor-pointer hover:underline font-[DM_Serif_Text] text-2xl"
        onClick={() => window.location.reload()}
      >
        e-Shop
      </button>
      <div className="relative flex w-1/3">
      <CiSearch className="absolute size-6 left-1 top-2" />
        <input
          className="w-full h-10 pl-8 font-serif border border-white rounded-full"
          type="text"
          placeholder="Search here"
        />
        
      </div>
      <div className="flex items-center">
        <div>
          <button
            className="flex items-center gap-1 cursor-pointer "
            onClick={openCartModal}
          >
            <FaShoppingCart className="size-5" /> <span className="font-[DM_Serif_Text] font-bold">({cartCount})</span>
          </button>
        </div>
        <div className="ml-8 font-serif">
          <button className="cursor-pointer">
            <FaUser className="inline mr-1" />
            Login | Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

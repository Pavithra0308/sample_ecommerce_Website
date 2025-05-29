import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartCount, openCartModal }) => {
  return (
    <div className="w-full flex justify-around p-3 bg-gradient-to-r from-cyan-950 via-cyan-900 to-cyan-800
     text-white font-[DM_Serif_Text] text-lg">
      <button
        className="cursor-pointer hover:underline"
        onClick={() => window.location.reload()}
      >
        Home
      </button>
      <button className="flex items-center gap-3 cursor-pointer"  onClick={openCartModal}>
        <FaShoppingCart /> <span>({cartCount})</span>
      </button>
    </div>
  );
};

export default Header;

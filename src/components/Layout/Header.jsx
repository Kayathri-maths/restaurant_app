import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-between items-center px-[10%] shadow-lg z-10">
      <h1 className="text-2xl font-bold">ReactMeals</h1>

      <button
        onClick={onShowCart}
        className="flex items-center gap-3 bg-[#4d1601] px-6 py-2 rounded-full hover:bg-[#2c0d00] transition"
      >
        <span>🛒</span>
        <span>Your Cart</span>
        <span className="bg-[#b94517] px-3 py-1 rounded-full font-bold">
          {numberOfCartItems}
        </span>
      </button>
    </header>
  );
};

export default Header;

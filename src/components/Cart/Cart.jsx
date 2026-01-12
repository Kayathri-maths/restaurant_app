import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={onClose}>
      <ul className="max-h-80 overflow-auto">
        {cartCtx.items.map((item) => (
          <li key={item.id} className="border-b py-4 flex justify-between">
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <div className="flex gap-4 mt-1">
                <span className="text-[#8a2b06] font-bold">
                  ${item.price.toFixed(2)}
                </span>
                <span className="border px-2 rounded">x {item.amount}</span>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => removeItemHandler(item.id)}
                className="border px-3 rounded text-[#8a2b06]"
              >
                −
              </button>
              <button
                onClick={() => addItemHandler(item)}
                className="border px-3 rounded text-[#8a2b06]"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center font-bold text-xl my-4">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="border border-[#8a2b06] text-[#8a2b06] px-6 py-2 rounded-full"
        >
          Close
        </button>

        <button className="bg-[#8a2b06] text-white px-6 py-2 rounded-full">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;

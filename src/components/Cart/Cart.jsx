import Modal from "../UI/Modal";

const Cart = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div>
        {/* Item */}
        <div className="flex justify-between mb-4">
          <h2 className="font-bold">Sushi</h2>
          <span className="font-bold">$22.99</span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="border px-3 py-1 rounded">x 2</span>
          <div className="flex gap-2">
            <button className="border px-3 rounded">−</button>
            <button className="border px-3 rounded">+</button>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center font-bold text-xl mb-6">
          <span>Total Amount</span>
          <span>$35.62</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border border-[#8a2b06] text-[#8a2b06] px-6 py-2 rounded-full hover:bg-gray-100"
          >
            Close
          </button>

          <button className="bg-[#8a2b06] text-white px-6 py-2 rounded-full hover:bg-[#641e03]">
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

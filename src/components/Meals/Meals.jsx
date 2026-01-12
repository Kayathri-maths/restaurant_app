import { useContext } from "react";
import CartContext from "../../store/cart-context";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  const cartCtx = useContext(CartContext);

  return (
    <section className="max-w-3xl mx-auto mt-32 bg-white rounded-xl shadow-lg p-6">
      <ul className="divide-y">
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id} className="py-4 flex justify-between items-center">
            {/* Left side: meal info */}
            <div>
              <h3 className="font-bold text-lg">{meal.name}</h3>
              <p className="italic text-gray-500">{meal.description}</p>
              <p className="text-orange-700 font-bold mt-1">
                ${meal.price.toFixed(2)}
              </p>
            </div>

            {/* Right side: form */}
            <form className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <label className="font-semibold">Amount</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  defaultValue="1"
                  className="w-12 border rounded px-2 py-1 text-center"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  cartCtx.addItem({
                    id: meal.id,
                    name: meal.name,
                    price: meal.price,
                    amount: 1,
                  })
                }
                className="bg-[#8a2b06] text-white px-6 py-1 rounded-full"
              >
                + Add
              </button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Meals;

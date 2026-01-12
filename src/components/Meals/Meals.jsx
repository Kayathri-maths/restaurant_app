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
  return (
    <section className="max-w-3xl mx-auto mt-32 bg-white rounded-xl shadow-lg p-6">
      <ul className="divide-y">
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id} className="py-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{meal.name}</h3>
              <p className="italic text-gray-500">{meal.description}</p>
              <p className="text-orange-700 font-bold mt-1">
                ${meal.price.toFixed(2)}
              </p>
            </div>

            <button className="bg-[#8a2b06] text-white px-4 py-1 rounded-full hover:bg-[#641e03] transition">
              + Add
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Meals;

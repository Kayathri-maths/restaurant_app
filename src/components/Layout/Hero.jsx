import heroImg from "../../assets/meals_banner.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[30rem] mt-20">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Delicious Food"
        className="w-full h-full object-cover"
      />

      {/* Overlay Card */}
      <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 bg-[#383838] text-white w-[90%] max-w-3xl p-6 rounded-xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          Delicious Food, Delivered To You
        </h2>

        <p className="text-gray-300 mb-2">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>

        <p className="text-gray-300">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default Hero;

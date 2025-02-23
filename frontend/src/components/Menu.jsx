import { useState } from "react";
import { menu_list, food_list } from "../assets/assets";
import { assets } from "../assets/assets";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredFood, setFilteredFood] = useState(food_list);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFilteredFood(food_list.filter((food) => food.category === category));
  };

  return (
    <div className="p-6 mb-[185px]" id="menu">
      {/* Header Section */}
      <div className="flex flex-col justify-center text-center mb-10">
        <span className="mb-2 text-lg font-semibold text-[#EB5757]">OUR MENU</span>
        <span className="text-3xl sm:text-4xl font-bold text-[#333333]">
          Menu That Always <br /> Makes You Fall In Love
        </span>
      </div>

      {/* Scrollable & Centered Menu List */}
      <div className="relative w-full">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 my-10 px-6 w-max mx-auto">
            {menu_list.map((menu, index) => (
              <button
                key={index}
                className="flex flex-col items-center gap-2 p-2 transition"
                onClick={() => handleCategoryClick(menu.menu_name)}
              >
                <img
                  src={menu.menu_image}
                  alt={menu.menu_name}
                  className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-gray-300 ${
                    selectedCategory === menu.menu_name ? "ring-4 ring-[#EB5757]" : ""
                  }`}
                />
                <span className="text-sm font-medium text-gray-700">{menu.menu_name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* HR (Always Centered) */}
      <div className="flex justify-center">
        <hr className="border-t-4 border-[#EB5757] w-40 sm:w-1/3 mx-auto my-10" />
      </div>

      {/* Food List */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFood.map((food) => (
          <div key={food._id} className="p-4 rounded-2xl shadow-lg hover:shadow-xl transition bg-white">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-44 sm:h-52 object-cover rounded-2xl"
            />
            <div className="mt-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>
              <img src={assets.rating_starts} alt="Rating" className="w-24 h-6" />
            </div>
            <p className="text-sm text-gray-600">{food.description}</p>
            <p className="mt-2 text-base font-bold text-[#EB5757]">${food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

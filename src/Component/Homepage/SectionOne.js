import React from "react";
import RestaurantFood from "../../Assets/restaurantfood.jpg";

function SectionOne() {
  return (
    <div className="flex justify-center bg-emerald-900 mt-4">
      <div className="bg-emerald-900">
        <div className="flex justify-around gap-11">
          <div className="">
            <h1 className="text-[#F4CE14] mt-5 ">Little Lemon</h1>
            <h2 className="text-white mt-3">Chicago</h2>
            <p className="text-white text-xl mt-3">
              We are a family owned Mediterranean restaurant, <br />
              focused on traditional recipes served with a modern twist.
            </p>
          </div>
          <div className="w-52">
            <img
              src={RestaurantFood}
              alt="Food Image"
              className="w-80 rounded-lg m-4 shadow-2xl shadow-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;

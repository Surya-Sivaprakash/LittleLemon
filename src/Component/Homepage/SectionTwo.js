import React from "react";
import item1 from "../../Assets/item1.jpg";
import item2 from "../../Assets/item2.jpg";
import item3 from "../../Assets/item3.jpg";
const SectionTwo = () => {
  return (
    <div className="mt-28 block">
      <div className="mx-auto text-center">
        <h2>This week special!!!</h2>
      </div>
      <div className="flex mt-5 justify-center gap-10 max-sm:block">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div>
            <img class="w-full" src={item1} alt="Card Image" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Greek Salad <span className="ml-8 "> $12.99</span>
            </div>
            <p class="text-gray-700 text-base">
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chicago-style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </div>
          <div class="px-6 py-4">
            <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full shadow-xl">
              Order a delivery
            </button>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div>
            <img class="w-full" src={item2} alt="Card Image" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Greek Salad <span className="ml-8 "> $7.99</span>
            </div>
            <p class="text-gray-700 text-base">
              Our Bruschetta is made from grilled bread that has been spread
              with garlic and seasoned with salt and olive oil.
            </p>
          </div>
          <div class="px-6 py-4">
            <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full shadow-xl">
              Order a delivery
            </button>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div>
            <img class="w-full" src={item3} alt="Card Image" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Greek Salad <span className="ml-8 "> $6.99</span>
            </div>
            <p class="text-gray-700 text-base">
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
          </div>
          <div class="px-6 py-4">
            <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full shadow-xl">
              Order a delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

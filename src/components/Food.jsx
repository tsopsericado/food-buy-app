import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../context/Context";

function Food() {
  let navigate = useNavigate();

  function navig() {
    navigate("/fooddetails");
  }
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("foodData")) || [];
    setFoods([...localData]);
  }, []);
  console.log(foods);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  // Filter type all
  const filterType = (category) => {
    setFoods(
      foods.filter((item) => {
        return item.category === category;
      })
    );
  };

  console.log(filterType);

  //Filter by Price
  const filterPrice = (price) => {
    setFoods(
      foods.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Menu
      </h1>

      {/* {Filter Row} */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* {Filter Type} */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              // onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType()}
              className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
            <button
              onClick={() => filterType()}
              className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white"
            >
              Koki
            </button>
            <button
              onClick={() => filterType()}
              className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white"
            >
              legumes
            </button>
            <button
              onClick={() => filterType()}
              className="m-1 border-orange-600 text-orange hover:bg-orange-600 hover:text-white"
            ></button>
          </div>
        </div>
      </div>

      {/* {Display Foods} */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => {
          item.quantity = 1;
          return (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  Price:
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    Fcfa. {item.price}
                  </span>
                </p>
                <button
                  // type="button"
                  onClick={() => dispatch({ type: "ADD", payload: item })}
                  // onClick={() => navigate(`/fooddetails/${item.id}`)}
                  className="bg-blue-300 text-white px-2 p-1 rounded-full"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Food;

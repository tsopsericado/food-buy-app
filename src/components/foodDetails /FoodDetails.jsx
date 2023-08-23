/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext, MyContext } from "../../context/Context";
import './FoodDetails.css'

function FoodDetails() {
  // const handleclick = handleClick()
  const [currentFood, setCurrentFood] = React.useState(null);
  const params = useParams();
  const navigate = useNavigate();
  // const { name } = useContext(AppContext);
  const handleDelete = (index) => {
    const updatedItems = [...currentFood];
    updatedItems.splice(index, 1);
    setCurrentFood(updatedItems)
  }

  const { formData } = useContext(MyContext);

  React.useEffect(() => {
    console.log(" this params", params, params.id);
    const localData = JSON.parse(localStorage.getItem("foodData")) || [];
    const food = localData.find((item) => item.id === +params.id);

    setCurrentFood(food);
  }, [params]);

  console.log(setCurrentFood);

  const handlePurchase = () => {
    localStorage.setItem("foodToPurchaseId", params.id);

    navigate("/userinfos"); 
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-100 py-10">
      <div>
        <p className="header">Order and get delivered in less time</p>
      </div>
      <div className="food">
        <div className="details">
          <img
            src={currentFood?.image}
            height="300"
            width="400"
            className="image"
          />
        </div>
        <div className="">
          <ul>
            {currentFood.map((item, index) => (
                          <li className="text-xl bold ">Food name: {currentFood?.name}</li>
                          <li className="text-xl bold ">calories:{currentFood?.calories}</li>
                          <li className="text-xl bold ">price: {currentFood?.price}</li>
                          <li className="text-xl bold ">Description: {currentFood?.description}
                          </li>
            ))}

          </ul>
          <button
            onClick={handlePurchase}
            type="button"
            className="bg-orange-400 text-xl bold"
          >
            Purchase
          </button>
            <button className="bg-green-300 text-xl bold mx-5">update</button>

            <button className="bg-red-400 text-xl bold" onClick={() => handleDelete(index)}>delete</button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
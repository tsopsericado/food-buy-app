/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data/data";

function FoodDetails() {
  // const handleclick = handleClick()
  const [currentFood, setCurrentFood] = React.useState(null);
  const params = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    console.log(" this params", params, params.id);
    const [food] = data.filter((item) => item.id === +params.id);

    setCurrentFood(food);
  });

  return (
      <div className="flex justify-center border-orange-200 bg-red-200" >
        <p>Order and get delivered in less time</p>
        <div>
          <ul>
            <img src={currentFood?.image} height="100" width="250" className="rounded" />
            <li>Food.name: {currentFood?.name}</li>
            <li>calories:{currentFood?.calories}</li>
            <li>price: {currentFood?.price}</li>
            <li>Description: {currentFood?.description}</li>
          </ul>
          <button onClick={() =>{
            navigate("/userinfos");
          }} type='submit' className="bg-orange-400 ">Purchase</button>
        </div>
      </div>

  );
}

export default FoodDetails;

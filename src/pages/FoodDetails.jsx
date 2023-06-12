/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data/data";
import { AppContext, MyContext } from "../context/Context";

function FoodDetails() {
  // const handleclick = handleClick()
  const [currentFood, setCurrentFood] = React.useState(null);
  const params = useParams();
  const navigate = useNavigate();
  // const { name } = useContext(AppContext);

  const { formData } = useContext(MyContext);


  React.useEffect(() => {
    console.log(" this params", params, params.id);
    const [food] = data.filter((item) => item.id === +params.id);

    setCurrentFood(food); 
  }, [params]);

  return (
    <div className="justify-center border-orange-200 bg-red-200">
      <div>
      <p className="">Order and get delivered in less time</p>
      </div>
      <div className="py-5">
        <img
          src={currentFood?.image}
          height="30"
          width="300"
          className="rounded"
        />
        <ul>
          <li>Food name: {currentFood?.name}</li>
          <li>calories:{currentFood?.calories}</li>
          <li>price: {currentFood?.price}</li>
          <li>Description: {currentFood?.description}</li>
        </ul>
        <button
          onClick={() => {
            navigate("/userinfos");
          }}
          type="submit"
          className="bg-orange-400 "
        >
          Purchase
        </button>
      </div>
    </div>
  );
}

export default FoodDetails;

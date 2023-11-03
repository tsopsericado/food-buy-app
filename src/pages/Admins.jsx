import React, { useState } from "react";

export default function Admins() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    calories: "",
    category: "",
    description: "",
    image: "",
  });

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const clearForm = (e) => {
    const { image } = e.target;
    image.value = "";

    setFormData({
      id: "",
      name: "",
      price: "",
      calories: "",
      category: "",
      description: "",
      image: "",
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    setFormData((prev) => ({ ...prev, image: base64 }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.calories ||
      !formData.category ||
      !formData.description ||
      !formData.price
    ) {
      alert("input your form");
      return;
    }

    const localData = JSON.parse(localStorage.getItem("foodData")) || [];

    const newId =
      localData.length > 0 ? localData[localData.length - 1].id + 1 : 1;

    const newData = [...localData, { ...formData, id: newId }];

    localStorage.setItem("foodData", JSON.stringify(newData));

    clearForm(e);
  };

  return (
    <div className="p-4">
      <form
        className=" px-4 py-4 w-[35%] mx-auto bg-slate-50 border border-black"
        onSubmit={handleFormSubmit}
      >
        <div className="pb-5">
          <h1 className="text-[25px] font-bold">Admin DashBoard</h1>
          <p className="text-xl text-blue-600 italic">Create a New Item</p>
        </div>

        <div className="flex flex-row items-center justify-center w-full gap-4">
          <div>
            <label htmlFor="name" className="py-2">
              Name
            </label>
            <input
              name="name"
              placeholder="name"
              className="border border-gray-400 block  py-2 px-4 w-full focus:outline-none focus:border-teal-500"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="" className="py-2">
              Category
            </label>
            <input
              name="category"
              placeholder="Category"
              className="border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-teal-500"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, category: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full gap-4">
          <div>
            <label htmlFor="price" className="py-2">
              Price
            </label>
            <input
              name="Price"
              placeholder="Price"
              type="number"
              className="border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-teal-500"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, price: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="calorie" className=" py-2">
              Calories
            </label>
            <input
              name="calories"
              type="text"
              placeholder="Calories"
              className="border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-teal-500"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, calories: e.target.value }))
              }
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="description" className="py-2">
              Description
            </label>
            <input
              name="description"
              placeholder="Description"
              className="border border-gray-400 block py-2 px-4 w-full  focus:outline-none focus:border-teal-500"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <div />

            <div className="w-full">
              <label htmlFor="image" className="py-2">
                Image
              </label>
              <input
                type="file"
                name="image"
                placeholder="avatar"
                onChange={handleImageUpload}
                className="border border-gray-400 block py-2 px-4 w-full focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="border font-bold  bg-orange-300 py-1.5 px-20 my-5 focus:outline-none focus:border-teal-500"
        >
          Upload Item
        </button>
      </form>
    </div>
  );
}

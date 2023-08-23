import React, {  useState } from "react";

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
    <div className="bg-gradient-to-r from-orange-300 to-orange-100">
      <form
        className="px-4 py-6 my-32 max-w-3xl mx-auto space-y-6 border-x-orange-500 bg-orange-200"
        onSubmit={handleFormSubmit}
      >
        <div>
          <h1 className="text-2xl bold">Admin DashBoard</h1>
          <p className="text-xl text-blue-600 italic">Create a New Item</p>
        </div>
        <div className="w-1/2">
          <label htmlFor="image" className="float-left py-2">
            Image
          </label>
          <input
            type="file"
            name="image"
            placeholder="avatar"
            onChange={handleImageUpload}
            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="name" className="float-left py-2">
              Name
            </label>
            <input
              name="name"
              placeholder="name"
              className="border border-gray-400 block  py-2 px-4 w-full rounded  focus:outline-none focus:border-teal-500"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="" className="float-left py-2">
              Category
            </label>
            <input
              name="category"
              placeholder="Category"
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, category: e.target.value }))
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="price" className="float-left py-2">
            Price
          </label>
          <input
            name="Price"
            placeholder="Price"
            type="number"
            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="calorie" className="float-left py-2">
              Calories
            </label>
            <input
              name="calories"
              type="text"
              placeholder="Calories"
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, calories: e.target.value }))
              }
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="description" className="float-left py-2">
              Description
            </label>
            <input
              name="description"
              placeholder="Description"
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="border bg-orange-300 py-1.5 px-20 rounded border-violet-600 my-5 focus:outline-none focus:border-teal-500"
        >
          Upload Item
        </button>
      </form>
    </div>
  );
}

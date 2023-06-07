import React from "react";

function Admin() {
  const [formData, setFormData] = React.useState({
    id: "",
    name: "",
    calories: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  console.log(setFormData);

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

  const handleImageUpload = async (e) => {
    const base64 = await convertBase64(e.target.files[0]);
    setFormData((prev) => ({ ...prev, image: base64 }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.calories ||
      !formData.category ||
      !formData.image ||
      !formData.price ||
      !formData.description
    ) {
      alert("input all fields");
      console.log("fool");
      return;
    }

    const localdata = JSON.parse(localStorage.getItem("data")) || [];
    const id = localdata.length > 0 ? localdata.pop()?.id + 1 : 1;

    const newData =
      localdata.length > 0
        ? localdata.push({ ...formData, id })
        : [{ ...formData, id }];

    localStorage.setItem("data", JSON.stringify(newData));

    setFormData(null);
  };

  return (
    <div className="bg-red-300 ">
      <h1 className="text-2xl bold underline text-center py-5">
        Admin Dashboard
      </h1>
      <p className="text-xl bold 300 text-gray-1000 text-center italic">
        Create a new product
      </p>

      <form
        onSubmit={handleSubmit}
        className="px-5 py-5 my-32 max-w-x2l space-y-5 flex space-x-2 justify-center border-r-slate-500"
      >
        <ul className="justify-center">
          <input
            type="file"
            name="avatar"
            id="avatar"
            placeholder="images"
            className=""
            onChange={handleImageUpload}
          />
          <div className="py-5 ">
            <label htmlFor="name" className="text-2xl px-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="py-3 px-4 rounded"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <label htmlFor="price" className="text-2xl px-2">
              Price:
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="price"
              className="py-3 px-4 rounded"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, price: e.target.value }))
              }
            />
          </div>

          <label htmlFor="calories" className="text-2xl px-2">
            Calories:
          </label>
          <input
            type="text"
            name="calories"
            id="calorie"
            placeholder="calories"
            className="py-3 px-4 rounded"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, calories: e.target.value }))
            }
          />

          <label htmlFor="category" className="text-2xl px-2">
            Category:
          </label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
            className="py-3 px-4 rounded"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, category: e.target.value }))
            }
          />
          <div className="">
            <label htmlFor="fooddescription" className="text-2xl px-2">
              Food Description:
            </label>
            <input
              type="text"
              name="food_description"
              placeholder="Food description"
              className="py-3 rounded "
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />

            <button
              onClick={handleSubmit}
              className="border bg-orange-300 py-3 px-20 rounded border-purple-600 my-5 mx-5 focus:outline-none focus:border-teal-500"
            >
              Upload
            </button>
          </div>
        </ul>
      </form>
    </div>
  );
}

export default Admin;

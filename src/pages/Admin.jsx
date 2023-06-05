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
      return;
    }
    const localdata = JSON.parse(localStorage.getItem("data")) || [];
    const neWid = localdata.pop()?.id + 1 || 1;

    localStorage.setItem(
      "data",
      JSON.stringify([...localdata, { ...formData, id: neWid }])
    );

    setFormData(null);  
  };

  return (
    <div className="bg-red-300 ">
      <p className="text-2xl bold underline">Admin Dashboard</p>

      <form
        onSubmit={handleSubmit}
        className="px-5 py-6 my-32 max-w-3xl mx-auto space-y-6 border-x-orange-500"
      >
        <ul>
          <p className="text-xl text-gray-1000">Create a new product</p>
          <li>
            <input
              type="file"
              name="avatar"
              id="avatar"
              placeholder="images"
              onChange={handleImageUpload}
            />
          </li>
          <li>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </li>
          <li>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="price"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, price: e.target.value }))
              }
            />
          </li>
          <li>
            <input
              type="text"
              name="calorie"
              id="calorie"
              placeholder="calories"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, calories: e.target.value }))
              }
            />
          </li>
          <li>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, category: e.target.value }))
              }
            />
          </li>
          <li>
            <input
              type="text"
              name="food_description"
              placeholder="Food description"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </li>
          <div>
            <button type="submit"  className="border bg-orange-300 py-1.5 px-20 rounded border-red-600 my-5 focus:outline-none focus:border-teal-500">Upload</button>
          </div>
        </ul>
      </form>
    </div>
  );
}

export default Admin;

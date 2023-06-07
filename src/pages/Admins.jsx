import React from "react";
import {
  Formik,
  Form,
  ErrorMessage,
  Field,
} from "formik/dist/formik.cjs.production.min";
import * as Yup from "yup";


export default function Admins() {

  const initialValues = {
    id:"",
    name:"",
    price:"",
    calories:"",
    category:"",
    description:"",
    image:""
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL();

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };const handleImageUpload = async (e) => {
    const base64 = await convertBase64(e.target.file[0]);
        const base64 = await convertBase64(file);
        avatar.src = base64;
        textArea.innerText = base64;
    // setFormData((prev) => ({ ...prev, image: base64 }));
  };



  
  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    image: Yup.string().required("image is required"),
    price: Yup.string().required("price is required"),
    calories: Yup.string().required("calories is required"),
    category: Yup.string().required("category is required"),
    description: Yup.string().required("food description is required"),

    
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          localStorage.setItem("userData", JSON.stringify());
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <Form className="px-4 py-6 my-32 max-w-3xl mx-auto space-y-6 border-x-orange-500 bg-orange-100">
          <div>
            <h1 className="text-2xl bold">Admin DashBoard</h1>
            <p className="text-xl text-blue-600 italic">Create a New Item</p>
          </div>
          <div className="w-1/2">
            <label htmlFor="image" className="float-left py-2">
              Image
            </label>
            <Field
              type="file"
              name="image"
              placeholder="avatar"
              onChange={handleImageUpload}
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
            />
            <div className="error">
              <ErrorMessage
                name="avatar"
                className="float-left py-2 text-red-600"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="name" className="float-left py-2">
                Name
              </label>
              <Field
                name="name"
                placeholder="name"
                className="border border-gray-400 block  py-2 px-4 w-full rounded  focus:outline-none focus:border-teal-500"
              />
              <div className="error">
                <ErrorMessage
                  name="name"
                  component="span"
                  className="float-left py-2 text-red-600"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label htmlFor="" className="float-left py-2">
                Category
              </label>
              <Field
                name="category"
                placeholder="Category"
                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              />
              <div className="error">
                <ErrorMessage
                  name="Category"
                  component="span"
                  className="float-left py-2 text-red-600"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="price" className="float-left py-2">
              Price
            </label>
            <Field
              name="Price"
              placeholder="Price"
              type="number"
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
            />
            <div className="error">
              <ErrorMessage
                name="price"
                component="span"
                className="float-left py-2 text-red-600"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="calorie" className="float-left py-2">
                Calories
              </label>
              <Field
                name="calories"
                type="text"
                placeholder="Calories"
                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              />
              <div className="error">
                <ErrorMessage
                  name="calories"
                  component="span"
                  className="float-left py-2 text-red-600"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label htmlFor="description" className="float-left py-2">
                Description
              </label>
              <Field
                name="description"
                placeholder="Description"
                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              />
              <div className="error">
                <ErrorMessage
                  name="description"
                  className="float-left py-2 text-red-600"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            // onSubmit={onSubmit}
            className="border bg-orange-300 py-1.5 px-20 rounded border-violet-600 my-5 focus:outline-none focus:border-teal-500 "
          >
            <a href="/">Upload Item</a>
          </button>
        </Form>
      </Formik>
    </div>
  );
}

/* eslint-disable no-unused-vars */
import React, { useContext } from "react";  
import {
  ErrorMessage,
  Formik,
  Field,
  Form,
} from "formik/dist/formik.cjs.production.min";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import { MyContext } from "../components/context/Context";

function AdminLogin() {
  const initialValues = {
    username: "",
    password: "",
  };

  // const { formData } = useContext(MyContext);

  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log("onsubmit, values");
    navigate("/admins");
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("Password is required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <div className=" ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
      >
        <Form className="border border-gray-600 shadow-xl w-[30%] mx-auto px-4 rounded mt-[100px]">
          <h1 className="text-2xl bold py-6 font-bold text-gray-600">
            ADMIN LOGIN FORM
          </h1>

          <div className="">
            <label htmlFor="label" className="py-2">
              Username
            </label>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="border border-gray-400 block py-2 px-4 w-full rounded-full
             bg-blue-100 focus:outline-none focus:border-teal-500"
            />
            <div className="error">
              <ErrorMessage name="username" className="text-red" />
            </div>
          </div>
          <div className="">
            <label htmlFor="label" className="py-2">
              Password
            </label>
            <Field
              type="text"
              name="password"
              placeholder="password"
              className="border border-gray-400 block py-2 px-4 w-full rounded-full bg-blue-100 focus:outline-none focus:border-teal-500"
            />
            <div className="error">
              <ErrorMessage name="password" className="text-red" />
            </div>
          </div>

          <div className="">
            <label htmlFor="password confirmation" className="py-2">
              Password Confirmation
            </label>
            <Field
              type="text"
              name="password confirmation"
              placeholder="password Confirmation"
              className="border border-gray-400 block py-2 px-4 w-full rounded-full bg-blue-100 focus:outline-none focus:border-teal-500"
            />
            <div className="error">
              <ErrorMessage name="password Confirmation" className="text-red" />
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/admins");
            }}
            type="button"
            className="border bg-gray-600 text-white hover:bg-white hover:text-black font-bold py-2 px-8 rounded-full my-5 focus:outline-none focus:border-teal-500"
          >
            sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AdminLogin;

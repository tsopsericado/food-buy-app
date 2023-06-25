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
import { MyContext } from "../context/Context";

function AdminLogin() {
  const initialValues = {
    username: "",
    password: "",
  };

  const { formData } = useContext(MyContext);

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
    <div className="bg-gradient-to-r from-violet-300 to-fuchsia-200 py-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
      >
        <Form className="px-4 my-32 max-w-3xl    mx-auto space-y-5">
          <h1 className="text-2xl bold py-2">Admin login infos</h1>

          <div className="w-1/2">
            <label htmlFor="label" className="py-2">
              User Name
            </label>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="border border-gray-400 block py-2 px-4 w-full rounded 
             bg-blue-100 focus:outline-none focus:border-teal-500"
            />
            <div className="error">
              <ErrorMessage name="username" className="text-red" />
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="label" className="py-2">
              Password
            </label>
            <Field
              type="text"
              name="password"
              placeholder="password"
              className="border border-gray-400 block py-2 px-4 w-full rounded bg-blue-100 focus:outline-none focus:border-teal-500"
            />
            <div className="error">
              <ErrorMessage name="password" className="text-red" />
            </div>
          </div>

          <div className="w-1/2">
            <label htmlFor="password confirmation" className="py-2">
              Password Confirmation
            </label>
            <Field
              type="text"
              name="password confirmation"
              placeholder="password Confirmation"
              className="border border-gray-400 block py-2 px-4 w-full rounded bg-blue-100 focus:outline-none focus:border-teal-500"
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
            className="border bg-orange-300 py-1.5 px-20 rounded border-violet-600 my-5 focus:outline-none focus:border-teal-500"
          >
            sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AdminLogin;

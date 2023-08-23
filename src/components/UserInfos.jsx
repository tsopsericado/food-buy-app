import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    picture: [],
  };
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log("onSubmit", values);
    navigate("/payment");
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("firstname is required"),
    lastname: Yup.string().required("lastname is required"),
    phoneNumber: Yup.string().required("phone number is Required"),
    location:Yup.string().required("location is required"),
    email: Yup.string()
      .required("email is required")
      .email("Invalid email adress"),
  });

  // const handleSubmit = (values) => {
  //   localStorage.setItem("userData", JSON.stringify(values));
  // };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          localStorage.setItem("userData", JSON.stringify(values));
          console.log(values);
        }}
        validationSchema={validationSchema}
        // onSubmit={handleSubmit}
      >
        {() => (
          <Form className="px-4 py-6  max-w-3xl mx-auto space-y-6 border-x-orange-500">
            <div>
              <h1 className="text-3xl italic bold">Users details </h1>
              <p className="text-xl text-gray-1000">
                Order now and get get delivered in less time
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="firstname" className="float-left py-2">
                  First Name
                </label>
                <Field
                  name="firstname"
                  placeholder="firstname"
                  className="MyField border border-gray-400 block  py-2 px-4 w-full rounded  focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="firstname"
                    component="span"
                    className="float-left py-2 text-red-600"
                  />
                </div>
              </div>

              <div className="w-1/2">
                <label htmlFor="lastname" className="float-left py-2">
                  Last Name
                </label>
                <Field
                  name="lastname"
                  placeholder="lastname"
                  className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="lastname"
                    component="span"
                    className="float-left py-2 text-red-600"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="float-left py-2">
                Email
              </label>
              <Field
                name="email"
                placeholder="email"
                type="email"
                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              />
              <div className="error">
                <ErrorMessage
                  name="email"
                  component="span"
                  className="float-left py-2 text-red-600"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="phonenumber" className="float-left py-2">
                  Phone Number
                </label>
                <Field
                  name="phone"
                  type="number"
                  placeholder="phone number"
                  className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="phone"
                    component="span"
                    className="float-left py-2 text-red-600"
                  />
                </div>
              </div>

              <div className="w-1/2">
                <label htmlFor="location" className="float-left py-2">
                  Location
                </label>
                <Field
                  name="location"
                  placeholder="location"
                  className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                />
                <div className="error">
                  <ErrorMessage
                    name="location"
                    className="float-left py-2 text-red-600"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              onSubmit={onSubmit}
              className="border bg-orange-300 py-1.5 px-20 rounded border-violet-600 my-5 focus:outline-none focus:border-teal-500 "
            >
              <a href="/payment">Submit</a>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

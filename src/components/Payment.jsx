import { Formik, Field } from "formik";
import React, { useEffect, useState } from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/Context";

function Payment() {
  const { formData } = useContext(MyContext);
  const [Fooditems, setFooditems] = useState({});

  const navigate = useNavigate();
  const [purchaseFood, setPurchaseFood] = useState({});
  // /* console.log("value", value); */
  const params = useParams();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("foodData")) || [];

    const foodId = +localStorage.getItem("foodToPurchaseId");

    const selectFood = localData.find((food) => food.id === foodId);
    setPurchaseFood(selectFood);
  }, []);

  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
  } = usePaymentInputs();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <Formik
      initialValues={{
        cardNumber: "",
        expiryNumber: "",
        cvc: "",
      }}
      onSubmit={(data) => console.log(data)}
      validate={() => {
        let errors = {};
        if (meta.erroredInputs.cardNumber) {
          errors.cardNumber = meta.erroredInputs.cardNumber;
        }
        if (meta.erroredInputs.expiryDate) {
          errors.expiryDate = meta.erroredInputs.expiryDate;
        }
        if (meta.erroredInputs.cvc) {
          errors.cvc = meta.erroredInputs.cvc;
        }
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <h1 className="text-xl bold">Make your payment</h1>
            <PaymentInputsWrapper {...wrapperProps}>
              <svg {...getCardImageProps({})} />
              <div className="md:w-2/3 px-6">
                <label htmlFor="cardnum">Card Number:</label>
                <Field name="cardNumber">
                  {({ Field }) => <input {...getCardNumberProps({})} />}
                </Field>
              </div>
              <div className="md:w-2/3 px-6">
                <label htmlFor="expirydate">Expiry Data:</label>
                <Field name="expiryDate">
                  {({ field }) => <input {...getExpiryDateProps({})} />}
                </Field>
              </div>
              <div className="md:w-2/3 px-6"> 
                <label htmlFor="cvc">CVC:</label>
                <Field name="cvc">
                  {({ field }) => <input {...getCVCProps({})} />}
                </Field>
              </div>
              <p>
                Package Name{" "}
                <span className="text-yello-700">{purchaseFood.name}</span>
              </p>
              <p>
                Payment Amount{" "}
                <span className="text-yello-500">${purchaseFood.price}</span>
              </p>
            </PaymentInputsWrapper>
          </div>
          <button
            type="button"
            onSubmit={handleSubmit}
            className="bg-orange-200 py-2"
          >
            Pay
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Payment;

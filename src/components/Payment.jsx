import { Formik, Field } from "formik";
import React, { useEffect, useState } from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import "./Payment.css";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="paymentdiv">
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
          <form onSubmit={handleSubmit} className="form">
            <div className="formdiv">
              <h1 className="title">Make your payment</h1>
              <div className="wrapper">
                <PaymentInputsWrapper {...wrapperProps}>
                  <svg {...getCardImageProps({})} />
                  <div className="cardnum">
                    <label htmlFor="cardnum">Card Number:</label>
                    <Field name="cardNumber">
                      {({ Field }) => <input {...getCardNumberProps({})} />}
                    </Field>
                  </div>
                  <div className="expirydate">
                    <label htmlFor="expirydate">Expiry Data:</label>
                    <Field name="expiryDate">
                      {({ field }) => <input {...getExpiryDateProps({})} />}
                    </Field>
                  </div>
                  <div className="cvc">
                    <label htmlFor="cvc">CVC:</label>
                    <Field name="cvc">
                      {({ field }) => <input {...getCVCProps({})} />}
                    </Field>
                  </div>
                  <div className="formfooter">
                    <p>
                      Package Name:
                      <span className="text-yello-700">
                        {purchaseFood.name}
                      </span>
                    </p>
                    <p>
                      Payment Amount:
                      <span className="text-yello-500">
                        ${purchaseFood.price}
                      </span>
                    </p>
                  </div>
                </PaymentInputsWrapper>
              </div>
            </div>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="bg-orange-200 py-2"
            >
              Pay
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Payment;

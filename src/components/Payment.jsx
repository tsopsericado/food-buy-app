import { Formik, Field } from "formik";
import React, { useEffect, useState } from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { useNavigate, useParams } from "react-router-dom";
// import { images } from "react-payment-inputs/images"  ;

function Payment() {
  
  const navigate = useNavigate();
  const [ purchaseFood, setPurchaseFood] = useState({});
  const { value } = useFooditems();
  console.log("value", value)
  const params = useParams()

useEffect(()=>{
  const [selectFood] = value.filter 
  (()=> food.name === params.name)
  setPurchaseFood(selectFood)
})


  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
  } = usePaymentInputs();
  
  const handleSubmit = ()=>{
    navigate ("/")
 }

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
        <form onSubmit={handleSubmit}>
          <div className="flex bg-red-300 justify-center m-15">
            <h1 className="mp">Make your payment</h1>
            <PaymentInputsWrapper {...wrapperProps}>
              <svg {...getCardImageProps({})} />
              <label htmlFor="cardnum">Card Number:</label>
              <Field name="cardNumber">
                {({ Field }) => (
                  <input
                    {...getCardNumberProps({})}/>
                )}
              </Field>
              <label htmlFor="expirydate">Expiry Data:</label>
              <Field name="expiryDate">
                {({ field }) => (
                  <input
                    {...getExpiryDateProps({})}/>
                )}
              </Field>
              <label htmlFor="cvc">CVC:</label>
              <Field name="cvc">
                {({ field }) => (
                  <input
                    {...getCVCProps({})}
/>
                )}
              </Field>
              <p>Package Name <span className="text-yello-700">{purchaseFood.name}</span></p>
              <p>Payment Amount <span className="text-yello-500">${purchaseFood.price}</span></p>
            </PaymentInputsWrapper>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-orange-300 py-2 p-6 flex justify-center"
          >
            Pay
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Payment;

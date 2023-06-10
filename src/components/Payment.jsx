import { Formik, Field } from "formik";
import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
// import { images } from "react-payment-inputs/images"  ;

function Payment() {
  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
  } = usePaymentInputs();
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
                    {...getCardNumberProps({
                      // onblur: Field.onblur,
                      // onChange: Field.onChange,
                    })}
                  />
                )}
              </Field>
              <label htmlFor="expirydate">Expiry Data:</label>
              <Field name="expiryDate">
                {({ field }) => (
                  <input
                    {...getExpiryDateProps({
                      // onBlur: field.onBlur,
                      // onChange: field.onChange,
                    })}
                  />
                )}
              </Field>
              <label htmlFor="cvc">CVC:</label>
              <Field name="cvc">
                {({ field }) => (
                  <input
                    {...getCVCProps({
                      // onBlur: field.onBlur,
                      // onChange: field.onChange,
                    })}
                  />
                )}
              </Field>
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

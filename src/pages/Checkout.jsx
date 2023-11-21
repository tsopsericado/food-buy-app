import React from 'react'
import { Cartcontext } from '../context/Context';

export default function Checkout() {

  const cartContext = React.useContext(Cartcontext    );

  const handleSubmit = async () => {
    await cartContext.checkout();
  };


  return (
    <div>
     <h1>Thanks for your succesful purchase</h1>

    </div>
  )
}

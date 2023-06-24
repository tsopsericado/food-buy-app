import { useEffect, useRef } from "react"
import React from 'react'

function Paypal() {

  const paypal = useRef()
  
  useEffect(()=>{
   window.paypal.button({
     createOrder:(data, actions, err) =>{
        return actions.order.create({  
            intent: "CAPTURE",
            purchase_units: [
                { 
                    description:"Cool looking Table",
                    amount: {
                       currency_code: "CAD",
                       value:650.00
                    },
                },
            ],
        })
     },
     unApprove: async (data, actions) =>{
       const order = await actions.order.capture();
       console.log(order);
     },
     onError: (err) =>{
      console.log(err)
     }

   }).render(paypal.current)
  }, [])

  return (
    <div ref={paypal}></div>
  )
}

export default Paypal
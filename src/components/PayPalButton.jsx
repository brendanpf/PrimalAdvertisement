import React, { useEffect, useRef } from 'react';

function PayPalButton({ amount }) {
  const paypalRef = useRef();

  useEffect(() => {
    if (!window.paypal) return;

    window.paypal
      .Buttons({
        style: {
          shape: 'rect',
          color: 'blue',
          layout: 'vertical',
          label: 'paypal',
        },
        createOrder: (_data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: 'EUR',
                },
              },
            ],
          });
        },
        onApprove: (_data, actions) => {
          return actions.order.capture().then((details) => {
            // Handle successful transaction here
            alert(`Transaction completed by ${details.payer.name.given_name}!`);
            // Optionally redirect or update your UI
          });
        },
        onError: (err) => {
          // Handle errors here
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [amount]);

  return <div ref={paypalRef} />;
}

export default PayPalButton;
import React, { useState, useEffect } from 'react';
import { loadScript } from '@paypal/paypal-js';

const PayPalButton = ({ price }) => {
  const [isSdkReady, setIsSdkReady] = useState(false);

  useEffect(() => {
    loadScript({ 'client-id': 'AUG953QzU7OIh1NorvtQ1BgQqm4AwUUbdkgNlC_RkqQpCQxxmQVF4se8QQFYu9ATwa0CUpFiKCs7PMZT', 'currency': 'EUR' })
      .then(() => {
        setIsSdkReady(true);
      })
      .catch((err) => {
        console.error('Failed to load PayPal SDK script', err);
      });
  }, []);

  useEffect(() => {
    if (isSdkReady) {
      paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: price,

              },
            }],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        },
      }).render(`#paypal-button-container-${price}`);
    }
  }, [isSdkReady, price]);

  return (
    <div id={`paypal-button-container-${price}`}>
      {isSdkReady ? null : <p>Loading PayPal...</p>}
    </div>
  );
};

export default PayPalButton;
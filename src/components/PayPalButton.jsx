import React, { useState, useEffect } from 'react';
import { loadScript } from '@paypal/paypal-js'; // Import the function to dynamically load the PayPal SDK script.

const PayPalButton = ({ price }) => {
  const [isSdkReady, setIsSdkReady] = useState(false); // State to track if the PayPal SDK is loaded.

  useEffect(() => {
    loadScript({ 'client-id': 'AUG953QzU7OIh1NorvtQ1BgQqm4AwUUbdkgNlC_RkqQpCQxxmQVF4se8QQFYu9ATwa0CUpFiKCs7PMZT',
      // Set the currency for transactions. 
      'currency': 'EUR' })
      .then(() => {
        setIsSdkReady(true); // Mark SDK as ready once loaded.
      })
      .catch((err) => {
        console.error('Failed to load PayPal SDK script', err); // Log any errors during script loading.
      });
  }, []);

  // useEffect to initialize the PayPal Buttons component once the SDK is ready.
  useEffect(() => {
    if (isSdkReady) {
      // Create PayPal buttons with specific behaviors.
      paypal.Buttons({
        createOrder: function (data, actions) {
          // Define the order details, including the price passed as a prop.
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: price,

              },
            }],
          });
        },
        onApprove: function (data, actions) {
          // Handle a successful transaction approval.
          return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name); // Notify the user of a successful transaction.
          });
        },
      }).render(`#paypal-button-container-${price}`);
    }
  }, [isSdkReady, price]); // Dependencies ensure this effect re-runs when `isSdkReady` or `price` changes.

  return (
    <div id={`paypal-button-container-${price}`}>
      {/* Display a loading message until the SDK is ready */}
      {isSdkReady ? null : <p>Loading PayPal...</p>}
    </div>
  );
};

export default PayPalButton;
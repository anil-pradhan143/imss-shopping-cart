import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import IntegraLogo from '../assets/images/integra.jpg';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Proceed to checkout'
      name='IMSS Shopping Ltd.'
      billingAddress
      shippingAddress
      image={IntegraLogo}
      description={`Your total is ₹ 27.999,00`}
      amount={priceForStripe}
      panelLabel='Proceed to checkout'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

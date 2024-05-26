import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const PayBtn = () => {
  const handleClick = () => {
    axios.post('http://localhost:5000/create-checkout-session')
      .then((res) => {
        if (res.data.url) {
          window.location = res.data.url;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire('Error', "internal server error", 'error');
      });
  };

  return (
    <>
      <div>
        <h1>Stripe Payment Gateway</h1>
        <button onClick={handleClick}>Checkout</button>
      </div>
    </>
  )
}

export default PayBtn;

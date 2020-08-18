/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51HCpmIK8woMGizWIdD56T3DnzqYSsqw7RZwB7yWKVRofpPuoo4aOoIGi7AmSDxk2wDtHUX20vYgoHwneS7Gm146n00Woex9ESC'
);

export const bookTour = async (id) => {
  try {
    // 1) Get checkout session from API
    console.log('updated');
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${id}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

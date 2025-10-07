import { useState, useEffect } from "react";
import axios from "axios";
import CheckoutPage from "../components/CheckoutPage.jsx";
function Checkout({ cartItems }) {
  const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState({});

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response1 = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOption(response1.data)
      let response2 = await axios.get('/api/payment-summary')
      setPaymentSummary(response2.data)
    }
    fetchCheckoutData()
  }, [])

  return (
    <>
      <title>Check out</title>
      <CheckoutPage cartItems={cartItems} deliveryOption={deliveryOption} paymentSummary={paymentSummary}/>
    </>
  );
}

export default Checkout;

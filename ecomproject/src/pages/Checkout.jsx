import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { convertCentToDollar } from "../utility/convertCentToDollar";
import "./checkout.css";
import "./checkout-header.css"
function Checkout({ cartItems }) {
  const [deliveryOption, setDeliveryOption] = useState([]);
  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      .then(response => setDeliveryOption(response.data))
  }, [])

  return (
    <>
      <title>Check out</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="/images/logo.png" />
              <img className="mobile-logo" src="/images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link" to="/">3 items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="/images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cartItems.map((item) => {
              return (
                <div className="cart-item-container" key={item.productId}>
                  <div className="delivery-date">
                    Delivery date: Tuesday, June 21
                  </div>

                  <div className="cart-item-details-grid">
                    <img className="product-image"
                      src={item.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {item.product.name}
                      </div>
                      <div className="product-price">
                        ${convertCentToDollar(item.product.priceCents)}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{item.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      {deliveryOption.length > 0 && deliveryOption.map((option) => {
                        let shippingfee = 'Free shipping';
                        if (option.priceCents > 0) {
                          shippingfee = `$${convertCentToDollar(option.priceCents)} - Shipping`
                        }
                        return (
                          <div className="delivery-option" key={option.id}>
                            <input type="radio" checked={deliveryOption.id === cartItems.deliveryOptionId}
                              className="delivery-option-input"
                              name={`delivery-option-${cartItems.productId}`} />
                            <div>
                              <div className="delivery-option-date">
                                Unknown
                              </div>
                              <div className="delivery-option-price">
                                {shippingfee}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>

            <div className="payment-summary-row">
              <div>Items (3):</div>
              <div className="payment-summary-money">$42.75</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">$4.77</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">$52.51</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;

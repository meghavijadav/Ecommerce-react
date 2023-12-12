import React from 'react';
import "./CheckoutProduct.css";

function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image" />
        <div className="product__info">
            <p className="checkoutProduct__title">
                <small>{title}</small>
            </p>

            <p className="checkoutProduct__price">
                <small><strong>₹ {price}</strong></small>
            </p>

            <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p>⭐</p>
                    ) )
                }
            </div>

            <button>Remove from Cart</button>
        </div>
    </div>     
  )
}

export default CheckoutProduct

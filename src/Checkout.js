import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/ICICI%20Bank-1440x128-without%20CTA-.jpg" alt="" className="checkout__add" />
            <div>
                <h2 className="checkout__title">Your Shopping</h2>
                {basket.map(item =>(
                  <CheckoutProduct
                    id = {item.id}
                    title = {title.title}
                    image = {image.image}
                    price = {price.price}
                    rating = {rating.rating}
                  />
                ))}
            </div>
        </div>

        <div className="checkout__right">
           <Subtotal />
        </div>
      
    </div>
  )
}

export default Checkout

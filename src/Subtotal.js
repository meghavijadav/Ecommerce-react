import React from 'react';
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className= "subtotal">
        <CurrencyFormat
            renderText= {(value) => (
                <>

                <p>
                    Subtotal(0 items): <strong>₹0</strong>
                </p>
                <small className="subtotal__git">
                    <input type="checkbox" /> This Order is a Gift
                </small>
                <button>Proceed to Checkout</button>

                </>
            )}

            decimalScale={2}
            value = {0}
            displayType= {'text'}
            thousandSeparator = {true}
            prefix={'₹'}
        />
      
    </div>
  )
}

export default Subtotal

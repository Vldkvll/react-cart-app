import React from "react";
import util from "../Util/Util";

import style from './basket.module.css';

const Basket = ({cartItems, handleRemoveFromCart}) => {

    return (
        <div className={`alert alert-info  ${style.container}`}>
            {cartItems.length === 0
                ? "Basket is empty"
                : <div>
                    You have {cartItems.length} products in the basket.
                    {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    x {item.count} = {util.formatCurrensy(+item.count * item.price)}
                                    <button className="btn btn-danger btn-sm"
                                            onClick={e => handleRemoveFromCart(e, item)}
                                    >
                                        x
                                    </button>
                                </li>
                            )}
                        </ul>
                        Total: {util.formatCurrensy(cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0))}
                        <button className={`btn btn-success`}
                                onClick={(e => {
                                    alert('Checkout...')
                                })}>
                            Checkout
                        </button>
                    </div>}
                  
                </div>}
        </div>
    )
}

export default Basket
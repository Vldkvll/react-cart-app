import React from "react";
import util from "../Util/Util";
import {connect} from "react-redux";
import {removeFromCart} from "../redux/actions/cart-actions";

import style from './basket.module.css';

const Basket = ({cartItems, removeFromCart}) => {

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
                                            onClick={e => removeFromCart(cartItems, item)}
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
const mapStateToProps = (state) => ({
    cartItems: state.cart.items
})


export default connect(mapStateToProps, {removeFromCart})(Basket);
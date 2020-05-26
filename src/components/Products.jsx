import React, {useEffect, useState} from "react";
import util from "../Util/Util";
import {connect} from "react-redux";
import {fetchProducts} from "../redux/actions/product-actions";
import {addToCart} from "../redux/actions/cart-actions";

const Products = ({products, addToCart, cartItems, fetchProducts}) => {

    useEffect(() => {
        fetchProducts();
    }, []);

    const productsProduct = products.map((product) =>
        (<div className="col-md-4" key={product.id}>
            <div className="thumbnail text-center">
                <a href={`# ${product.id}`} onClick={e => addToCart(cartItems, product)}>
                    <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                    <p>
                        {product.title}
                    </p>
                </a>

                <div>
                    <b>{util.formatCurrensy(product.price)}</b>
                    <button className="btn btn-primary"
                            onClick={e => addToCart(cartItems, product)}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>)
    )
    return (
        <div className="row">
            {productsProduct}
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items
})

export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);

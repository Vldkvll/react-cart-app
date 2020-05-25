import React, {useEffect, useState} from "react";
import util from "../Util/Util";
import {connect} from "react-redux";
import {fetchProducts} from "../redux/actions/product-actions";

const Products = ({products, handleAddToCart, fetchProducts}) => {

    useEffect(() => {
        fetchProducts();
    }, []);

    const productsProduct = products.map( (product) =>
        (<div className="col-md-4" key={product.id}>
            <div className="thumbnail text-center">
                <a href={`# ${product.id}`} onClick={ev => handleAddToCart(ev, product)}>
                    <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                    <p>
                        {product.title}
                    </p>
                </a>

                <div>
                    <b>{util.formatCurrensy(product.price)}</b>
                    <button className="btn btn-primary"
                            onClick={e => handleAddToCart(e, product)}
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
    products: state.products.filteredItems

})


export default connect(mapStateToProps, {fetchProducts})(Products);

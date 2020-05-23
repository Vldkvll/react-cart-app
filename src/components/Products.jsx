import React from "react";
import util from "../Util/Util";

const Products = ({products, handleAddToCart}) => {
    const productsproduct = products.map( (product) =>
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
                            onClick={e => handleAddToCart(e, product)}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>)
    )
    return (
        <div className="row">
            {productsproduct}
        </div>
    )
}

export default Products;

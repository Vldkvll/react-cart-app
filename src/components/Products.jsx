import React from "react";
import util from "../Util/Util";

const Products = ({products, handleAddToCart}) => {
    const productsItem = products.map((item) =>
        (<div className="col-md-4" key={item.id}>
            <div className="thumbnail text-center">
                <a href={`# ${item.id}`} onClick={e => handleAddToCart(e, item)}>
                    <img src={`/products/${item.sku}_2.jpg`} alt={item.title}/>
                    <p>
                        {item.title}
                    </p>
                </a>
                <div>
                    <b>{util.formatCurrensy(item.price)}</b>
                    <button className="btn btn-primary"
                            onClick={e => handleAddToCart(e, item)}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>)
    )
    return (
        <div className="row">
            {productsItem}
        </div>
    )
}

export default Products;

import React from "react";
import {connect} from "react-redux";
import {filterProducts} from "../redux/actions/product-actions";

const Filter = ({products, size, sort, handleChangeSize, handleChangeSort, count, filterProducts}) => {
    return (
        <div className="row">
            <div className="col-md-4">
                {count} Items Found.
            </div>
            <div className="col-md-4">
                <label htmlFor="">
                    Order by
                    <select name="" id=""
                            className="form-control"
                            value={sort}
                            onChange={handleChangeSort}
                    >
                        <option value="">Select</option>
                        <option value="Lowest">Lowest to Highest</option>
                        <option value="Highest">Highest to Lowest</option>
                    </select>
                </label>
            </div>
            <div className="col-md-4">
                <label htmlFor="">
                    Filter size
                    <select name="" id=""
                            className="form-control"
                            value={size}
                            onChange={ e => filterProducts(products, e.target.value) }>
                        <option value="">All</option>
                        <option value="x">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.items,
    size: state.products.size,
    filteredProducts: state.products.filteredItems
})


export default connect(mapStateToProps, {filterProducts})(Filter);
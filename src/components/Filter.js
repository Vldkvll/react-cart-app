import React from "react";

const Filter = ({size, sort, handleChangeSize, handleChangeSort, count}) => {
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
                            onChange={handleChangeSize}
                    >
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

export default Filter
import React from 'react';
import {getProductsJson} from "./API/api";
import Products from "./components/Products";
import Filter from "./components/Filter";

import style from './App.module.css';

class App extends React.Component {
    state = {
        products: [],
        filteredProducts: [],
        // size: 0,
        sort: ''
    }

    async componentDidMount(prevProps, prevState, snapshot) {
        const responseData = await getProductsJson()
        this.setState({
            products: responseData.data,
            filteredProducts: responseData.data
        })
    }

    handleChangeSort = (e) =>  {
        this.setState({sort: e.target.value})
        this.listProducts()
    }

    handleChangeSize = (e) =>  {
        this.setState({size: e.target.value})
        this.listProducts()
    }
// indian code
    // listProducts() {
    //     this.setState(state => {
    //         console.log(state)
    //         if (state.sort !== '') {
    //             state.products.sort((a, b) => (state.sort === 'Lowest')
    //                 ? (a.price > b.price ? 1 : -1)
    //                 : (a.price < b.price ? 1 : -1))
    //         } else {
    //             state.products.sort((a, b) => (a.id > b.id ? 1 : -1))
    //         }
// common person code
    listProducts() {
        this.setState(state => {
            console.log(state)
            if (state.sort !== '') {
                state.products.sort((a, b) => (state.sort === 'Lowest')
                    ? a.price - b.price
                    : b.price - a.price)
            } else {
                state.products.sort((a, b) => a.id - b.id)
            }
            if(state.size !== ''){
                return {filteredProducts: state.products.filter( a =>
                        a.availableSizes.indexOf(state.size.toUpperCase()) >= 0)}
            }
            return {filteredProducts: state.products}
        })
    }

    render() {
        const {filteredProducts, size, sort} = this.state
        return (
            <div className="container">
                <h1 className={style.app}>Shopping Cart App</h1>
                <hr/>
                <div className="row">
                    <div className="col-md-9">
                        <Filter
                            size={size}
                            sort={sort}
                            handleChangeSize={this.handleChangeSize}
                            handleChangeSort={this.handleChangeSort}
                            count={filteredProducts.length}
                        />
                        <hr/>
                        <Products
                            products={filteredProducts}
                            handleAddToCart={this.handleAddToCart}
                        />
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>

            </div>
        );
    }
}

export default App;

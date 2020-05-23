import React from 'react';
import {getProductsJson} from "./API/api";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/basket";

import style from './App.module.css';

class App extends React.Component {
    state = {
        products: [],
        filteredProducts: [],
        size: '',
        sort: '',
        cartItems: []
    }

    async componentDidMount(prevProps, prevState, snapshot) {
        const responseData = await getProductsJson()
        this.setState({
            products: responseData.data,
            filteredProducts: responseData.data
        })

        if (localStorage.getItem('cartItems')) {
            this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))})
        }
    }

    handleChangeSort = (e) => {
        this.setState({sort: e.target.value})
        this.listProducts()
    }

    handleChangeSize = (e) => {
        this.setState({size: e.target.value})
        this.listProducts()
    }

    listProducts() {
        this.setState(state => {
            if (state.sort !== '') {
                state.products.sort((a, b) => (state.sort === 'Lowest')
                    ? a.price - b.price
                    : b.price - a.price)
            } else {
                state.products.sort((a, b) => a.id - b.id)
            }
            if (state.size !== '') {
                return {
                    filteredProducts: state.products.filter(a =>
                        a.availableSizes.indexOf(state.size.toUpperCase()) >= 0)
                }
            }
            return {filteredProducts: state.products}
        })
    }

    handleAddToCart = (e, product) => {
        // console.log('product ' + product.id)
        this.setState(state => {
            const cartItems = [...state.cartItems];
            let productAllReadyInCart = false;
            cartItems.forEach(item => {
                if (item.id === product.id) {
                    productAllReadyInCart = true;
                    item.count = item.count + 1;
                }
            });
            if (!productAllReadyInCart) {
                cartItems.push({...product, count: 1});
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return {cartItems};
        })
    }

    handleRemoveFromCart = (e, item) => {
        this.setState(state => {
            let cartItems = state.cartItems.filter(elem => elem.id !== item.id)
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return {cartItems}
        })
    }


    render() {
        const {filteredProducts, size, sort, cartItems} = this.state
        return (
            <div className="container">
                <h1 className={style.app}>Shopping Cart App</h1>
                <hr/>
                <div className="row">
                    <div className="col-md-8 my-auto">
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
                    <div className="col-md-4">
                        <Basket
                            cartItems={cartItems}
                            handleRemoveFromCart={this.handleRemoveFromCart}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;

import React from 'react';
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/basket";

import style from './App.module.css';

const App = () => {

    return (
        <div className="container">
            <h1 className={style.app}>Shopping Cart App</h1>
            <hr/>
            <div className="row">
                <div className="col-md-8 my-auto">
                    <Filter/>
                    <hr/>
                    <Products/>
                </div>
                <div className="col-md-4">
                    <Basket/>
                </div>
            </div>

        </div>
    );
}

export default App;

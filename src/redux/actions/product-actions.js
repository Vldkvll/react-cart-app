import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "./types";
import {getProductsJson} from "../../API/api";

export const fetchProducts = () => (async (dispatch) => {
    const responseData = await getProductsJson()
    let data = responseData.data
    return dispatch({type: FETCH_PRODUCTS, payload: data})
});

export const filterProducts = (products, size) => (dispatch) => {
    console.log('size  ' + size)
    return dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items:
                size === ''
                    ? products
                    : products.filter(
                    (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0)
        },
    });
};



export const sortProducts = (products, sort) => (dispatch) => {
    products = [...products];
    console.log('sort  ' + sort)
    products.forEach(a => console.log(a.price))
    if (sort !== '') {
        products.sort((a, b) => (sort === 'Lowest')
            ? a.price - b.price
            : b.price - a.price)
    } else {
        products.sort((a, b) => a.id - b.id)
    }
    console.log(products)
    products.forEach(a => console.log(a.price))
    return dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            items: products,
            sort: sort
        },
    });
}


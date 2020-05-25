import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE} from "./types";
import {getProductsJson} from "../../API/api";

export const fetchProducts = () => (async (dispatch) => {
    const responseData = await getProductsJson()
    let data = responseData.data
    return dispatch({type: FETCH_PRODUCTS, payload: data})
});

export const filterProducts = (products, size) => (dispatch) => {
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
}

// export const filterProducts = (products, size) => (dispatch) => {
//     console.log(products)
//     console.log(size)
//     dispatch({
//         type: FILTER_PRODUCTS_BY_SIZE,
//         payload: {
//             size: size,
//             items:
//                 size === ""
//                     ? products
//                     : products.filter(
//                     (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
//                     ),
//         },
//     });
// };
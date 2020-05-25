import {
    ADD_TO_CART,
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
    REMOVE_FROM_CART
} from "../actions/types";

const initialState = {
    items: [],
    filteredItems: [],
    size: '',
    sort: '',

};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state,
                items: action.payload,
                filteredItems: action.payload};

        case FILTER_PRODUCTS_BY_SIZE:
            return  {...state,
                filteredItems: action.payload.items,
                size: action.payload.size};

        case ORDER_PRODUCTS_BY_PRICE:
            return {...state,
                filteredItems: action.payload.items,
                sort: action.payload.sort};

        default:
            return state;


    }
}

export default productReducer


//
// case ADD_TO_CART:
//     return
// case REMOVE_FROM_CART:
//     return
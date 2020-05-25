import {ADD_TO_CART, FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, REMOVE_FROM_CART} from "../actions/types";

const initialState = {
    items: [],
    filteredItems: [],
    size: ''

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
        case ADD_TO_CART:
            return
        case REMOVE_FROM_CART:
            return

        default:
            return state;


    }
}

export default productReducer
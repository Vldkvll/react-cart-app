import {combineReducers} from "redux";
import productReducer from "./product-reducers";

const rootReducer =
    combineReducers({
        products: productReducer
    }
);

export default rootReducer
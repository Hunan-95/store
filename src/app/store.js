import {combineReducers, createStore} from "redux"
import { productDataReducer, productReducer } from "../features/productReducer";

const store = createStore(combineReducers({
    productReducer:productReducer
}),
{
    productReducer:productDataReducer
});


export default store
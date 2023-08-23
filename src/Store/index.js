import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ProductReducer from "./Reducers/ProductSlice";


const rootReducer = combineReducers({
    ProductReducer
})
export const store = configureStore({
    reducer: rootReducer
})
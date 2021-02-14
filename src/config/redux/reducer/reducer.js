import { combineReducers } from "@reduxjs/toolkit";
import GlobalReducer from './GlobalReducer';
import ProductReducer from './ProductReducer';


const reducer = combineReducers({ProductReducer,GlobalReducer})

export default reducer;
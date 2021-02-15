import { combineReducers } from "@reduxjs/toolkit";
import GlobalReducer from './GlobalReducer';
import ProductReducer from './ProductReducer';
import AddProuctReducer from './AddProductReducer';


const reducer = combineReducers({ProductReducer,GlobalReducer,AddProuctReducer})

export default reducer;
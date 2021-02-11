import { combineReducers } from "@reduxjs/toolkit";
import GlobalReducer from './GlobalReducer';
import HomeReducer from './HomeReducer';


const reducer = combineReducers({HomeReducer,GlobalReducer})

export default reducer;
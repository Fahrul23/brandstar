
import {applyMiddleware, createStore } from "@reduxjs/toolkit";
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk) );

export default store;

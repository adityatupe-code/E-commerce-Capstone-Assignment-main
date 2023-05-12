import {combineReducers,applyMiddleware} from 'redux';
// import { createStore } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension'
import {  getProductsReducer, getProductDetailsReducer } from './reducer/productreducer';
import {cartreducer} from './reducer/cartreducer';

const reducer = combineReducers({
    getProducts :getProductsReducer,
    getProductDetails : getProductDetailsReducer,
    cart:cartreducer
});

const middleware =[thunk];



const reduxstore = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);
export default reduxstore;
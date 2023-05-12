
import * as actionTypes from '../constant/productcons';
// state contains current state and action contains updated state 
export const getProductsReducer = (state={products:[]},action)=>{
switch(action.type){
    case  actionTypes.fetchproductsuccess:
        return {products:action.payload}
    case  actionTypes.fetchproductfail:
        return {error:action.payload}
    default:
        return state;
}
}



 

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    switch(action.type){
        case actionTypes.fetchproductdetailreq:
            return { loading: true }
        case actionTypes.fetchproductdetailsuccess:
            return { loading: false, product: action.payload }
        case actionTypes.fetchproductdetailfail:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.fetchproductdetailreset: 
            return {
                product: {}
            }
        default:
            return state
    }
}
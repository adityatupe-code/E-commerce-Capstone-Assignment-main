


import * as actionType from '../constant/cartcons'












export const  cartreducer =(state = {cartItems:[]},action)=>{
switch(action.type){
    case actionType.AddtoCart:
        const item =action.payload;
        const exist =state.cartItems.find(product => product.id === item.id);

        if(exist){
            return{...state,catItems:state.cartItems.map(data=>data.product === exist.product ? item:data)}
        }
        else{
            return{...state,cartItems: [...state.cartItems,item]}
        }
        case actionType.RemovefromCart:
            return{...state,cartItems: state.cartItems.filter(product => product.id !== action.payload)}
            default:
                return state;
}
}
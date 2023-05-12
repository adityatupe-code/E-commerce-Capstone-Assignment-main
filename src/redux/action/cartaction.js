
import axios from "axios"
import * as actionTypes from '../constant/cartcons'

const URL ='http://localhost:4500';






export const addtocart=(id,quantity)=>async(dispatch)=>{
try {
    // await axios.get(`${URL}/product/${id}`)
    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionTypes.AddtoCart, payload: { ...data, quantity } });
}catch (error) {
    console.log('Error in cartaction');
}
}


export const removefromcart=(id)=>(dispatch)=>{
  try {
    dispatch({
        type: actionTypes.RemovefromCart,
        payload: id
    })
  } catch (error) {
    console.log('Error in Removerfromcart cartaction')
  }
}
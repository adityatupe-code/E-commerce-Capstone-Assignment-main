
import axios from "axios";
// import {fetchproductsuccess,fetchproductfail,fetchproductdetailreq,fetchproductdetailsuccess,fetchproductdetailfail} from  "../constant/productcons.js";

import * as actionTypes from "../constant/productcons.js";
const URL ='http://localhost:4500';



export const getProducts = ()=> async(dispatch)=>{
try {
  const {data} = await axios.get(`${URL}/products`);
  dispatch({type:  actionTypes.fetchproductsuccess,payload:data});
} catch (error) {
dispatch({type:  actionTypes.fetchproductfail,payload:'error in productaction'})
}
}

// export const getProductsdetail =(id)=> async (dispatch) =>{
// try {
//   dispatch({type:fetchproductdetailreq});
//   const {data} = await axios.get(`${URL}/product/${id}`);
//   dispatch({type: fetchproductdetailsuccess,payload:data});

// } catch (error) {

//   dispatch({type: fetchproductdetailfail, payload: 'error in getproductdetail'})
// }
// };


export const getProductDetails = (id) => async (dispatch) => {
  try {
      dispatch({ type: actionTypes.fetchproductdetailreq });
      const { data } = await axios.get(`${URL}/product/${id}`);
      
      dispatch({ type: actionTypes.fetchproductdetailsuccess, payload: data });

  } catch (error) {
      dispatch({ type: actionTypes.fetchproductdetailfail, payload: error.response});

  }
};
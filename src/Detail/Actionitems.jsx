import { Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/action/cartaction'

import React from 'react'

const Actionitems = ( {product}) => {
  const navigate = useNavigate();
  const { id } = product;
      
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addtocart(id, quantity));
    navigate('/cart');
}

  return (
    <div style={{minWidth:"40%",padding:"40px 0 0 80px"}}>
   <img style={{padding:"15px 0px",border:"1px solid #f0f0f0"}} src={product.detailUrl} alt="detailimg" />
   <Button onClick={()=>addItemToCart()} style={{width:"46%",height:'50',marginRight:10,background:"orange"}} variant='contained'>Add to Cart</Button>
   <Button style={{width:"46%",height:'50'}}  variant='contained'>Buy Now</Button>
    </div>
  )
}

export default Actionitems

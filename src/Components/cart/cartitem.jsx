import { Button, Typography } from '@mui/material'
import React from 'react'
import Buttonincrementdec from './Buttonincrementdec'
import { useDispatch } from 'react-redux'
import { removefromcart } from '../../redux/action/cartaction'
const CArtitem = ({item}) => {
  const dispatch =useDispatch();

  const removeItemFromCart =(id)=>{
    dispatch(removefromcart(id))
  }
  return (
    
        <div style={{borderTop:'1px solid #f0f0f0',display:'flex',background:'white'}}>
          <div style={{margin:'20px',display:'flex',flexDirection:'column'}}>
            <img style={{height:'10',width:'10'}} src={item.url} alt="cartitem" />
            <Buttonincrementdec/>
            </div>
          <div>
            <p>{item.title.longTitle}</p>
            <p style={{color:'grey',fontSize:'14px',marginTop:'10px'}}>Seller:Rao Enterprise</p>
            <Typography style={{margin:'20px 0'}}>
              <span  style={{fontSize:"18",fontWeight:'bold'}}>${item.price.cost}</span>  &nbsp;  &nbsp; 
              <span  style={{color:'#878787',textDecoration:'Line-through'}}>${item.price.mrp}</span> &nbsp;   &nbsp; 
              <span style={{color:'#388E3C'}}>{item.price.discount}</span>
            </Typography>
            <Button style={{marginTop:20,fontSize:'16px',color:'black',fontWeight:'bold'}} onClick={()=>removeItemFromCart(item.id)}>Remove</Button>
            </div>
    </div>
    
  )
}

export default CArtitem

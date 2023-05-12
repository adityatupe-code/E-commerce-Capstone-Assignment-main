
import { useSelector } from 'react-redux'
import Totalitem from './Totalitem';

import React from 'react'
import { Box, Button, Grid,Typography } from '@mui/material';
import EmptyCart from './EmptyCart';
import CArtitem from './cartitem';
const cart = () => {
 const { cartItems} =   useSelector(state => state.cart);
  return (
   <>
    {
        cartItems.length ?
       
        <Grid style={{padding:'35px 140px'}} container> 
            <Grid item lg={9} md={9} sm={12} xs={12}>
                <Box style={{padding:'15px 24px'}}>
                    
                    <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>
                </Box>
                {
                    cartItems.map(item => (
                       <CArtitem item={item}/>
                        
                    )
                    )
                }
                <div style={{padding:'16px 22px',background:'#fff',boxShadow:'0 -2px 10px 0 rgb(0 0 0 / 10%)'
                }}>
                   <Button style={{display:'flex',marginLeft:'auto',color:'white',background:'orange',width:'250px',height:'50px'}}>
                    Place Order
                   </Button>
                </div>
            </Grid>

            <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Totalitem cartItems={cartItems}/>
            </Grid>

        </Grid>
        :
         <EmptyCart/>
       
    }
    

   </>
  )
}

export default cart


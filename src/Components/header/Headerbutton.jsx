import React from 'react'
import { useState,useContext } from 'react';
import {Box, Button, Typography }from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Loginmodel from '../Login/Loginmodel';
import { DataContext } from '../../Detail/DataProvider';
import Profile from './userprofile';
const Headerbutton = () => {
  const[open,setOpen]=useState(true);

  const {account,setAccount} =useContext(DataContext);

  const openModel=()=>{
    setOpen(true);
  }
  return (
   <Box style={{display:"flex", margin:"0,4%,0,auto"}}>
    {
       account ? <Profile account={account} setAccount={setAccount}/> :
      <Button onClick={()=>openModel()} variant='contained' style={{ marginRight:45,fontSize:14,color:"#2874f0",background:"white",textTransform:"none",padding:"5px 40px",borderRadius:3,boxShadow:'none',fontWeight:600,height:30 ,marginLeft:10}}> Login</Button> 
     } 

   


    <Typography style={{marginRight:45,fontSize:14,marginTop:4,width:140}}>Become a Seller</Typography>


    <Typography style={{marginRight:45,fontSize:14,marginTop:4}}>More</Typography>


    <Box style={{marginRight:45,fontSize:14,display:"flex",alignItems:"center"}}>

        <ShoppingCartIcon/>

        <Typography style={{marginRight:45,fontSize:14}} >Cart</Typography>


    </Box>
    <Loginmodel open={open} setOpen={setOpen}/>
   </Box>
  )
}

export default Headerbutton

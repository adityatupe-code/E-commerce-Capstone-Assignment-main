import { InputBase } from '@mui/material'
import React from 'react'
import {  Box} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  return (
    <Box style={{background:"white",width:"38%",borderRadius:2,marginLeft:10,display:"flex"}}>
  <InputBase placeholder='Search for products,brands and more' style={{paddingLeft:20,width:"100%",fontSize:"unset"}}/>

    <Box style={{color:"blue",padding:5,display:"flex"}}>
   <SearchIcon/>
    </Box>
    </Box>
  )
}

export default Search

import React from 'react'
import{AppBar,Toolbar,styled,Box} from '@mui/material'
import Search from './Search'
import Headerbutton from './Headerbutton'
import {Link} from 'react-router-dom'

const SH =styled(AppBar)`
background:#2874f0;
height:55px;
`
const Bx =styled(Link)`
margin-left:12%;
line-height:0;
`
const Header = () => {
  return (
<SH>
    <Toolbar style={{minHeight:55,color:'inherit'}}>
        <Bx to={`/`} style={{textDecoration:'none'}}>
                  <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" style={{width:75}}/>

            <Box style={{display:'flex'}}>
                <p style={{fontSize:10,fontStyle:'italic'}}>Explore &nbsp;
                <span style={{color:'#FFE500'}}>Plus</span> </p>
               <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="sublogo"  style={{width:10,height:10,marginLeft:4,marginTop:5}}/>
            </Box>
        </Bx>
        <Search/>
        <Box style={{margin:"0 5% 0 auto"}}>
          <Headerbutton/>
        </Box>
    </Toolbar>

</SH>
  )
}

export default Header

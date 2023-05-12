import React from 'react'
import { Homenavdata } from '../../Cons/datafile'
import { styled} from '@mui/material';
const Nav = styled('div')(({ theme }) => ({
  display:'flex',
  justifyContent: 'space-between',
  margin: '55px 130px 0 130px !important',
  overflowX: 'overlay',


  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
}))
const Homenavigation = () => {
  return (<>
    <div style={{background:'white'}}>
    <Nav >
       {
        Homenavdata.map(data=>(
            <div style={{padding:"10px 8px",textAlign:"center"}}>
                <img style={{width:60}} src={data.url} alt="homenavdataimg" />
                <p style={{fontWeight:600,fontFamily:"inherit",fontSize:"13px",margin:0,padding:0}}>{data.text}</p>
            </div>
        ))
       }
    </Nav>
    </div></>
  )
}

export default Homenavigation

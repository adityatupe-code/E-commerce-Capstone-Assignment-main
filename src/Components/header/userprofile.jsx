import{Box,Menu,MenuItem,Button} from '@mui/material'
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const profile =({account,setAccount})=>{

    const[open,setOpen] =useState(false);

    const handleClick =(event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose =()=>{
        setOpen(false);
    }

    const logout =()=>{
        setAccount('')
    }
    return(
        <>
        <Box onClick={handleClick}> 

        <Button style={{ marginRight:45,fontSize:14,color:"#2874f0",background:"white",textTransform:"none",padding:"5px 40px",borderRadius:3,boxShadow:'none',fontWeight:600,height:30 ,marginLeft:10,cursor:"pointer"}} >{account}</Button>
        </Box>

        <Menu  style={{marginTop:5,marginLeft:5}}
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
       
      >
        
        <MenuItem onClick={()=>{handleClose();logout();}}>
        <PowerSettingsNewIcon style={{marginRight:3, padding:0, fontSize:'small'}}/>
            Logout</MenuItem>
      </Menu>
        </>
    )
}
export default profile;
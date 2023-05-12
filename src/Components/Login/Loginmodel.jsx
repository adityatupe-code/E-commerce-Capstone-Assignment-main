import { Dialog, TextField,Button, Typography } from '@mui/material';
import React from 'react'
import { useState,useContext } from 'react';
import { authsignupapi ,authloginapi} from '../../API/api.js';
import {DataContext} from '../../Detail/DataProvider.jsx'
const Loginmodel = ({ open, setOpen }) => {
    const handleclose = () => {
        setOpen(false);
        toggleAccount(loginfirstval.login);
        seterror(false)
    } 

   //register and login toggle
    const loginfirstval={
        login:{
            view:'login',
            heading:'Login',
            subHeading:'Get access to your Orders,wishlist and Recommendations'
        },
        signup:{
            view:'signup',
            heading:"Looks like you're new Here!",
            subHeading:"Sign up with your mobile number to get started"
        }
    }

    const signupinitialval={
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        phone:''
    }

    const logininitialval={
        username:'',
        password:''
    }


    const [account,toggleAccount]=useState(loginfirstval.login);
    const[signup,setSignup]=useState(signupinitialval);
    const [login,setlogin] =useState(logininitialval)
    const[error,seterror]=useState(false);
    const {setAccount}=useContext(DataContext);
    

        const togglesignup = () =>{
            toggleAccount(loginfirstval.signup)
        }


        const onValuechange =(e)=>{
            setSignup(
                {...signup,[e.target.name]:e.target.value}
              
            );
          
        }  

        const signupuser= async()=>{
        let apiresponse =  await  authsignupapi(signup);
       if(!apiresponse) return;
       handleclose();

       setAccount(signup.firstname);
        }
    
        const OninputValueChange =(e)=>{
            setlogin({...login,[e.target.name]:e.target.value});
        }
         
        const loginuser = async()=>{
    let loginresponse =      await authloginapi(login);
    console.log(loginresponse);
    if(loginresponse.status ===200){
        handleclose();
        setAccount(loginresponse.data.data.firstname);

    }else{
        seterror(true);
    }
        }
       
    
    return (

        <Dialog open={open} onClose={handleclose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <div style={{ height: "70vh", width: "90vh" }}>
                <div style={{display:"flex",height:"100%"}}>

                    <div style={{ background: "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat", height: "82%", width: "25%",padding:"45px 35px" }}>
                        <h5 style={{color:"white",fontweight:600,fontSize:"25px"}}>{account.heading}</h5>
                       
                        <p style={{marginTop:20,color:"white",fontweight:600}}>{account.subHeading}</p>
                    </div>


{account.view ==='login' ?


                    <div style={{display:"flex",flexDirection:"column",padding:"25px 35px",flex:1}}>
                        <TextField onChange={(e)=> OninputValueChange(e)} name='username' style={{marginTop:20}} variant='standard' label="Enter  Username" />

                        {error &&     <Typography style={{fontSize:10,color:"red",lineHeight:0,marginTop:10,fontWeight:600}}>Enter Valid Username Or Password.</Typography>
                     
                      }

                        <TextField onChange={(e)=> OninputValueChange(e)} name='password'  style={{marginTop:20}} variant='standard' label="Enter Password" />
                        <p style={{marginTop:20,fontSize:12,color:"#878787"}}>By continuing, you agree to flipkart's Terms of Use and Privacy Policy.</p>


                        <Button style={{marginTop:20,textTransform:'none',background:"#F8641B",color:"white",height:"48px",marginLeft:"10", borderEndEndRadius:2}} onClick={()=>loginuser()}>Login</Button>


                        <p style={{marginTop:20,textAlign:"center"}}>OR</p>



                        <Button style={{marginTop:20,textTransform:'none',background:"white",color:"#2874f0",height:"48px",borderEndEndRadius:2,boxShadow:"0 2px 4px 0 rgb(0 0 0/ 20%)"}}>Request OTP</Button>



                        <p onClick={()=>togglesignup()} style={{marginTop:20,fontSize:14,textAlign:'center',color:'#2874f0',fontWeight:"600",cursor:"pointer"}}>New to Flipkart? Create an account.</p>
                    </div>



                    :



                    <div style={{display:"flex",flexDirection:"column",padding:"25px 35px",flex:1}}>
                        <TextField  onChange={(e)=>onValuechange(e)} name='firstname' style={{marginTop:20}} variant='standard' label="Enter Firstname" />
                        <TextField name='lastname'   onChange={(e)=>onValuechange(e)} style={{marginTop:20}} variant='standard' label="Enter Lastname" />
                        <TextField  name='username' onChange={(e)=>onValuechange(e)} style={{marginTop:20}} variant='standard' label="Enter Username" />
                        <TextField name='email' onChange={(e)=>onValuechange(e)} style={{marginTop:20}} variant='standard' label="Enter Email" />
                        <TextField name='password'  onChange={(e)=>onValuechange(e)} style={{marginTop:20}} variant='standard' label="Enter Password" />
                        <TextField name='phone' onChange={(e)=>onValuechange(e)} style={{marginTop:20}} variant='standard' label="Enter Phone number" />
                       
                        <Button onClick={()=> signupuser()} style={{marginTop:20,textTransform:'none',background:"#F8641B",color:"white",height:"48px",borderEndEndRadius:2}}>Continue</Button>
                    </div>
}
                   
                </div>
            </div>

        </Dialog>

    )
}

export default Loginmodel

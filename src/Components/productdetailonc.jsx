import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Actionitems from '../Detail/Actionitems';
import { useParams } from 'react-router-dom';
// import { getProducts } from '../redux/action/productaction';
import { getProductDetails } from '../redux/action/productaction';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Grid,Box,Typography, TableBody, TableRow, TableCell} from '@mui/material';
import styled from '@emotion/styled';
const Productdetailonc = () => {
  const { loading, product } = useSelector(state => state.getProductDetails);


  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id))
  }, [dispatch, id, product, loading])
  console.log(product);

  

const date =new Date(new Date().getTime()+(6*24*60*60*1000));
  return (
    <div style={{ background: "#F2F2F2", marginTop: "55px" }}>
      {
        product && Object.keys(product).length &&
        <Grid container style={{
          display:'flex',background:'#FFF'
        }}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Actionitems product={product} />
          </Grid>
          <Grid style={{ marginTop: '55px'}} item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <div style={{display:'flex'}}>

            <Typography style={{ marginTop: 5, color: '#878787', fontSize: '14' }}>10 Ratings & 5 Reviews</Typography>

            <Box component='span' ><img style={{ width: 77, marginLeft: 20 }} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="flipkartassuredimg" /></Box>
            </div>
            <Typography>
              <span  style={{fontSize:"30"}}>${product.price.cost}</span>  &nbsp;  &nbsp; 
              <span  style={{color:'#878787',textDecoration:'Line-through'}}>${product.price.mrp}</span> &nbsp;   &nbsp; 
              <span style={{color:'#388E3C'}}>{product.price.discount}</span>
            </Typography> <br />
            <Typography style={{fontWeight:'bold',fontSize:20}}>Available offers</Typography>

           <Typography style={{fontSize:15,marginTop:5}}> <LocalOfferIcon style={{fontSize:14,color:'blue'}}/> <span style={{fontWeight:'bold'}}>Bank Offer</span> Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account  <span style={{color:'blue'}}>T&C</span>  </Typography>


             <Typography style={{fontSize:15,marginTop:5}}> <LocalOfferIcon style={{fontSize:14,color:'blue'}}/> <span style={{fontWeight:600}}>Bank Offer</span> Extra ₹1250 off on Credit card trxns on select Laptops <span style={{color:'blue'}}>T&C</span>  </Typography> 


             <Typography style={{fontSize:15,marginTop:5}}> <LocalOfferIcon style={{fontSize:14,color:'blue'}}/> <span style={{fontWeight:'bold'}}>Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card<span style={{color:'blue'}}>T&C</span> </Typography> 


           <Typography style={{fontSize:15,marginTop:5 }}> <LocalOfferIcon style={{fontSize:14,color:'blue'}}/>  <span style={{fontWeight:'bold',fontSize:'8'}}>Partner Offer</span>  Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1,000* <span style={{color:'blue'}}>Know More</span> </Typography> 
           <TableBody  style={{border:'none'}}>
            <TableRow style={{border:'none'}}/>
            <TableCell style={{color:'grey'}}>
              Delivery
            </TableCell>
            <TableCell style={{fontWeight:'bold'}}>
              Delivery by {date.toDateString()} | $80
            </TableCell>
            <TableRow   />
            <TableCell style={{color:'grey'}}>
             Warranty
            </TableCell>
            <TableCell style={{fontWeight:'bold'}}>
             No Warranty
            </TableCell>
            <TableRow />
            <TableCell >
          Seller
            </TableCell>
            <TableCell >
             <span style={{color:'blue'}}>Rao shab Enterprise</span>
             <p>GST invoice available</p>            
            <p>View more sellers starting from ${product.price.cost}</p>  
            </TableCell> 

            <TableRow  />
            <TableCell style={{color:'grey'}}>
             Description
            </TableCell>
            <TableCell >
              {product.description}
            </TableCell>
                     

          </TableBody>
          </Grid>
      
        </Grid>
      }
    </div>
  )
}

export default Productdetailonc;

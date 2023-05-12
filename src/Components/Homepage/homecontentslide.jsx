import { Button, Typography,Divider} from '@mui/material';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import {Link} from 'react-router-dom';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Slides =({products,deal})=>{

    return(
      <div style={{
        marginTop:15,
        background:"white"
      }}>
         <div style={{display:"flex",alignItems:"center"}}>

            <Typography style={{
            //  padding:"10 15",
              fontSize:25,
              fontWeight:"bold",
              lineHeight:2,paddingLeft:10
            }}>{deal}</Typography>
            
             <Button style={{height:30,marginLeft:'auto',marginRight:10}} variant='contained'>View More</Button>
            </div>
         
          <Divider/>
        <Carousel responsive={responsive} wipeable={false} draggable={false} infinite={true} centerMode={true} autoPlay={true} autoPlaySpeed={4500} keyBoardControl={true} dotListClass='custom-dot-list-style' itemClass='carousel-item-padding-40-px' containerClass='carousel-container' >

           {
            products.map(product=>(
              <Link to={`product/${product.id}`} style={{textDecoration:'none',color:'inherit'}}>
            <div style={{textAlign:'center',padding:'20px 30px'}}>

              <  img src={product.url} alt="productimage" style={{width:'auto',height:"150px"}} />
              <p style={{fontSize:14,marginTop:3,fontWeight:600}}>{product.title.shortTitle}</p>
              <p  style={{fontSize:14,marginTop:3,color:"green"}}>{product.discount}</p>
              <p  style={{fontSize:14,marginTop:3,color:"black",opacity:"0.5"}}>{product.tagline}</p>
            </div>
            </Link>
            ))
           }
          
        </Carousel>
             
              </div>
    )
}
export default Slides;
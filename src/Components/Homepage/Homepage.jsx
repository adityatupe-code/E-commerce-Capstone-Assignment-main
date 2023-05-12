import React from 'react'
import Homenavigation from './Homenavigation'
import Carousel from './Carousels'
import { useEffect } from 'react'
import Slides from './homecontentslide'
import { getProducts } from '../../redux/action/productaction'
import { useDispatch,useSelector } from 'react-redux'
const Homepage = () => {

const {products} = useSelector(state =>state.getProducts);




 const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
  return (
    <div>
    <Homenavigation/>
    <div style={{padding:"10px",backgroundColor:"#F2F2F2"}}>

    <Carousel/>
    <Slides products={products} deal={"Deal of the Day"}/>
    <Slides products={products} deal={"Discount for You"}/>
    <Slides products={products} deal={"Suggested Items"}/>
    <Slides products={products} deal={"Top selection"}/>
    <Slides products={products} deal={"Trandding Offer"}/>
    </div>
    </div>
  )
}

export default Homepage

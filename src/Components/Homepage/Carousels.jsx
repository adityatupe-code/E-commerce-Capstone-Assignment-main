import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Carouseldata } from '../../Cons/datafile';
import { styled } from '@mui/material';
const Img = styled('img')(({ theme }) => ({
  width: '100%',
  height: 290,
  [theme.breakpoints.down('md')]: {
      objectFit: 'cover',
      height: 170
  }
}));
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Carousels = () => {
  return (
    <Carousel responsive={responsive} swipeable={false} draggable={false} infinite={true}  autoPlay={true} autoPlaySpeed={4500} keyBoardControl={true} slidesToSlide={1} dotListClass='custom-dot-list-style' itemClass='carousel-item-padding-40-px' containerClass='carousel-container'>
      {
        Carouseldata.map(data => (
          <Img  src={data.url} alt="carousel" />
        ))
      }

    </Carousel>
  )
}

export default Carousels


import { useState } from "react";
import { useEffect } from "react";

const Totalitem =({cartItems})=>{
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    
    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost) 
        })
        setPrice(price);
        setDiscount(discount);
    }
    return(
        <div >
            <div style={{padding:'15px 25px',marginTop:'58px',background:'white',borderBottom:'1px solid black'}}>
                <p style={{color:'#878787'}}>Price Details</p>
            </div>
            <div style={{padding:'38px 25px',background:'white'}}>
                <p style={{marginBottom:'15px',fontSize:'14px'}}>Price( {cartItems ?.length} item)
                <span style={{float:'right'}}>${price}</span>
                </p>
                <p style={{marginBottom:'15px',fontSize:'14px'}}>Discount
                <span style={{float:'right'}} >-${discount}</span>
              
                </p>
                <p style={{marginBottom:'15px',fontSize:'14px'}} >Delivery charges
                <span style={{float:'right'}}>$200</span>
                </p >
                <p style={{marginBottom:'15px',fontSize:'14px'}}>Total Amount
                <span style={{float:'right',fontWeight:'bold'}}>${price - discount + 40}</span>
                </p>
                <p style={{marginBottom:'15px',fontSize:'14px',color:'green'}}>You will save ₹{discount - 40} on this order
                </p>
            </div>
        </div>
    )
}

export default Totalitem;
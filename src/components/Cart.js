import React from 'react'
import Item from './item'
import Items from "../data"
import {Button} from "react-bootstrap"
const Cart = () => {
  return (
    <div class="container">
    <h1>Shopping Cart</h1>
    <p>You have <span>7</span> items in shopping cart</p>
    <div className="items-cart"> {
            Items.map((product,ind)=>{
                return(
                    <Item key={ind} img={product.img} title={product.title} description={product.description} quantity={product.quantity} price={product.price}/>
                    )
            })
        }
        
        </div>
       <div className="d-flex justify-content-end flex-column align-items-end flex mt-4">
           <p>Cart total : Rs.100000</p>

           <Button variant="success" className="my-1 mx-2">
                Checkout
          </Button>
       </div>

    </div>
    
  )
}

export default Cart
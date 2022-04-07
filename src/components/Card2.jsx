import axios from 'axios'
import React from 'react'
import { useAuth } from '../contexts/auth-context'
import { useCart } from '../contexts/cart-context'
import { useWishlist } from '../contexts/wishlist-context'
import "./card2.css"





export default function Card2({item}) {



    
    const {wishlist, setWishlist} = useWishlist()
    const {user} = useAuth()
    const {cart, setCart} = useCart() 

    const removeFromCartHandler = async () => {
        try {
          const cartDeleteResponse = await axios({
            method: "delete",
            url: `/api/user/cart/${item._id}`,
            headers: {authorization: user.token},
            data: {product: item}
          })
   
          setCart({cart: cartDeleteResponse.data.cart}) 
   
        } catch (error) {
          console.log(error)
        }
       }
   

const incrementHandler = async() => {
    const responseForIncrement = await axios({
        method: "post",
        url: `/api/user/cart/${item._id}`,
        headers: {authorization: user.token},
        data: {
            action: {
              type: "increment"
            }
          }

    })
    setCart({cart: responseForIncrement.data.cart})
    
} 

const decrementHandler = async() => {
    const responseForDecrement = await axios({
        method: "post",
        url: `/api/user/cart/${item._id}`,
        headers: {authorization: user.token},
        data: {
            action: {
                type: "decrement"
            }
        }
    })
    setCart({cart: responseForDecrement.data.cart})
}

const addToWishlistHandler = async () => {
 
  try {
     {
      const response = await axios({
        method: "post",
        url: "/api/user/wishlist",
        headers: { authorization: user.token },
        data: { product: item },
      });
      setWishlist({ wishlist: response.data.wishlist });
    }
  } catch (error) {
    console.log(error);
  } 

  try {
    const cartDeleteResponse = await axios({
      method: "delete",
      url: `/api/user/cart/${item._id}`,
      headers: {authorization: user.token},
      data: {product: item}
    })

    setCart({cart: cartDeleteResponse.data.cart}) 

  } catch (error) {
    console.log(error)
  }
};


  return (
    <div> 
        
        <div className="card e-commerce product-display-card">
        <div className="container1 badge-card">
          <img className="card-image" src={item.imageURL} />

         
        </div>

        <div className="container2">
          <div className="card-description"> {item.description} </div>
          <div className="price">
            <div className="discount-price"> {item.price} </div>
            <div className="original-price">
              <s> {item.originalPrice} </s>
            </div>
          </div>
          <div className="discount-percent"> {item.percentOff} </div>
          <div> {item.inStock ? "Available in stock" : "Not available"} </div>
          <div> {item.fastDelivery ? "Fast delivery" : "Minimum 2 days"} </div>
          <div> {item.ratings} ⭐ </div>
        </div>
        <div className="container4">

        <button className='btn-increment-decrement' onClick={incrementHandler} >+</button>
    
         {item.qty}
        
        <button className='btn-increment-decrement' onClick={decrementHandler}>-</button>
        </div>
         <button className="button2 full-width primary-color-button2" onClick={removeFromCartHandler} >Remove from cart</button>

         <button className="button2 full-width primary-color-button2" onClick={addToWishlistHandler} >Move to wishlist</button>



        
       
      

    

       

        </div>
      </div> 
     
        
    
    
  )

}
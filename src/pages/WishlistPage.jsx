import React from 'react'
import Card from '../components/Card';
import { NavBar } from "../components/NavBar";
import { useWishlist } from '../contexts/wishlist-context';
import "./wishlistpage.css"



export default function WishlistPage() {

  const {wishlist} = useWishlist()

  const wishlistid = wishlist.wishlist.map((item) => item._id)

  return (
    <div>

    <NavBar/>
    
    
     <main> 

        <h1 className="product-type-titles">Your Wishlist</h1> 
        
        <div className='empty-wishlist' > {wishlist.wishlist.length === 0 ? "Your Wishlist is Empty" : "" } </div>
        <div className="product-display-container">
        {wishlist.wishlist.map(item => <Card  inWishlist = { wishlistid.includes(item._id) } key={item.id} item={item} />) }
        </div>
        </main>

   
    </div>
  )
}

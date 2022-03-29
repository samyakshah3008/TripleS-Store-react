import React from 'react'
import Card from '../components/Card';
import { Footer } from '../components/Footer';
import { NavBar } from "../components/NavBar";
import { useWishlist } from '../contexts/wishlist-context';
import "./wishlistpage.css"


export default function WishlistPage() {

  const {wishlist} = useWishlist()


  return (
    <div>

    <NavBar/>
    
    
     <main> 

        <h1 className="product-type-titles">Your Wishlist</h1> 

        <div className='empty-wishlist' >Your Wishlist is Empty</div>
        <div className="product-display-container">
        {wishlist.wishlist.map(item => <Card key={item.id} item={item} />) }
        </div>
        </main>

   
    </div>
  )
}

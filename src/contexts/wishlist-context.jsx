import { createContext, useContext, useState } from "react";

const createWishlist = createContext({ wishlist: [] });

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState({ wishlist: [] });

  return (
    <createWishlist.Provider value={{ wishlist, setWishlist }}>
      {children}
    </createWishlist.Provider>
  );
};

export const useWishlist = () => useContext(createWishlist);

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useCart } from "../contexts/cart-context";
import { useWishlist } from "../contexts/wishlist-context";

export function useWishlistService() {
  const { user } = useAuth();
  const { wishlist, setWishlist } = useWishlist();
  const { setCart } = useCart();
  const navigate = useNavigate();
  const addToWishlistHandler = async (item) => {
    if (user.token === null) {
      navigate("/login");
    }

    try {
      const response = await axios({
        method: "post",
        url: "/api/user/wishlist",
        headers: { authorization: user.token },
        data: { product: item },
      });
      setWishlist({ wishlist: response.data.wishlist });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteToWishlistHandler = async (item) => {
    try {
      const deleteResponse = await axios({
        method: "delete",
        url: `/api/user/wishlist/${item._id}`,
        headers: { authorization: user.token },
        data: { product: item },
      });

      setWishlist({ wishlist: deleteResponse.data.wishlist });
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlistHandlerAndRemoveCart = async (item) => {
    const foundInWishlist = wishlist.wishlist.find(
      (element) => element._id === item._id
    );
    if (user.token === null) {
      navigate("/login");
    }

    if (foundInWishlist) {
      try {
        const cartDeleteResponse = await axios({
          method: "delete",
          url: `/api/user/cart/${item._id}`,
          headers: { authorization: user.token },
          data: { product: item },
        });

        setCart({ cart: cartDeleteResponse.data.cart });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios({
          method: "post",
          url: "/api/user/wishlist",
          headers: { authorization: user.token },
          data: { product: item },
        });
        setWishlist({ wishlist: response.data.wishlist });
      } catch (error) {
        console.log(error);
      }

      try {
        const cartDeleteResponse = await axios({
          method: "delete",
          url: `/api/user/cart/${item._id}`,
          headers: { authorization: user.token },
          data: { product: item },
        });

        setCart({ cart: cartDeleteResponse.data.cart });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    addToWishlistHandler,
    deleteToWishlistHandler,
    addToWishlistHandlerAndRemoveCart,
  };
}

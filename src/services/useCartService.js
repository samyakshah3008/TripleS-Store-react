import { useAuth } from "../contexts/auth-context";
import { useCart } from "../contexts/cart-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function useCartService() {
  const { setCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const goCartHandler = async (item) => {
    if (user === null) {
      navigate("/login");
    }

    try {
      const cartResponse = await axios({
        method: "post",
        url: "/api/user/cart",
        headers: { authorization: user.token },
        data: { product: item },
      });

      setCart({ cart: cartResponse.data.cart });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCartHandler = async (item) => {
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
  };

  const incrementHandler = async (item) => {
    const responseForIncrement = await axios({
      method: "post",
      url: `/api/user/cart/${item._id}`,
      headers: { authorization: user.token },
      data: {
        action: {
          type: "increment",
        },
      },
    });
    setCart({ cart: responseForIncrement.data.cart });
  };

  const decrementHandler = async (item) => {
    const responseForDecrement = await axios({
      method: "post",
      url: `/api/user/cart/${item._id}`,
      headers: { authorization: user.token },
      data: {
        action: {
          type: "decrement",
        },
      },
    });
    setCart({ cart: responseForDecrement.data.cart });
  };

  return {
    goCartHandler,
    removeFromCartHandler,
    incrementHandler,
    decrementHandler,
  };
}

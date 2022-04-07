import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useCart } from "../contexts/cart-context";
import { useWishlist } from "../contexts/wishlist-context";

export function NavBar() {
  const { user, setUser } = useAuth();
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();

  const logoutHandler = () => {
    setUser({ token: null });
    navigate("/");
    setWishlist({ wishlist: [] });
    setCart({ cart: [] });
  };
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className="nav-container">
          <Link to="/">
            <div className="nav-logo">TripleS Store</div>
          </Link>
          <div className="input-container">
            <input type="text" className="nav-input" placeholder="Search" />
            <span className="fas fa-search search-btn"></span>
          </div>
          <div className="nav-btn-container">
            <div className="log-in-container">
              <i className="far fa-user-circle"></i>

              {user.token === null ? (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                  className="log-in"
                >
                  Login
                </span>
              ) : (
                <span
                  style={{ cursor: "pointer" }}
                  className="log-in"
                  onClick={logoutHandler}
                >
                  Logout
                </span>
              )}
            </div>
            <div className="wish-list-container">
              <i className="far fa-heart"></i>
              <span className="number-badge">
                {" "}
                {user.token === null ? "0" : wishlist.wishlist.length}{" "}
              </span>
              <Link to="/wishlist">
                <span className="wish-list">Wishlist</span>
              </Link>
            </div>
            <div className="cart-container">
              <i className="fas fa-shopping-cart"></i>
              <span className="number-badge">
                {user.token === null ? "0" : cart.cart.length}
              </span>
              <Link to="/cart">
                {" "}
                <span className="cart"> Cart </span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

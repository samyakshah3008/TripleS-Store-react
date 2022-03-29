import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export function NavBar() {
  const { user } = useAuth();

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
              <Link to="/login">
                <span className="log-in">
                  {" "}
                  {user.token === null ? "login" : "logout"}{" "}
                </span>
              </Link>
            </div>
            <div className="wish-list-container">
              <i className="far fa-heart"></i>
              <span className="number-badge">0</span>
              <span className="wish-list">Wishlist</span>
            </div>
            <div className="cart-container">
              <i className="fas fa-shopping-cart"></i>
              <span className="number-badge">0</span>
              <span className="cart">Cart</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

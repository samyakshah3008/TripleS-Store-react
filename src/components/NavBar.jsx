import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-container">
          
          <Link to = "/"><div className="nav-logo">TripleS Store</div></Link>
          <div className="input-container">
            <input type="text" className="nav-input" placeholder="Search" />
            <span className="fas fa-search search-btn"></span>
          </div>
          <div className="nav-btn-container">
            <div className="log-in-container">
              <i className="far fa-user-circle"></i>
              <span className="log-in">Log in</span>
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

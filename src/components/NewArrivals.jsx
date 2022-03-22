import nikeShoes from "../assets/nike-shoes.png";

export function NewArrivals() {
  return (
    <div>
      <h1 className="product-type-titles">New Arrivals</h1>

      <div className="product-container">
        <div className="product-card">
          <a href="/styles/product/product.html" target="_blank">
            <img src={nikeShoes} className="card-img" alt="nike=shoes" />
          </a>
          <div className="card-info">Nike Sport Shoes</div>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star-half-alt star selected-star"></i>
          <i className="far fa-star star selected-star"></i>
          <div className="product-price">$30.00</div>
        </div>

        <div className="product-card">
          <a href="/styles/product/product.html" target="_blank">
            <img src={nikeShoes} className="card-img" alt="nike=shoes" />
          </a>
          <div className="card-info">Nike Sport Shoes</div>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star-half-alt star selected-star"></i>
          <i className="far fa-star star selected-star"></i>
          <div className="product-price">$30.00</div>
        </div>

        <div className="product-card">
          <a href="/styles/product/product.html" target="_blank">
            <img src={nikeShoes} className="card-img" alt="nike=shoes" />
          </a>
          <div className="card-info">Nike Sport Shoes</div>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star-half-alt star selected-star"></i>
          <i className="far fa-star star selected-star"></i>
          <div className="product-price">$30.00</div>
        </div>
      </div>
    </div>
  );
}

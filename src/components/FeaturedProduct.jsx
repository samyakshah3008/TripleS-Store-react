import mrfBat from "../assets/mrf-bat.png"
import nikeFootball from "../assets/nike-football.png"
import kookaburraBall from "../assets/kookabura-ball.png"
import nikeShoes from "../assets/nike-shoes.png"
import jersey from "../assets/jersey.png"




export function FeaturedProduct() {
  return (
    <div>
      <h1 className="product-type-titles">Featured Products</h1>

      <div className="product-container">
        <div className="product-card">
        
            <img src={mrfBat} className="card-img" alt="mrf-bat" />
          
          <div className="card-info">MRF Cricket Bats</div>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="far fa-star star selected-star"></i>
          <div className="product-price">$60.00</div>
        </div>
        <div className="product-card">
        
            <img src={nikeFootball} className="card-img" alt="football-nike" />
        
          <div className="card-info">Nike Football</div>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="far fa-star star selected-star"></i>
          <div className="product-price">$80.00</div>
        </div>
        <div className="product-card">
        
            <img
              src={kookaburraBall}
              className="card-img"
              alt="kookaburra-ball"
            />
          
          <div className="card-info">Kookaburra Cricket Ball</div>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="far fa-star star selected-star"></i>
          <div className="product-price">$20.00</div>
        </div>
        <div className="product-card">
        
            <img src={nikeShoes} className="card-img" alt="nike=shoes" />
          
          <div className="card-info">Nike Sport Shoes</div>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star-half-alt star selected-star"></i>
          <i className="far fa-star star selected-star"></i>
          <div className="product-price">$30.00</div>
        </div>

        <div className="product-card">
        
            <img src={jersey} className="card-img" alt="nike=shoes" />
          
          <div className="card-info">Cricket Jersey</div>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star star selected-star"></i>
          <i className="fas fa-star-half-alt star selected-star"></i>
          <i className="far fa-star star selected-star"></i>
          <div className="product-price">$30.00</div>
        </div>

        <div className="product-card">
        
            <img src={nikeShoes} className="card-img" alt="nike=shoes" />
          
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

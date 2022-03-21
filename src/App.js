import "./App.css";
import heroHeader from "./assets/hero-header.png"
import spartanLogo from "./assets/spartan-logo.png"
import nikeLogo from "./assets/nike-logo.png"
import mrfLogo from "./assets/mrf-logo.png"
import kookaburraLogo from "./assets/kookaburra-logo.jpg"
import newbalanceLogo from "./assets/newbalance-logo.png"
import cricketBall from "./assets/cricket-ball.jpg"
import jersey from "./assets/jersey.png"
import pumaLogo from "./assets/Logo+Puma.jpg"
import kookaburraBall from "./assets/kookabura-ball.png"
import miExclusive from "./assets/mi-exclusive.png"
import mrfBat from "./assets/mrf-bat.png"
import nbBat from "./assets/nb-bat.jpg"
import nikeFootball from "./assets/nike-football.png"
import nikeShoes from "./assets/nike-shoes.png"
import spartanBat from "./assets/spartan-bat.jpg"


function App() {
  return (
    <div className="App">
    

    
    <nav>
       <div className="nav-container">
        <a href="/index.html"><div className="nav-logo">TripleS Store</div></a>
        <div className="input-container">
        <input type="text" className="nav-input" placeholder="Search"/>
        <span className="fas fa-search search-btn"></span>
    </div>
        <div className="nav-btn-container">     
            <div className="log-in-container">
                <a href="/styles/authentication/login.html"><i className="far fa-user-circle"></i></a>
                <span className="log-in">Log in</span>
            </div> 
            
            <div className="wish-list-container">
           <a href="/styles/wishlist/wishlist.html"><i className="far fa-heart"></i></a>
                <span className="number-badge">0</span>
                <span className="wish-list">Wishlist</span>
            </div>

            <div className="cart-container">
            <a href="/styles/cart/cart.html"><i className="fas fa-shopping-cart"></i></a>
            <span className="number-badge">0</span>
                <span className="cart">Cart</span>
            </div>
            
        </div>
       </div>
    </nav>  

    <header>
        <div className="header-container">
            <div className="header-content">
                <h1 className="heading">Lorem ipsum dolor sit amet. </h1>
                <p className="header-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum autem corporis in ipsa odit. Quaerat obcaecati aut ducimus perspiciatis quia, aspernatur quod fugiat! Optio, quisquam nisi quos culpa aliquam et.</p>
                <a href="/styles/product/product.html" target="_blank"><button className="shop-now-btn">Shop now</button></a> 
            </div>

            <div className="hero-header-img">
                <img src= {heroHeader} alt="workout-img"/>
            </div>
        </div>
    </header> 

    <main>

        <h1 className="product-type-titles">Featured Products</h1> 

        <div className="product-container">
            <div className="product-card">
               <a href="/styles/product/product.html" target="_blank"><img src= {mrfBat} className="card-img" alt="mrf-bat"/></a> 
                <div className="card-info">MRF Cricket Bats</div>
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star star selected-star"></i>
            <i className="far fa-star star selected-star"></i>
            <div className="product-price">$60.00</div>

                
            </div>
            <div className="product-card">
                <a href="/styles/product/product.html" target="_blank"><img src= {nikeFootball} className="card-img" alt="football-nike"/></a>
                <div className="card-info">Nike Football</div>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="far fa-star star selected-star"></i>
                <div className="product-price">$80.00</div>
    
            </div>
            <div className="product-card">
                <a href="/styles/product/product.html" target="_blank"><img src= {kookaburraBall} className="card-img" alt="kookaburra-ball"/></a>
                <div className="card-info">Kookaburra Cricket Ball</div>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="far fa-star star selected-star"></i>
                <div className="product-price">$20.00</div>
    
            </div>
            <div className="product-card">
                <a href="/styles/product/product.html" target="_blank"><img src= {nikeShoes} className="card-img" alt="nike=shoes"/></a> 
                <div className="card-info">Nike Sport Shoes</div>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star-half-alt star selected-star"></i>
                <i className="far fa-star star selected-star"></i>
                <div className="product-price">$30.00</div>
    
            </div> 

            <div className="product-card">
                <a href="/styles/product/product.html" target="_blank"><img src= {jersey} className="card-img" alt="nike=shoes"/></a>
                <div className="card-info">Cricket Jersey</div>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star-half-alt star selected-star"></i>
                <i className="far fa-star star selected-star"></i>
                <div className="product-price">$30.00</div>
    
            </div>

            <div className="product-card">
                <a href="/styles/product/product.html" target="_blank"><img src= {nikeShoes} className="card-img" alt="nike=shoes"/></a>
                <div className="card-info">Nike Sport Shoes</div>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star-half-alt star selected-star"></i>
                <i className="far fa-star star selected-star"></i>
                <div className="product-price">$30.00</div>
    
            </div>
        </div> 

        <h1 className="product-type-titles">New Arrivals</h1> 

        <div className="product-container"> 
            <div className="product-card">
                <a href="/styles/product/product.html" target="_blank"><img src={nikeShoes} className="card-img" alt="nike=shoes"/></a>
                <div className="card-info">Nike Sport Shoes</div>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star-half-alt star selected-star"></i>
                <i className="far fa-star star selected-star"></i>
                <div className="product-price">$30.00</div>
    
            </div> 

            <div className="product-card">
                <a href="/styles/product/product.html" target="_blank"><img src={nikeShoes} className="card-img" alt="nike=shoes"/></a>
                <div className="card-info">Nike Sport Shoes</div>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star-half-alt star selected-star"></i>
                <i className="far fa-star star selected-star"></i>
                <div className="product-price">$30.00</div>
    
            </div>

            <div className="product-card">
                <a href="/styles/product/product.html" target="_blank"><img src={nikeShoes} className="card-img" alt="nike=shoes"/></a>
                <div className="card-info">Nike Sport Shoes</div>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star-half-alt star selected-star"></i>
                <i className="far fa-star star selected-star"></i>
                <div className="product-price">$30.00</div>
    
            </div>
        </div>    
     
        <div className="exclusive-product-container">
            <img src= {miExclusive} className = "exclusive-product-img" alt="mi-watch" />
            <div className="exclusive-product-info-container">
            <div className="exclusive-product-info">Exclusively Available on TripleS Store</div>
            <h1 className="exclusive-product-heading">Smart Band 4</h1>
            <p className="exclusive-product-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit.</p> 
            <a href="/styles/product/product.html" target="_blank"><button className="shop-now-secondary-btn">Shop now</button></a>

        </div>

        </div> 

        <div className="testimonials-container">
            <div className="testimonial-card">
                <i className="fa fa-quote-left testimonial-quote star selected-star"></i>

                <div className="feedback-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quia!</div>
                <div className="ratings">
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star-half-alt star selected-star"></i>
                <i className="far fa-star star selected-star"></i> 
            </div>
                <img src= {cricketBall} className="avatar"></img>
                <h2 className="author-name">Lorem, ipsum.</h2>

            </div> 

            <div className="testimonial-card">
                <i className="fa fa-quote-left testimonial-quote star selected-star"></i>

                <div className="feedback-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quia!</div>
                <div className="ratings">
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star-half-alt star selected-star"></i>
                <i className="far fa-star star selected-star"></i> 
            </div>
                <img src= {cricketBall} className="avatar"></img>
                <h2 className="author-name">Lorem, ipsum.</h2>

            </div>

            <div className="testimonial-card">
                <i className="fa fa-quote-left testimonial-quote star selected-star"></i>

                <div className="feedback-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quia!</div>
                <div className="ratings">
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star star selected-star"></i>
                <i className="fas fa-star-half-alt star selected-star"></i>
                <i className="far fa-star star selected-star"></i> 
            </div>
                <img src= {cricketBall} className="avatar"></img>
                <h2 className="author-name">Lorem, ipsum.</h2>

            </div>
        </div> 

        <h1 className="product-type-titles">Our partners</h1> 


        <div className="logo-container">
            <img className="logo-img" src= {nikeLogo} alt="nike-logo"/>
            <img className="logo-img" src= {kookaburraLogo} alt="kookabura-logo"/>
            <img className="logo-img" src= {newbalanceLogo} alt="new-balance-logo"/>
            <img className="logo-img" src= {spartanLogo} alt="spartan-logo"/>
            <img className="logo-img" src= {mrfLogo} alt="mrf-logo"/>
        </div>

           </main>  

        <footer>
            <div className="footer">

                <div className="help-section">
                    <div className="section-header"><strong>Help</strong></div>
                    
                    <div>Contact us</div>
                    <div>FAQ</div>
                    <div>Size guide</div>
                    <div>Sale Exclusions</div>
                </div>

                <div className="help-section">
                    <div className="section-header"><strong>Help</strong></div>
                   
                    <div>Contact us</div>
                    <div>FAQ</div>
                    <div>Size guide</div>
                    <div>Sale Exclusions</div>
                </div>

                <div className="help-section">
                    <div className="section-header"><strong>Help</strong></div>
                    
                    <div>Contact us</div>
                    <div>FAQ</div>
                    <div>Size guide</div>
                    <div>Sale Exclusions</div>
                </div>

                <div className="help-section">
                    <div className="section-header"><strong>Help</strong></div>
                    <div>Contact us</div>
                    <div>FAQ</div>
                    <div>Size guide</div>
                    <div>Sale Exclusions</div>
                </div> 

                <div className="about-us-section">
                    <div className="our-logo">TripleS</div>
                    <p className="about-us-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorem!</p>
                    <div className="subFooterContainer">
                        <div className="footerPills fab fa-twitter"></div>
                        <div className="footerPills fab fa-linkedin"></div>
                        <div className="footerPills fab fa-github"></div>
                    </div>
                </div>

            </div>
        </footer>
    



    </div>
  );
}

export default App;

import miExclusive from "../assets/mi-exclusive.png"


export function ExclusiveProduct(){
    return(
        <div>
              <div className="exclusive-product-container">
            <img src= {miExclusive} className = "exclusive-product-img" alt="mi-watch" />
            <div className="exclusive-product-info-container">
            <div className="exclusive-product-info">Exclusively Available on TripleS Store</div>
            <h1 className="exclusive-product-heading">Smart Band 4</h1>
            <p className="exclusive-product-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit.</p> 
            <a href="/styles/product/product.html" target="_blank"><button className="shop-now-secondary-btn">Shop now</button></a>

        </div>
        </div> 

        </div>
    )

}
import miExclusive from "../assets/mi-exclusive.png"
import { navigate, useNavigate } from "react-router-dom"
import { useFilter } from "../contexts/filtercontext"


export function ExclusiveProduct(){
    const navigate = useNavigate()
    const {dispatch} = useFilter()
  
    return(
        <div>
              <div className="exclusive-product-container">
            <img src= {miExclusive} className = "exclusive-product-img" alt="mi-watch" />
            <div className="exclusive-product-info-container">
            <div className="exclusive-product-info">Exclusively Available on TripleS Store</div>
            <h1 className="exclusive-product-heading">Smart Band 4</h1>
            <p className="exclusive-product-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit.</p> 
            <button onClick={() => {dispatch({ type: "EXCLUSIVE" })
        navigate("/products")}} className="shop-now-secondary-btn">Shop now</button>

        </div>
        </div> 

        </div>
    )

}
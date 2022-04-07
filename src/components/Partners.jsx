import spartanLogo from "../assets/spartan-logo.png"
import nikeLogo from "../assets/nike-logo.png"
import mrfLogo from "../assets/mrf-logo.png"
import kookaburraLogo from "../assets/kookaburra-logo.jpg"
import newbalanceLogo from "../assets/newbalance-logo.png"
import { navigate, useNavigate } from "react-router-dom"
import { useFilter } from "../contexts/filtercontext"




export function Partners() {

  const navigate = useNavigate()
  const {dispatch} = useFilter()

  

  return (
    <div>
      <h1 className="product-type-titles">Product Categories</h1>

      <div className="logo-container">
        <img onClick={() => {dispatch({ type: "NIKE" })
        navigate("/products")}} className="logo-img" src={nikeLogo} alt="nike-logo" />
        <img onClick={() => {dispatch({ type: "KOOKABURA" })
        navigate("/products")}} className="logo-img" src={kookaburraLogo} alt="kookabura-logo" />
        <img onClick={() => {dispatch({ type: "NEWBALANCE" })
        navigate("/products")}} className="logo-img" src={newbalanceLogo} alt="new-balance-logo" />
        <img onClick={() => {dispatch({ type: "SPARTAN" })
        navigate("/products")}} className="logo-img" src={spartanLogo} alt="spartan-logo" />
        <img onClick={() => {dispatch({ type: "MRF" })
        navigate("/products")}} className="logo-img" src={mrfLogo} alt="mrf-logo" />
      </div>
    </div>
  );
}

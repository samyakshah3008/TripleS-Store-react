import spartanLogo from "../assets/spartan-logo.png"
import nikeLogo from "../assets/nike-logo.png"
import mrfLogo from "../assets/mrf-logo.png"
import kookaburraLogo from "../assets/kookaburra-logo.jpg"
import newbalanceLogo from "../assets/newbalance-logo.png"


export function Partners() {
  return (
    <div>
      <h1 className="product-type-titles">Our partners</h1>

      <div className="logo-container">
        <img className="logo-img" src={nikeLogo} alt="nike-logo" />
        <img className="logo-img" src={kookaburraLogo} alt="kookabura-logo" />
        <img className="logo-img" src={newbalanceLogo} alt="new-balance-logo" />
        <img className="logo-img" src={spartanLogo} alt="spartan-logo" />
        <img className="logo-img" src={mrfLogo} alt="mrf-logo" />
      </div>
    </div>
  );
}

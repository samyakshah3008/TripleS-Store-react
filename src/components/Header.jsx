import { Link } from "react-router-dom";
import heroHeader from "../assets/hero-header.png";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <h1 className="heading">Lorem ipsum dolor sit amet. </h1>
          <p className="header-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            autem corporis in ipsa odit. Quaerat obcaecati aut ducimus
            perspiciatis quia, aspernatur quod fugiat! Optio, quisquam nisi quos
            culpa aliquam et.
          </p>

          <Link to="/products">
            {" "}
            <button className="shop-now-btn">Shop now</button>{" "}
          </Link>
        </div>

        <div className="hero-header-img">
          <img src={heroHeader} alt="workout-img" />
        </div>
      </div>
    </header>
  );
}

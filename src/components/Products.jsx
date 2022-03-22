import mrfBat from "../assets/mrf-bat.png";
import nikeFootball from "../assets/nike-football.png";
import kookaburraBall from "../assets/kookabura-ball.png";
import nikeShoes from "../assets/nike-shoes.png";
import jersey from "../assets/jersey.png";
import heroHeader from "../assets/hero-header.png";
import Card from "./Card";
import { useProduct } from "../contexts/product-context";

export function Products() {
  const { state } = useProduct();

  return (
    <div>
      <div className="product-display-container">
        {state.products.map((item) => (
          <Card key={item.id} item={item} />
        ))}

        <div className="page-btn">
          <span className="page-numbers number-active">1</span>
          <span className="page-numbers">2</span>
          <span className="page-numbers">3</span>
          <span className="page-numbers">4</span>
          <span className="page-numbers"> &#8594; </span>
        </div>
      </div>
    </div>
  );
}

import mrfBat from "../assets/mrf-bat.png";
import nikeFootball from "../assets/nike-football.png";
import kookaburraBall from "../assets/kookabura-ball.png";
import nikeShoes from "../assets/nike-shoes.png";
import jersey from "../assets/jersey.png";
import heroHeader from "../assets/hero-header.png";
import Card from "./Card";
import { useProduct } from "../contexts/product-context";
import { useReducer } from "react";
import { useFilter } from "../contexts/filtercontext";
import { fastDeliveryFilter, priceRangeFilter, stockFilter, sortData, ratingFilter } from "../utilities/filter-utils";


export function Products() {     


  // const priceRangeList = priceRangeFilter(state.products, )


  const { products } = useProduct();

  const {state, dispatch} = useFilter()

  const priceRangeList = priceRangeFilter(products, state.range);
  const stockFilterList = stockFilter(priceRangeList, state.onlyInStock);
  const fastDeliveryList = fastDeliveryFilter(
    stockFilterList,
    state.fastDelivery
  );
  
  const sortFinalList = sortData(fastDeliveryList, state.sortBy);

  const ratingsFilterList = ratingFilter(sortFinalList, state.ratings);





 
  return (
    <div>
      <div className="product-display-container">
        {ratingsFilterList.map((item) => (
          <Card key={item.id} item={item} />
        ))}

        
      </div>
    </div>
  );
}

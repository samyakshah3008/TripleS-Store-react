import Card from "./Card";
import { useProduct } from "../contexts/product-context";
import { useFilter } from "../contexts/filtercontext";
import {
  fastDeliveryFilter,
  priceRangeFilter,
  stockFilter,
  sortData,
  ratingFilter,
  sortByCategory,
} from "../utilities/filter-utils";
import { useWishlist } from "../contexts/wishlist-context";
import { useCart } from "../contexts/cart-context";

export function Products() {
  const { products } = useProduct();
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const wishlistid = wishlist.wishlist.map((item) => item._id);
  const cartid = cart.cart.map((item) => item._id);

  const { state } = useFilter();

  const { mrf, kookabura, spartan, nike, exclusive, newbalance } =
    state.categories;

  const priceRangeList = priceRangeFilter(products, state.range);
  const stockFilterList = stockFilter(priceRangeList, state.onlyInStock);
  const fastDeliveryList = fastDeliveryFilter(
    stockFilterList,
    state.fastDelivery
  );

  const sortFinalList = sortData(fastDeliveryList, state.sortBy);

  const ratingsFilterList = ratingFilter(sortFinalList, state.ratings);

  const sortByCategoryFinalList = sortByCategory(
    ratingsFilterList,
    mrf,
    kookabura,
    spartan,
    nike,
    exclusive,
    newbalance
  );

  return (
    <>
      <div className="product-display-container">
        {sortByCategoryFinalList.map((item) => (
          <Card
            inWishlist={wishlistid.includes(item._id)}
            key={item.id}
            item={item}
            inCart={cartid.includes(item._id)}
          />
        ))}
        <div className="mobile__filter">
          <button className="theme-color">Filter</button>
        </div>
      </div>
    </>
  );
}

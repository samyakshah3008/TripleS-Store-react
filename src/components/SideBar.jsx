import { useFilter } from "../contexts/filtercontext";
import { useProduct } from "../contexts/product-context";

export function SideBar() {
  const { state, dispatch } = useFilter();
  const { products } = useProduct();

  return (
    <>
      <div className="side-bar-container">
        <div className="title">
          <div className="heading-title">Filters</div>
        </div>

        <h3
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear filters
        </h3>

        <div className="filters">
          <div className="filter-wrapper">
            <div className="filter-title">Price</div>
            <div className="filter-value">
              <div className="filter-price">
                <div>500</div>
                <div> {state.range} </div>
              </div>
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "RANGE_FILTER", payload: e.target.value })
              }
              className="range-input"
              type="range"
              min="500"
              max="5000"
              value={state.range}
            />
            <div>
              <input
                checked={state.onlyInStock}
                className="instock"
                type="checkbox"
                onClick={(e) =>
                  dispatch({ type: "ONLY_IN_STOCK", payload: e.target.checked })
                }
              />
              <label>Include only in stock products</label>
            </div>
            <div>
              <input
                checked={state.fastDelivery}
                className="fastdelivery"
                type="checkbox"
                onClick={(e) =>
                  dispatch({ type: "FAST_DELIVERY", payload: e.target.checked })
                }
              />
              <label>Fast delivery</label>
            </div>
          </div>
          <div className="filter-wrapper">
            <div className="filter-title">Category</div>
            <div className="filter-value filter-category">
              <label>
                <input
                  checked={state.categories.mrf}
                  onChange={(e) => dispatch({ type: "MRF" })}
                  className="checkbox-input"
                  type="checkbox"
                />
                MRF
              </label>

              <label>
                <input
                  checked={state.categories.kookabura}
                  onChange={(e) => dispatch({ type: "KOOKABURA" })}
                  className="checkbox-input"
                  type="checkbox"
                />
                Kookaburra
              </label>

              <label>
                <input
                  checked={state.categories.nike}
                  onChange={(e) => dispatch({ type: "NIKE" })}
                  className="checkbox-input"
                  type="checkbox"
                />
                Nike
              </label>

              <label>
                <input
                  checked={state.categories.newbalance}
                  onChange={(e) => dispatch({ type: "NEWBALANCE" })}
                  className="checkbox-input"
                  type="checkbox"
                />
                New Balance
              </label>

              <label>
                <input
                  checked={state.categories.spartan}
                  onChange={(e) => dispatch({ type: "SPARTAN" })}
                  className="checkbox-input"
                  type="checkbox"
                />
                Spartan
              </label>

              <label>
                <input
                  checked={state.categories.exclusive}
                  onChange={(e) => dispatch({ type: "EXCLUSIVE" })}
                  className="checkbox-input"
                  type="checkbox"
                />
                Exclusive items
              </label>
            </div>
          </div>

          <div className="filter-wrapper">
            <div className="filter-title">Ratings</div>
          </div>
          <div className="filter-wrapper">
            <div className="filter-value filter-rating">
              <label>
                <input
                  checked={state.ratings === "4STARSABOVE"}
                  className="radio-input"
                  type="radio"
                  name="rating"
                  onClick={(e) =>
                    dispatch({ type: "RATINGS", payload: "4STARSABOVE" })
                  }
                />
                4 Stars and above
              </label>

              <label>
                <input
                  checked={state.ratings === "3STARSABOVE"}
                  className="radio-input"
                  type="radio"
                  name="rating"
                  onClick={(e) =>
                    dispatch({ type: "RATINGS", payload: "3STARSABOVE" })
                  }
                />
                3 Stars and above
              </label>

              <label>
                <input
                  checked={state.ratings === "2STARSABOVE"}
                  className="radio-input"
                  type="radio"
                  name="rating"
                  onClick={(e) =>
                    dispatch({ type: "RATINGS", payload: "2STARSABOVE" })
                  }
                />
                2 Stars and above
              </label>

              <label>
                <input
                  checked={state.ratings === "1STARSABOVE"}
                  className="radio-input"
                  type="radio"
                  name="rating"
                  onClick={(e) =>
                    dispatch({ type: "RATINGS", payload: "1STARSABOVE" })
                  }
                />
                1 Stars and above
              </label>
            </div>
          </div>

          <div className="filter-wrapper">
            <div className="filter-title">Sort By</div>
            <div className="filter-value">
              <label>
                <input
                  checked={state.sortBy === "HIGH_TO_LOW"}
                  className="radio-input"
                  type="radio"
                  name="price-level"
                  onClick={(e) =>
                    dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
                  }
                />
                Price: High to Low
              </label>

              <label>
                <input
                  checked={state.sortBy === "LOW_TO_HIGH"}
                  className="radio-input"
                  type="radio"
                  name="price-level"
                  onClick={(e) =>
                    dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
                  }
                />
                Price: Low to High
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

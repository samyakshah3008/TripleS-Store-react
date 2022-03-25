import { useFilter } from "../contexts/filtercontext";
import { useProduct } from "../contexts/product-context";



export function SideBar() {

  const {state, dispatch} = useFilter() 
  const {products} = useProduct()

  // console.log(state)

  

  // console.log(priceRangeList);

  


  return (
    <div>
      <div className="side-bar-container">
        <div className="title">
          <div className="heading-title">Filters</div>
          <div className="clear-link">Clear</div>
        </div>

        <div className="filters">
          <div className="filter-wrapper">
            <div className="filter-title">Price</div>
            <div className="filter-value">
              <div className="filter-price">
                <div>500</div>
                <div> {state.range} </div>
              </div>
            </div>
            <input onChange={(e) => dispatch({type: "RANGE_FILTER", payload: e.target.value})}
              className="range-input"
              type="range"
              min="500"
              max="5000"
              value={state.range}
            />
            <div>
            <input className="instock" type = "checkbox" onClick={(e) => dispatch({type: "ONLY_IN_STOCK", payload: e.target.checked})} />
            <label>Include only in stock products</label> 
            </div>
            <div>
            <input className="fastdelivery" type = "checkbox" onClick={(e) => dispatch({type: "FAST_DELIVERY", payload: e.target.checked })} />
            <label>Fast delivery</label>
            </div>
          </div> 
          <div className="filter-wrapper">
            <div className="filter-title">Category</div>
            <div className="filter-value filter-category">
              <label>
                <input className="checkbox-input" type="checkbox" />
                MRF
              </label>

              <label>
                <input className="checkbox-input" type="checkbox" />
                Kookaburra
              </label>

              <label>
                <input className="checkbox-input" type="checkbox" />
                New Balance
              </label>

              <label>
                <input className="checkbox-input" type="checkbox" />
                Spartan
              </label>

              <label>
                <input className="checkbox-input" type="checkbox" />
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
                  className="radio-input"
                  type="radio"
                  name="rating"
                  
                />
                4 Stars and above
              </label>

              <label>
                <input className="radio-input" type="radio" name="rating" />3
                Stars and above
              </label>

              <label>
                <input className="radio-input" type="radio" name="rating" />2
                Stars and above
              </label>

              <label>
                <input className="radio-input" type="radio" name="rating" />1
                Stars and above
              </label>
            </div>
          </div>

          <div className="filter-wrapper">
            <div className="filter-title">Sort By</div>
            <div className="filter-value">
              <label>
                <input
                  className="radio-input"
                  type="radio"
                  name="price-level"
                  checked
                />
                Price: High to Low
              </label>

              <label>
                <input
                  className="radio-input"
                  type="radio"
                  name="price-level"
                />
                Price: Low to High
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


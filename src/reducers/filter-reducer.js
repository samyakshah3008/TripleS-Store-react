const reducerCallBack = (state, action) => {
    switch (action.type) {
      case "RANGE_FILTER":
          
        return {...state, range: action.payload}
        
        case "ONLY_IN_STOCK":
        return { ...state, onlyInStock: action.payload };

      case "FAST_DELIVERY":
        return { ...state, fastDelivery: action.payload };

      case "SORT_BY":
        return { ...state, sortBy: action.payload };

      case "RATINGS":
        return { ...state, ratings: action.payload };
      
    
      default:
        return state
    }
  }

export {reducerCallBack}
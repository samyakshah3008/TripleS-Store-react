const reducerCallBack = (state, action) => {
  switch (action.type) {
    case "RANGE_FILTER":
      return { ...state, range: action.payload };

    case "ONLY_IN_STOCK":
      return { ...state, onlyInStock: action.payload };

    case "FAST_DELIVERY":
      return { ...state, fastDelivery: action.payload };

    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    case "RATINGS":
      return { ...state, ratings: action.payload };

    case "MRF":
      return {
        ...state,
        categories: { ...state.categories, mrf: !state.categories.mrf },
      };
    case "NIKE":
      return {
        ...state,
        categories: { ...state.categories, nike: !state.categories.nike },
      };
    case "SPARTAN":
      return {
        ...state,
        categories: { ...state.categories, spartan: !state.categories.spartan },
      };
    case "EXCLUSIVE":
      return {
        ...state,
        categories: {
          ...state.categories,
          exclusive: !state.categories.exclusive,
        },
      };
    case "KOOKABURA":
      return {
        ...state,
        categories: {
          ...state.categories,
          kookabura: !state.categories.kookabura,
        },
      };
    case "NEWBALANCE":
      return {
        ...state,
        categories: {
          ...state.categories,
          newbalance: !state.categories.newbalance,
        },
      };
    case "CLEAR":
      return {
        ...state,
        range: 5000,
        onlyInStock: false,
        fastDelivery: false,
        sortBy: null,
        ratings: null,
        categories: {
          mrf: false,
          kookabura: false,
          spartan: false,
          nike: false,
          exclusive: false,
          newbalance: false,
        },
      };
    default:
      return state;
  }
};

export { reducerCallBack };

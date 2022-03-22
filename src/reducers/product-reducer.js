export const productReducer = (state,action) => {
    switch (action.type) {
        case "INITIAL_PRODUCT":
        return {...state, products: [...action.payload]}    
        default:
          return state
            
    } 
}
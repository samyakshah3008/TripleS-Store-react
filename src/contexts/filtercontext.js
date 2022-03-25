import { useReducer } from "react";
import { createContext, useContext } from "react";
import { reducerCallBack } from "../reducers/filter-reducer";

const initialState = {
    range: 5000,
    onlyInStock: false,
    fastDelivery: false,
    sortBy: null,
    ratings: null
}






const createFilterContext = createContext()

const FilterProvider = ({children}) => {
const [state, dispatch] = useReducer(reducerCallBack, initialState) 

    return (
        <createFilterContext.Provider value = {{state, dispatch}} >
            {children}
        </createFilterContext.Provider>
    )
}

const useFilter = () => useContext(createFilterContext)

export {FilterProvider, useFilter}
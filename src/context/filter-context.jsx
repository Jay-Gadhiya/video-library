import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
const initialVal = { category : "All" };


const FilterProvider = ({ children }) => {

    const [filterState, filterDispatch] = useReducer(filterReducer, initialVal);

    return (
        <FilterContext.Provider value={{ filterState, filterDispatch }}>
            { children }
        </FilterContext.Provider>
    )
}

export { FilterProvider, useFilter };
import { createContext, useContext, useReducer, useState } from "react";
import { filterReducer } from "../Reducer/filterReducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
const initialVal = { category : "All" };


const FilterProvider = ({ children }) => {

    const [filterState, filterDispatch] = useReducer(filterReducer, initialVal);
    const [searchedVideo, setSearchedVideo] = useState("");

    return (
        <FilterContext.Provider value={{ filterState, filterDispatch, searchedVideo, setSearchedVideo }}>
            { children }
        </FilterContext.Provider>
    )
}

export { FilterProvider, useFilter };
import axios from "axios";
import {
    createContext,
    useContext,
    useReducer,
    useEffect,
  } from "react";
import { dataStoreReducer } from "../Reducer/dataStoreReducer";


const DataStoreContext = createContext();

const initialVal = {
    videos : [],
    categories : [],
    likedVideos : [],
    watchLater : []
}


const DataStoreProvider = ({children}) => {

    const [dataStoreState, dataStoreDispatch] = useReducer(dataStoreReducer, initialVal);

    useEffect(
        () => {
          (async () => {
            try {
              const res = await axios.get("/api/videos");
              if(res.status === 200) {
                dataStoreDispatch({type : "INITIAL_DATA", payload : res.data.videos});
              }
            } catch (error) {
               alert(error);
            }

            try {
                const res = await axios.get("/api/categories");
                if(res.status === 200) {
                  dataStoreDispatch({type : "CATEGORIES_DATA", payload : res.data.categories});
                }
              } catch (error) {
                 alert(error);
              }

          })();
        }, []);


    return (
        <DataStoreContext.Provider value={{ dataStoreState, dataStoreDispatch }}>
            {children}
        </DataStoreContext.Provider>
    )
}

const useData = () => useContext(DataStoreContext);

export { DataStoreProvider, useData };
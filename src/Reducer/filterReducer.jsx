
export const filterReducer = (state, action) => {

    switch (action.type) {
        case "FILTER_BY_CATEGORY":
            return { category : action.payload };
    
        default:
            state;
    }
}
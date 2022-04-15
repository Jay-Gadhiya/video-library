
export const dataStoreReducer = (state, action) => {

    switch (action.type) {
        case "INITIAL_DATA":
            return {...state, videos : action.payload};

        case "CATEGORIES_DATA":
            return {...state, categories : action.payload};

        default:
            state;
    }
}
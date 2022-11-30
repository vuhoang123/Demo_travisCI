const homeReducer = (state = {
        genreMap: {},
        featuredList: [],
        shownList: [],
        totalPages: 1,
        totalResults: 0,
        searchIsEmpty: true,
        sortByRating: true,
        searchVal: '',
        resultPage: 1,
    }, action = {}) => {
        switch (action.type) {
            case "SET_GENRE_MAP_SUCCESS":
                state = {
                    ...state,
                    genreMap: action.payload
                };
                break;
            case "SET_GENRE_MAP_FAIL":
                state = {
                    ...state
                };
                break;
            case "SET_FEATURED_LIST_SUCCESS":
                state = {
                    ...state,
                    featuredList: action.payload
                };
                break; 
            case "SET_FEATURED_LIST_FAIL":
                state = {
                    ...state
                };
                break;
            case "SET_SHOWN_LIST_SUCCESS":
                state = {
                    ...state,
                    shownList: action.payload
                };
                break;
            case "SET_TOTAL_PAGES_SUCCESS":
                state = {
                    ...state,
                    totalPages: action.payload
                };
                break;
            case "SET_TOTAL_RESULTS_SUCCESS":
                state = {
                    ...state,
                    totalResults: action.payload
                };
                break;
            case "SEARCH_FILMS_FAIL":
                state = {
                    ...state
                };
                break;
            case "SEARCH_ISEMPTY":
                state = {
                    ...state,
                    searchIsEmpty: action.payload
                };
                break;
            case "SORTBY_RATING":
                state = {
                    ...state,
                    sortByRating: action.payload
                };
                break;
            case "SET_SEARCH_VAL":
                state = {
                    ...state,
                    searchVal: action.payload
                };
                break;
            case "SET_RESULT_PAGE":
                state = {
                    ...state,
                    resultPage: action.payload
                };
                break;
            default:
                return state;
        };
    return state;
};

export default homeReducer;
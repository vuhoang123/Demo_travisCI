const detailsReducer = (state = {
        similarMoviesList: [],
        selectedMovieInfo: {},
        selectedMovieCast: [],
        director: '',
    }, action = {}) => {
        switch (action.type) {
            case "SET_SIMILAR_MOVIES_LIST_SUCCESS": 
                state = {
                    ...state,
                    similarMoviesList: action.payload
                };
                break;
            case "SET_SIMILAR_MOVIES_LIST_FAIL": 
                state = {
                    ...state
                };
                break;
            case "SET_SELECTED_MOVIE_INFO_SUCCESS": 
                state = {
                    ...state,
                    selectedMovieInfo: action.payload
                };
                break;
            case "SET_SELECTED_MOVIE_INFO_FAIL": 
                state = {
                    ...state
                };
                break;
            case "SET_SELECTED_MOVIE_CAST_SUCCESS": 
                state = {
                    ...state,
                    selectedMovieCast: action.payload
                };
                break;
            case "SET_DIRECTOR_SUCCESS":
                state = {
                    ...state,
                    director: action.payload
                };
                break;
            case "SET_MOVIE_CREDITS_FAIL":
                state = {
                    ...state
                };
                break;
            default:
                return state;
        };
    return state;
};

export default detailsReducer;
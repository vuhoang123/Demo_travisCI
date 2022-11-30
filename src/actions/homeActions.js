import * as homeActionTypes from './homeActionTypes';

export const setGenreMapSuccess = (genreMap) => {
    return {
        type: homeActionTypes.SET_GENRE_MAP_SUCCESS,
        payload: genreMap
    };
}

export const setGenreMapFail = (error) => {
    return {
        type: homeActionTypes.SET_GENRE_MAP_FAIL,
        payload: error
    };
}

export const setFeaturedListSuccess = (featuredList) => {
    return {
        type: homeActionTypes.SET_FEATURED_LIST_SUCCESS,
        payload: featuredList
    };
}

export const setFeaturedListFail = (error) => {
    return {
        type: homeActionTypes.SET_FEATURED_LIST_FAIL,
        payload: error
    };
}

export const setShownListSuccess = (shownList) => {
    return {
        type: homeActionTypes.SET_SHOWN_LIST_SUCCESS,
        payload: shownList
    };
}

export const setTotalPagesSuccess = (totalPages) => {
    return {
        type: homeActionTypes.SET_TOTAL_PAGES_SUCCESS,
        payload: totalPages
    };
}

export const setTotalResultsSuccess = (totalResults) => {
    return {
        type: homeActionTypes.SET_TOTAL_RESULTS_SUCCESS,
        payload: totalResults
    };
}

export const searchFilmsFail = (error) => {
    return {
        type: homeActionTypes.SEARCH_FILMS_FAIL,
        payload: error
    };
}

export const flipSearchIsEmpty = (searchIsEmpty) => {
    return {
        type: homeActionTypes.SEARCH_ISEMPTY,
        payload: searchIsEmpty
    };
}

export const flipSortByRating = (sortByRating) => {
    return {
        type: homeActionTypes.SORTBY_RATING,
        payload: sortByRating
    };
}

export const setSearchValue = (searchVal) => {
    return {
        type: homeActionTypes.SET_SEARCH_VAL,
        payload: searchVal
    };
}

export const setResultPage = (resultPage) => {
    return {
        type: homeActionTypes.SET_RESULT_PAGE,
        payload: resultPage
    };
}
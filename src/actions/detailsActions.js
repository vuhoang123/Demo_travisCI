import * as detailsActionTypes from './detailsActionTypes';

export function setSimilarMoviesListSuccess(similarMoviesList) {
    return {
        type: detailsActionTypes.SET_SIMILAR_MOVIES_LIST_SUCCESS,
        payload: similarMoviesList
    };
}

export function setSimilarMoviesListFail(error) {
    return {
        type: detailsActionTypes.SET_SIMILAR_MOVIES_LIST_FAIL,
        payload: error
    };
}

export function setSelectedMovieInfoSuccess(selectedMovieInfo) {
    return {
        type: detailsActionTypes.SET_SELECTED_MOVIE_INFO_SUCCESS,
        payload: selectedMovieInfo
    };
}

export function setSelectedMovieInfoFail(error) {
    return {
        type: detailsActionTypes.SET_SELECTED_MOVIE_INFO_FAIL,
        payload: error
    };
}

export function setSelectedMovieCastSuccess(selectedMovieCast) {
    return {
        type: detailsActionTypes.SET_SELECTED_MOVIE_CAST_SUCCESS,
        payload: selectedMovieCast
    };
}

export function setDirectorSuccess(director) {
    return {
        type: detailsActionTypes.SET_DIRECTOR_SUCCESS,
        payload: director
    };
}

export function setMovieCreditsFail(error) {
    return {
        type: detailsActionTypes.SET_MOVIE_CREDITS_FAIL,
        payload: error
    };
}
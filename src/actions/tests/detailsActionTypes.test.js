import * as detailsActionTypes from '../detailsActionTypes'

describe('Testing detailsActionTypes', () => {

    it('Should return string "SET_SIMILAR_MOVIES_LIST_SUCCESS"', () => {
        expect(detailsActionTypes.SET_SIMILAR_MOVIES_LIST_SUCCESS).toBe("SET_SIMILAR_MOVIES_LIST_SUCCESS")
    });

    it('Should return string "SET_SIMILAR_MOVIES_LIST_FAIL"', () => {
        expect(detailsActionTypes.SET_SIMILAR_MOVIES_LIST_FAIL).toBe("SET_SIMILAR_MOVIES_LIST_FAIL")
    });

    it('Should return string "SET_SELECTED_MOVIE_INFO_SUCCESS"', () => {
        expect(detailsActionTypes.SET_SELECTED_MOVIE_INFO_SUCCESS).toBe("SET_SELECTED_MOVIE_INFO_SUCCESS")
    });

    it('Should return string "SET_SELECTED_MOVIE_INFO_FAIL"', () => {
        expect(detailsActionTypes.SET_SELECTED_MOVIE_INFO_FAIL).toBe("SET_SELECTED_MOVIE_INFO_FAIL")
    });

    it('Should return string "SET_SELECTED_MOVIE_CAST_SUCCESS"', () => {
        expect(detailsActionTypes.SET_SELECTED_MOVIE_CAST_SUCCESS).toBe("SET_SELECTED_MOVIE_CAST_SUCCESS")
    });

    it('Should return string "SET_DIRECTOR_SUCCESS"', () => {
        expect(detailsActionTypes.SET_DIRECTOR_SUCCESS).toBe("SET_DIRECTOR_SUCCESS")
    });

    it('Should return string "SET_MOVIE_CREDITS_FAIL"', () => {
        expect(detailsActionTypes.SET_MOVIE_CREDITS_FAIL).toBe("SET_MOVIE_CREDITS_FAIL")
    });

});
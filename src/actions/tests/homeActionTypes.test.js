import * as homeActionTypes from '../homeActionTypes'

describe('Testing homeActionTypes', () => {

    it('Should return string "SET_GENRE_MAP_SUCCESS"', () => {
        expect(homeActionTypes.SET_GENRE_MAP_SUCCESS).toBe("SET_GENRE_MAP_SUCCESS")
    });

    it('Should return string "SET_GENRE_MAP_FAIL"', () => {
        expect(homeActionTypes.SET_GENRE_MAP_FAIL).toBe("SET_GENRE_MAP_FAIL")
    });

    it('Should return string "SET_FEATURED_LIST_SUCCESS"', () => {
        expect(homeActionTypes.SET_FEATURED_LIST_SUCCESS).toBe("SET_FEATURED_LIST_SUCCESS")
    });

    it('Should return string "SET_FEATURED_LIST_FAIL"', () => {
        expect(homeActionTypes.SET_FEATURED_LIST_FAIL).toBe("SET_FEATURED_LIST_FAIL")
    });

    it('Should return string "SET_SHOWN_LIST_SUCCESS"', () => {
        expect(homeActionTypes.SET_SHOWN_LIST_SUCCESS).toBe("SET_SHOWN_LIST_SUCCESS")
    });

    it('Should return string "SET_TOTAL_PAGES_SUCCESS"', () => {
        expect(homeActionTypes.SET_TOTAL_PAGES_SUCCESS).toBe("SET_TOTAL_PAGES_SUCCESS")
    });

    it('Should return string "SET_TOTAL_RESULTS_SUCCESS"', () => {
        expect(homeActionTypes.SET_TOTAL_RESULTS_SUCCESS).toBe("SET_TOTAL_RESULTS_SUCCESS")
    });

    it('Should return string "SEARCH_FILMS_FAIL"', () => {
        expect(homeActionTypes.SEARCH_FILMS_FAIL).toBe("SEARCH_FILMS_FAIL")
    });

    it('Should return string "SEARCH_ISEMPTY"', () => {
        expect(homeActionTypes.SEARCH_ISEMPTY).toBe("SEARCH_ISEMPTY")
    });

    it('Should return string "SORTBY_RATING"', () => {
        expect(homeActionTypes.SORTBY_RATING).toBe("SORTBY_RATING")
    });

    it('Should return string "SET_SEARCH_VAL"', () => {
        expect(homeActionTypes.SET_SEARCH_VAL).toBe("SET_SEARCH_VAL")
    });

    it('Should return string "SET_RESULT_PAGE"', () => {
        expect(homeActionTypes.SET_RESULT_PAGE).toBe("SET_RESULT_PAGE")
    });

});
import * as homeActions from '../homeActions'
import * as consts from './actionConsts.js'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({})

describe('Testing homeActions', () => {

    describe('Testing Success Actions', () => {

        it('genreMap is set on action setGenreMapSuccess', () => {
            store.dispatch(homeActions.setGenreMapSuccess(consts.setGenreMapConst));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('featuredList is set on action setFeaturedListSuccess', () => {
            store.dispatch(homeActions.setFeaturedListSuccess(consts.setFeaturedListConst));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('shownList is set on action setShownListSuccess', () => {
            store.dispatch(homeActions.setShownListSuccess(consts.setShownListConst));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('totalPages is set on action setTotalPagesSuccess', () => {
            store.dispatch(homeActions.setTotalPagesSuccess(54));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('totalResults is set on action setTotalResultsSuccess', () => {
            store.dispatch(homeActions.setTotalResultsSuccess(634));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('searchIsEmpty is set on action flipSearchIsEmpty', () => {
            store.dispatch(homeActions.flipSearchIsEmpty(false));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('sortByRating is set on action flipSortByRating', () => {
            store.dispatch(homeActions.flipSortByRating(false));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('searchVal is set on action setSearchValue', () => {
            store.dispatch(homeActions.setSearchValue("candy"));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('resultPage is set on action setResultPage', () => {
            store.dispatch(homeActions.setResultPage(5));
            expect(store.getActions()).toMatchSnapshot();
        });

    });

    describe('Testing Fail Actions', () => {

        it('genreMap is not set on setGenreMapFail', () => {
            store.dispatch(homeActions.setGenreMapFail("error trying to set genreMap"));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('featuredList is not set on setFeaturedListFail', () => {
            store.dispatch(homeActions.setFeaturedListFail("error trying to set featuredList"));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('shownList is not set on searchFilmsFail', () => {
            store.dispatch(homeActions.searchFilmsFail("error trying to set shownList"));
            expect(store.getActions()).toMatchSnapshot();
        });

    });

});
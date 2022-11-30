import * as detailsActions from '../detailsActions'
import * as consts from './actionConsts.js'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({})

describe('Testing detailsActions', () => {

    describe('Testing Success Actions', () => {

        it('similarMoviesList is set on action setSimilarMoviesListSuccess', () => {
            store.dispatch(detailsActions.setSimilarMoviesListSuccess(consts.setSimilarMoviesListConst));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('selectedMovieInfo is set on action setSelectedMovieInfoSuccess', () => {
            store.dispatch(detailsActions.setSelectedMovieInfoSuccess(consts.setSelectedMovieInfoConst));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('selectedMovieCast is set on action setSelectedMovieCastSuccess', () => {
            store.dispatch(detailsActions.setSelectedMovieCastSuccess(consts.setSelectedMovieCastConst));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('director is set on action setDirectorSuccess', () => {
            store.dispatch(detailsActions.setDirectorSuccess("Hayao Miyazaki"));
            expect(store.getActions()).toMatchSnapshot();
        });

    });

    describe('Testing Fail Actions', () => {

        it('similarMoviesList is not set on setSimilarMoviesListFail', () => {
            store.dispatch(detailsActions.setSimilarMoviesListFail("error trying to set similarMoviesList"));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('selectedMovieInfo is not set on setSelectedMovieInfoFail', () => {
            store.dispatch(detailsActions.setSelectedMovieInfoFail("error trying to set selectedMovieInfo"));
            expect(store.getActions()).toMatchSnapshot();
        });

        it('selectedMovieCast and director are not set on setMovieCreditsFail', () => {
            store.dispatch(detailsActions.setMovieCreditsFail("error trying to set selectedMovieCast"));
            expect(store.getActions()).toMatchSnapshot();
        });

    });

});
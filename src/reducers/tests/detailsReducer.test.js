import detailsReducer from '../detailsReducer';
import * as consts from  './reducerConsts'

describe('Testing detailsReducer', () => {

    describe('Testing Default State', () => {

        it('Should return default without action', () => {
            expect(JSON.stringify(detailsReducer())).toBe("{\"similarMoviesList\":[],\"selectedMovieInfo\":{},\"selectedMovieCast\":[],\"director\":\"\"}");
        });

        it('Should return default with non-declared action', () => {
            expect(JSON.stringify(detailsReducer(consts.defaultDetailsState, {type: "undeclaredType", payload: "undeclaredPayload"}))).toBe("{\"similarMoviesList\":[],\"selectedMovieInfo\":{},\"selectedMovieCast\":[],\"director\":\"\"}");
        });

    });

    describe('Testing Correct State', () => {

        it('Should set action.payload === similarMoviesList with action.type === "SET_SIMILAR_MOVIES_LIST_SUCCESS"', () => {
            expect(JSON.stringify(detailsReducer(consts.defaultDetailsState, {
                type: "SET_SIMILAR_MOVIES_LIST_SUCCESS",
                payload: consts.setSimilarMoviesListConst
            }))).toBe("{\"similarMoviesList\":[{\"adult\":false,\"backdrop_path\":\"/jq4dyVYsCGQRTXKDLoqZwg4tbIr.jpg\",\"genre_ids\":[18,10402],\"id\":65,\"original_language\":\"en\",\"original_title\":\"8 Mile\",\"overview\":\"The setting is Detroit in 1995. The city is divided by 8 Mile, a road that splits the town in half along racial lines. A young white rapper, Jimmy 'B-Rabbit' Smith Jr. summons strength within himself to cross over these arbitrary boundaries to fulfill his dream of success in hip hop. With his pal Future and the three one third in place, all he has to do is not choke.\",\"popularity\":13.144,\"poster_path\":\"/dXzTrKwpbLpCqn8O70FUUhNbYQT.jpg\",\"release_date\":\"2002-11-08\",\"title\":\"8 Mile\",\"video\":false,\"vote_average\":7,\"vote_count\":3641},{\"adult\":false,\"backdrop_path\":\"/fdDTA06o5e7MRXnTGAf4EygL2MJ.jpg\",\"genre_ids\":[18,10402],\"id\":277216,\"original_language\":\"en\",\"original_title\":\"Straight Outta Compton\",\"overview\":\"In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music.  Taking us back to where it all began, Straight Outta Compton tells the true story of how these cultural rebels—armed only with their lyrics, swagger, bravado and raw talent—stood up to the authorities that meant to keep them down and formed the world’s most dangerous group, N.W.A.  And as they spoke the truth that no one had before and exposed life in the hood, their voice ignited a social revolution that is still reverberating today.\",\"popularity\":13.44,\"poster_path\":\"/X7S1RtotXOZNV7OlgCfh5VKZSB.jpg\",\"release_date\":\"2015-08-13\",\"title\":\"Straight Outta Compton\",\"video\":false,\"vote_average\":7.7,\"vote_count\":2129}],\"selectedMovieInfo\":{},\"selectedMovieCast\":[],\"director\":\"\"}");
        });
        it('Should set action.payload === selectedMovieInfo with action.type === "SET_SELECTED_MOVIE_INFO_SUCCESS"', () => {
            expect(JSON.stringify(detailsReducer(consts.defaultDetailsState, {
                type: "SET_SELECTED_MOVIE_INFO_SUCCESS",
                payload: consts.setSelectedMovieInfoConst
            }))).toBe("{\"similarMoviesList\":[],\"selectedMovieInfo\":{\"adult\":false,\"backdrop_path\":\"/fy1C5tM9L39i7JF0iw6DIycOO1j.jpg\",\"belongs_to_collection\":null,\"budget\":10000000,\"genres\":[{\"id\":18,\"name\":\"Drama\"},{\"id\":28,\"name\":\"Action\"},{\"id\":53,\"name\":\"Thriller\"}],\"homepage\":null,\"id\":11713,\"imdb_id\":\"tt0068767\",\"original_language\":\"zh\",\"original_title\":\"精武門\",\"overview\":\"Chen Zhen returns to the international compound of China only to learn of his beloved teacher's death. This is compounded by the continual racist harassment by the Japanese population in the area. Unlike his friends, he confronts it head on with his mastery of martial arts while investigating his teacher's murder.\",\"popularity\":17.598,\"poster_path\":\"/ld1kAfLJTgpZVm3jwT58bTxmXl7.jpg\",\"production_companies\":[{\"id\":2521,\"logo_path\":\"/e9lXexogBN1nOXA8axzASggea8B.png\",\"name\":\"Orange Sky Golden Harvest\",\"origin_country\":\"HK\"}],\"production_countries\":[{\"iso_3166_1\":\"HK\",\"name\":\"Hong Kong\"}],\"release_date\":\"1972-03-22\",\"revenue\":0,\"runtime\":108,\"spoken_languages\":[{\"iso_639_1\":\"zh\",\"name\":\"普通话\"}],\"status\":\"Released\",\"tagline\":\"Bruce Lee has done the impossible... ...HE'S SURPASSED HIMSELF!!!\",\"title\":\"Fist of Fury\",\"video\":false,\"vote_average\":7.4,\"vote_count\":375},\"selectedMovieCast\":[],\"director\":\"\"}");
        });
        it('Should set action.payload === selectedMovieInfo with action.type === "SET_SELECTED_MOVIE_CAST_SUCCESS"', () => {
            expect(JSON.stringify(detailsReducer(consts.defaultDetailsState, {
                type: "SET_SELECTED_MOVIE_CAST_SUCCESS",
                payload: consts.setSelectedMovieCastConst
            }))).toBe("{\"similarMoviesList\":[],\"selectedMovieInfo\":{},\"selectedMovieCast\":[{\"cast_id\":4,\"character\":\"San (voice)\",\"credit_id\":\"52fe421bc3a36847f80049a1\",\"gender\":1,\"id\":20330,\"name\":\"Yuriko Ishida\",\"order\":1,\"profile_path\":\"/cADoBCi603Chz2IaxcwWT2mNwCf.jpg\"},{\"cast_id\":5,\"character\":\"Eboshi-gozen (voice)\",\"credit_id\":\"52fe421bc3a36847f80049a5\",\"gender\":1,\"id\":20331,\"name\":\"Yūko Tanaka\",\"order\":2,\"profile_path\":\"/k32uD3NkzeJHPaALp0amspIqVzc.jpg\"}],\"director\":\"\"}");
        });
        it('Should set action.payload === selectedMovieInfo with action.type === "SET_DIRECTOR_SUCCESS"', () => {
            expect(JSON.stringify(detailsReducer(consts.defaultDetailsState, {
                type: "SET_DIRECTOR_SUCCESS",
                payload: "Hayao Miyazaki"
            }))).toBe("{\"similarMoviesList\":[],\"selectedMovieInfo\":{},\"selectedMovieCast\":[],\"director\":\"Hayao Miyazaki\"}");
        });
    });

    describe('Testing Fail State', () => {
        it('Should return default state with action.type === "SET_SIMILAR_MOVIES_LIST_FAIL"', () => {
            expect(JSON.stringify(detailsReducer(consts.defaultDetailsState, {
                type: "SET_SIMILAR_MOVIES_LIST_FAIL",
                payload: "error occured on type SET_SIMILAR_MOVIES_LIST_FAIL"
            }))).toBe("{\"similarMoviesList\":[],\"selectedMovieInfo\":{},\"selectedMovieCast\":[],\"director\":\"\"}");
        });
        it('Should return default state with action.type === "SET_SELECTED_MOVIE_INFO_FAIL"', () => {
            expect(JSON.stringify(detailsReducer(consts.defaultDetailsState, {
                type: "SET_SELECTED_MOVIE_INFO_FAIL",
                payload: "error occured on type SET_SELECTED_MOVIE_INFO_FAIL"
            }))).toBe("{\"similarMoviesList\":[],\"selectedMovieInfo\":{},\"selectedMovieCast\":[],\"director\":\"\"}");
        });
        it('Should return default state with action.type === "SET_MOVIE_CREDITS_FAIL"', () => {
            expect(JSON.stringify(detailsReducer(consts.defaultDetailsState, {
                type: "SET_MOVIE_CREDITS_FAIL",
                payload: "error occured on type SET_MOVIE_CREDITS_FAIL"
            }))).toBe("{\"similarMoviesList\":[],\"selectedMovieInfo\":{},\"selectedMovieCast\":[],\"director\":\"\"}");
        });
    });
        
});
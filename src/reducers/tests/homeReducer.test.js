import homeReducer from '../homeReducer';
import * as consts from './reducerConsts';

describe('Testing homeReducer', () => {

    describe('Testing Default State', () => {

        it('Should return default without action', () => {
            expect(JSON.stringify(homeReducer())).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should return default with non-declared action', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {type: "undeclaredType", payload: "undeclaredPayload"}))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

    });

    describe('Testing Correct State', () => {

        it('Should set action.payload === genreMap with action.type === "SET_GENRE_MAP_SUCCESS"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SET_GENRE_MAP_SUCCESS",
                payload: consts.setGenreMapConst
            }))).toBe("{\"genreMap\":{\"12\":\"Adventure\",\"14\":\"Fantasy\",\"16\":\"Animation\",\"18\":\"Drama\",\"27\":\"Horror\",\"28\":\"Action\",\"35\":\"Comedy\",\"36\":\"History\",\"37\":\"Western\",\"53\":\"Thriller\",\"80\":\"Crime\",\"99\":\"Documentary\",\"878\":\"Science Fiction\",\"9648\":\"Mystery\",\"10402\":\"Music\",\"10749\":\"Romance\",\"10751\":\"Family\",\"10752\":\"War\",\"10770\":\"TV Movie\"},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should set action.payload === featuredList with action.type === "SET_FEATURED_LIST_SUCCESS"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SET_FEATURED_LIST_SUCCESS",
                payload: consts.setFeaturedListConst
            }))).toBe("{\"genreMap\":{},\"featuredList\":[{\"adult\":false,\"backdrop_path\":\"/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg\",\"genre_ids\":[35,80,18],\"id\":429203,\"original_language\":\"en\",\"original_title\":\"The Old Man & the Gun\",\"overview\":\"The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.\",\"popularity\":283.548,\"poster_path\":\"/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg\",\"release_date\":\"2018-09-28\",\"title\":\"The Old Man & the Gun\",\"video\":false,\"vote_average\":6.3,\"vote_count\":577},{\"adult\":false,\"backdrop_path\":\"/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg\",\"genre_ids\":[28,12,878],\"id\":429617,\"original_language\":\"en\",\"original_title\":\"Spider-Man: Far from Home\",\"overview\":\"Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.\",\"popularity\":234.305,\"poster_path\":\"/lcq8dVxeeOqHvvgcte707K0KVx5.jpg\",\"release_date\":\"2019-07-02\",\"title\":\"Spider-Man: Far from Home\",\"video\":false,\"vote_average\":7.7,\"vote_count\":4044}],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should set action.payload === shownList with action.type === "SET_SHOWN_LIST_SUCCESS"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SET_SHOWN_LIST_SUCCESS",
                payload: consts.setShownListConst
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[{\"adult\":false,\"backdrop_path\":\"/qJXqEzjJOa93q50mrSSEr1ELsD6.jpg\",\"genre_ids\":[10749,10751],\"id\":540158,\"original_language\":\"en\",\"original_title\":\"High Strung Free Dance\",\"overview\":\"Zander Raines, a dazzling and tempestuous young choreographer, gives the break of a lifetime to two hopeful artists when he casts a stunning contemporary dancer, Barlow, and innovative pianist, Charlie, in New York’s most-anticipated new Broadway show: Free Dance. But the move throws off the show’s delicate creative balance when Charlie falls hard for Barlow while Zander embraces her as his muse.\",\"popularity\":9.434,\"poster_path\":\"/zMwr9vNMHNCNatIPm7Oter0NVw.jpg\",\"release_date\":\"2019-10-11\",\"title\":\"High Strung Free Dance\",\"video\":false,\"vote_average\":7.3,\"vote_count\":53},{\"adult\":false,\"backdrop_path\":\"/a47QIHxJnLLBDnTOwopZ8YBhxfl.jpg\",\"genre_ids\":[35,27],\"id\":13094,\"original_language\":\"en\",\"original_title\":\"Dance of the Dead\",\"overview\":\"With Prom only hours away, the usual suspects of Cosa High (Cheerleaders, geeks, bad boys and the happy-go-lucky student council alike) are preoccupied with the annual rituals of teendom. On the night of the big dance when the dead unexpectedly rise to eat the living, polar opposite groups will be forced to unite in their final chance to save the town from the zombies.\",\"popularity\":4.996,\"poster_path\":\"/A4PmOlgQupYv9GNpsaRBHBBTBFf.jpg\",\"release_date\":\"2008-10-14\",\"title\":\"Dance of the Dead\",\"video\":false,\"vote_average\":6,\"vote_count\":99}],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should set action.payload === totalPages with action.type === "SET_TOTAL_PAGES_SUCCESS"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SET_TOTAL_PAGES_SUCCESS",
                payload: 42
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":42,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should set action.payload === totalResults with action.type === "SET_TOTAL_RESULTS_SUCCESS"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SET_TOTAL_RESULTS_SUCCESS",
                payload: 423
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":423,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should set action.payload === searchIsEmpty with action.type === "SEARCH_ISEMPTY"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SEARCH_ISEMPTY",
                payload: false
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":false,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should set action.payload === sortByRating with action.type === "SORTBY_RATING"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SORTBY_RATING",
                payload: false
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":false,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should set action.payload === searchVal with action.type === "SET_SEARCH_VAL"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SET_SEARCH_VAL",
                payload: "fireball"
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"fireball\",\"resultPage\":1}");
        });

        it('Should set action.payload === resultPage with action.type === "SET_RESULT_PAGE"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SET_RESULT_PAGE",
                payload: 4
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":4}");
        });

    });

    describe('Testing Failure State', () => {

        it('Should return default state with action.type === "SET_GENRE_MAP_FAIL"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SET_GENRE_MAP_FAIL",
                payload: "error occured on type SET_GENRE_MAP_FAIL"
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should return default state with action.type === "SET_FEATURED_LIST_FAIL"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SET_FEATURED_LIST_FAIL",
                payload: "error occured on type SET_FEATURED_LIST_FAIL"
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });

        it('Should return default state with action.type === "SEARCH_FILMS_FAIL"', () => {
            expect(JSON.stringify(homeReducer(consts.defaultHomeState, {
                type: "SEARCH_FILMS_FAIL",
                payload: "error occured on type SEARCH_FILMS_FAIL"
            }))).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });
        
    });

});
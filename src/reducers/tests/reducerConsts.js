export const defaultHomeState = {
    genreMap: {},
    featuredList: [],
    shownList: [],
    totalPages: 1,
    totalResults: 0,
    searchIsEmpty: true,
    sortByRating: true,
    searchVal: '',
    resultPage: 1,
};

export const defaultDetailsState = {
    similarMoviesList: [],
    selectedMovieInfo: {},
    selectedMovieCast: [],
    director: '',
};

export const setGenreMapConst = {
    "12": "Adventure",
    "14": "Fantasy",
    "16": "Animation",
    "18": "Drama",
    "27": "Horror",
    "28": "Action",
    "35": "Comedy",
    "36": "History",
    "37": "Western",
    "53": "Thriller",
    "80": "Crime",
    "99": "Documentary",
    "878": "Science Fiction",
    "9648": "Mystery",
    "10402": "Music",
    "10749": "Romance",
    "10751": "Family",
    "10752": "War",
    "10770": "TV Movie"
}

export const setFeaturedListConst = [
    {
        "adult": false,
        "backdrop_path": "/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
        "genre_ids": [35, 80, 18],
        "id": 429203,
        "original_language": "en",
        "original_title": "The Old Man & the Gun",
        "overview": "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
        "popularity": 283.548,
        "poster_path": "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
        "release_date": "2018-09-28",
        "title": "The Old Man & the Gun",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 577
    },
    {
        "adult": false,
        "backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        "genre_ids": [28, 12, 878],
        "id": 429617,
        "original_language": "en",
        "original_title": "Spider-Man: Far from Home",
        "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
        "popularity": 234.305,
        "poster_path": "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
        "release_date": "2019-07-02",
        "title": "Spider-Man: Far from Home",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 4044
    }
];

export const setShownListConst = [
    {
        "adult": false,
        "backdrop_path": "/qJXqEzjJOa93q50mrSSEr1ELsD6.jpg",
        "genre_ids": [10749, 10751],
        "id": 540158,
        "original_language": "en",
        "original_title": "High Strung Free Dance",
        "overview": "Zander Raines, a dazzling and tempestuous young choreographer, gives the break of a lifetime to two hopeful artists when he casts a stunning contemporary dancer, Barlow, and innovative pianist, Charlie, in New York’s most-anticipated new Broadway show: Free Dance. But the move throws off the show’s delicate creative balance when Charlie falls hard for Barlow while Zander embraces her as his muse.",
        "popularity": 9.434,
        "poster_path": "/zMwr9vNMHNCNatIPm7Oter0NVw.jpg",
        "release_date": "2019-10-11",
        "title": "High Strung Free Dance",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 53,
    },
    {
        "adult": false,
        "backdrop_path": "/a47QIHxJnLLBDnTOwopZ8YBhxfl.jpg",
        "genre_ids": [35, 27],
        "id": 13094,
        "original_language": "en",
        "original_title": "Dance of the Dead",
        "overview": "With Prom only hours away, the usual suspects of Cosa High (Cheerleaders, geeks, bad boys and the happy-go-lucky student council alike) are preoccupied with the annual rituals of teendom. On the night of the big dance when the dead unexpectedly rise to eat the living, polar opposite groups will be forced to unite in their final chance to save the town from the zombies.",
        "popularity": 4.996,
        "poster_path": "/A4PmOlgQupYv9GNpsaRBHBBTBFf.jpg",
        "release_date": "2008-10-14",
        "title": "Dance of the Dead",
        "video": false,
        "vote_average": 6,
        "vote_count": 99,
    }
]

export const setSimilarMoviesListConst = [
    {
        "adult": false,
        "backdrop_path": "/jq4dyVYsCGQRTXKDLoqZwg4tbIr.jpg",
        "genre_ids": [18, 10402],
        "id": 65,
        "original_language": "en",
        "original_title": "8 Mile",
        "overview": "The setting is Detroit in 1995. The city is divided by 8 Mile, a road that splits the town in half along racial lines. A young white rapper, Jimmy 'B-Rabbit' Smith Jr. summons strength within himself to cross over these arbitrary boundaries to fulfill his dream of success in hip hop. With his pal Future and the three one third in place, all he has to do is not choke.",
        "popularity": 13.144,
        "poster_path": "/dXzTrKwpbLpCqn8O70FUUhNbYQT.jpg",
        "release_date": "2002-11-08",
        "title": "8 Mile",
        "video": false,
        "vote_average": 7,
        "vote_count": 3641
    }, 
    {
        "adult": false,
        "backdrop_path": "/fdDTA06o5e7MRXnTGAf4EygL2MJ.jpg",
        "genre_ids": [18, 10402],
        "id": 277216,
        "original_language": "en",
        "original_title": "Straight Outta Compton",
        "overview": "In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music.  Taking us back to where it all began, Straight Outta Compton tells the true story of how these cultural rebels—armed only with their lyrics, swagger, bravado and raw talent—stood up to the authorities that meant to keep them down and formed the world’s most dangerous group, N.W.A.  And as they spoke the truth that no one had before and exposed life in the hood, their voice ignited a social revolution that is still reverberating today.",
        "popularity": 13.44,
        "poster_path": "/X7S1RtotXOZNV7OlgCfh5VKZSB.jpg",
        "release_date": "2015-08-13",
        "title": "Straight Outta Compton",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 2129
    }
]

export const setSelectedMovieInfoConst = {
    "adult": false,
    "backdrop_path": "/fy1C5tM9L39i7JF0iw6DIycOO1j.jpg",
    "belongs_to_collection": null,
    "budget": 10000000,
    "genres": [{id: 18, name: "Drama"},          {id: 28, name: "Action"},
    {id: 53, name: "Thriller"}],
    "homepage": null,
    "id": 11713,
    "imdb_id": "tt0068767",
    "original_language": "zh",
    "original_title": "精武門",
    "overview": "Chen Zhen returns to the international compound of China only to learn of his beloved teacher's death. This is compounded by the continual racist harassment by the Japanese population in the area. Unlike his friends, he confronts it head on with his mastery of martial arts while investigating his teacher's murder.",
    "popularity": 17.598,
    "poster_path": "/ld1kAfLJTgpZVm3jwT58bTxmXl7.jpg",
    "production_companies": [{id: 2521, logo_path: "/e9lXexogBN1nOXA8axzASggea8B.png", name: "Orange Sky Golden Harvest", origin_country: "HK"}],
    "production_countries": [{iso_3166_1: "HK", name: "Hong Kong"}],
    'release_date': "1972-03-22",
    "revenue": 0,
    "runtime": 108,
    "spoken_languages": [{iso_639_1: "zh", name: "普通话"}],
    "status": "Released",
    "tagline": "Bruce Lee has done the impossible... ...HE'S SURPASSED HIMSELF!!!",
    "title": "Fist of Fury",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 375,
};

export const setSelectedMovieCastConst = [
    {
        "cast_id": 4,
        "character": "San (voice)",
        "credit_id": "52fe421bc3a36847f80049a1",
        "gender": 1,
        "id": 20330,
        "name": "Yuriko Ishida",
        "order": 1,
        "profile_path": "/cADoBCi603Chz2IaxcwWT2mNwCf.jpg"
    },
    {
        "cast_id": 5,
        "character": "Eboshi-gozen (voice)",
        "credit_id": "52fe421bc3a36847f80049a5",
        "gender": 1,
        "id": 20331,
        "name": "Yūko Tanaka",
        "order": 2,
        "profile_path": "/k32uD3NkzeJHPaALp0amspIqVzc.jpg",
    }
];
import axios from 'axios';

export const homepageHelper = {

  getFeaturedMovies: (options, cb) => {

    let sortBy = options.sortBy ? options.sortBy : 'popularity.desc';

    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=${sortBy}&language=en-US&page=1&api_key=${options.env}`)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        let errorMsg = "Error occurred on getFeaturedMovies() src/lib/homepageHelper";
        console.log(error);
        cb(error, errorMsg);
      });

  },
  
  getAllGenres: (options, cb) => {

    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${options.env}&language=en-US`)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        let errorMsg = "Error occurred on getAllGenres() src/lib/homepageHelper";
        console.log(error);
        cb(error, errorMsg);
      });

  },
  
  searchFilms: (options, value, page, cb) => {

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${options.env}&language=en-US&query=${value}&page=${page}&include_adult=false`)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        let errorMsg = "Error occurred on searchFilms() src/lib/homepageHelper";
        console.log(error);
        cb(error, errorMsg);
      });

  }

}
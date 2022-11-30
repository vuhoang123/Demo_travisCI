import axios from 'axios';

export const detailspageHelper = {

  getAllGenres: (options, cb) => {

    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${options.env}&language=en-US`)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        let errorMsg = "Error occurred on getAllGenres() src/lib/detailspageHelper";
        console.log(error);
        cb(error, errorMsg);
      });

  },

  getMovieInfo: (options, cb) => {

    axios.get(`https://api.themoviedb.org/3/movie/${options.movie_id}?api_key=${options.env}&language=en-US`)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        let errorMsg = "Error occurred on getMovieInfo() src/lib/detailspageHelper";
        console.log(error);
        cb(error, errorMsg);
      });
      
  },

  getMovieCredits: (options, cb) => {

    axios.get(`https://api.themoviedb.org/3/movie/${options.movie_id}/credits?api_key=${options.env}`)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        let errorMsg = "Error occurred on getMovieCredits() src/lib/detailspageHelper";
        console.log(error);
        cb(error, errorMsg);
      });

  },

  getSimilarMovies: (options, cb) => {

    axios.get(`https://api.themoviedb.org/3/movie/${options.movie_id}/similar?api_key=${options.env}&language=en-US&page=1`)
      .then(res => {
        cb(res);
      })
      .catch(error => {
        let errorMsg = "Error occurred on getSimilarMovies() src/lib/detailspageHelper";
        console.log(error);
        cb(error, errorMsg);
      });
      
  }

}
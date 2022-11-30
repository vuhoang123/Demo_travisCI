import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import Footer from '../layout/Footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import { detailspageHelper } from '../../lib/detailspageHelper';
import { setGenreMapSuccess, setGenreMapFail } from '../../actions/homeActions';
import * as DetailsActions from '../../actions/detailsActions'

class Details extends Component {

  options = { }

  constructor(props) {
    
    super(props);

    this.options = {

      env: process.env.REACT_APP_API_KEY,
      movie_id: this.props.match.params.id
      
    };

  }

  componentDidMount(){

    if (this.isEmpty(this.props.home.genreMap)) {

      this.getAllGenres();

    }

    this.allRequests();

  }

  isEmpty = (map) => {

    for (let prop in map) {
        if (map.hasOwnProperty(prop)) return false;
    }

    return true;
  
  }

  getAllGenres = () => {
  
    detailspageHelper.getAllGenres(this.options, (res, error) => {

      if (error){

        this.props.setGenreMapFail(error);

      } else {
        
        let tempMap = {}
        let genreObjs = res.data.genres;
        
        for (let i in genreObjs) {
          let key = genreObjs[i].id.toString();
          let value = genreObjs[i].name;
          tempMap[key] = value;
        }
        
        this.props.setGenreMapSuccess(tempMap);

      }

    });
    
  }

  allRequests = () => {
    
    document.getElementById("topElement").scrollIntoView({block:'start',behavior:'smooth'});

    detailspageHelper.getMovieInfo(this.options, (res, error) => {

      if (error) {

        this.props.setSelectedMovieInfoFail(error);

      } else {

        this.props.setSelectedMovieInfoSuccess(res.data);
      
      }

    });

    detailspageHelper.getMovieCredits(this.options, (res, error) => {

      if (error) {

        this.props.setSelectedMovieCastFail(error);

      } else {

        this.props.setDirectorSuccess(res.data.crew[0].name);
        this.props.setSelectedMovieCastSuccess(res.data.cast.slice(1,10));
      
      }

    });

    detailspageHelper.getSimilarMovies(this.options, (res, error) => {

      if (error) {
        
        this.props.setSimilarMoviesListFail(error);

      } else {
 
        this.props.setSimilarMoviesListSuccess(res.data.results);

      }

    });

  }

  setMovie = (movie) => {

    this.options.movie_id = movie.id;
    this.allRequests();

  } 

  getSelectedMovieYear = () => {

    let year_string = '' + this.props.details.selectedMovieInfo.release_date;
    return year_string.substring(0, 4);

  }

  getCast = () => {

    let cast_string = '';
    for (let cast_member in this.props.details.selectedMovieCast) {
      cast_string += this.props.details.selectedMovieCast[cast_member].character + ", ";
    }
    return cast_string.substring(0, cast_string.length - 2);

  }

  render() {

    let getYear = ({movie}) => {

      let year_string = '' + movie.release_date;
      return year_string.substring(0, 4);

    };

    let getGenres = ({movie}) => {

      let genre_string = '';
      for (let genre_id in movie.genre_ids) {

        genre_string += this.props.home.genreMap[movie.genre_ids[genre_id]] + ", ";

      }

      return genre_string.substring(0, genre_string.length - 2);

    };

    let movies = this.props.details.similarMoviesList.map((movie, i) => {

      return (
        <div className="resultItemStyle" key={i}>

          <Link to={`/details/${movie.id}`} onClick={ () => 
            this.setMovie(movie)
          }>
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt="" />
          </Link>

          <div className="movieTextStyle">
            <div className="movieFlexStyle">
              <div className="movieTitleStyle">{movie.title}</div>
              <div className="movieYearStyle">{getYear({movie})}</div>
            </div>
            <span className="movieGenreStyle">{getGenres({movie})}</span>
          </div>

        </div>
      )

    });

    return (

      <React.Fragment>
        <CssBaseline />
        <div className="App">

          <header className="detailsBlackBackground" id="topElement">
            <div className="detailsPictureStyle">

              <div>                
                <title className="filmSearchTitle">
                    filmSearch
                </title>
                <Link to="/">
                    <Button variant="contained" className="backToSearchButton">
                        BACK TO SEARCH
                    </Button>
                </Link>
              </div>

              <div className='movieContent'>
                <img className="movieContentImg" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.details.selectedMovieInfo.poster_path}`} alt="" />
                <div className="movieContentInfo">
                  <div className="titleAndRating">
                    <h1 className="movieTitleHeader">{this.props.details.selectedMovieInfo.title}</h1>
                    <div className="ratingStyle">{this.props.details.selectedMovieInfo.vote_average}</div>
                  </div>
                  <h2 className="yearAndLength">{this.getSelectedMovieYear()} | {this.props.details.selectedMovieInfo.runtime} minutes</h2>
                  <p className="descStyle">{this.props.details.selectedMovieInfo.overview}</p>
                  <p className="directorAndCast">
                    Director: {this.props.details.director}
                  </p>
                  <p className="directorAndCast">
                    Cast: {this.getCast()}
                  </p>
                </div>
              </div>

            </div>
          </header>

          <div className="resultsInfoStyle">
            <div className="resultsInfoWidth">
              Similar Movies
            </div>
          </div>

          <div className="resultsStyle">
            {movies}
          </div>

          <Footer />
        </div>
      </React.Fragment>

    );
  } 
}

const mapStateToProps = (state) => {

  return {
    home: state.home,
    details: state.details
  };

};

const mapDispatchToProps = (dispatch) => {

  return {
    setGenreMapSuccess: (genreMap) => {dispatch(setGenreMapSuccess(genreMap))},
    setGenreMapFail: (error) => {dispatch(setGenreMapFail(error))},

    setSimilarMoviesListSuccess: (similarMoviesList) => {dispatch(DetailsActions.setSimilarMoviesListSuccess(similarMoviesList))},
    setSimilarMoviesListFail: (error) => {dispatch(DetailsActions.setSimilarMoviesListFail(error))},

    setSelectedMovieInfoSuccess: (selectedMovieInfo) => {dispatch(DetailsActions.setSelectedMovieInfoSuccess(selectedMovieInfo))},
    setSelectedMovieInfoFail: (error) => {dispatch(DetailsActions.setSelectedMovieInfoFail(error))},

    setSelectedMovieCastSuccess: (selectedMovieCast) => {dispatch(DetailsActions.setSelectedMovieCastSuccess(selectedMovieCast))},
    setDirectorSuccess: (director) => {dispatch(DetailsActions.setDirectorSuccess(director))},
    setMovieCreditsFail: (error) => {dispatch(DetailsActions.setMovieCreditsFail(error))},
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

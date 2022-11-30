import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchHeader from '../layout/SearchHeader';
import Footer from '../layout/Footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import { homepageHelper } from '../../lib/homepageHelper';
import * as HomeActions from '../../actions/homeActions';

class Home extends Component {

  options = {
    env: process.env.REACT_APP_API_KEY,
  }

  UNSAFE_componentWillMount() {

    if (this.isEmpty(this.props.home.genreMap)) {

      this.getAllGenres();
    
    }

  }
  
  componentDidMount() {

    this.getFeaturedMovies();
  
  }

  isEmpty = (map) => {

    for (let prop in map) {
        if (map.hasOwnProperty(prop)) return false;
    }

    return true;
  
  }
  
  getAllGenres = () => {
    
    homepageHelper.getAllGenres(this.options, (res, error) => {

      if (error) {

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

  getFeaturedMovies = () => {

    homepageHelper.getFeaturedMovies(this.options, (res, error) => {

      if(error){

        this.props.setFeaturedListFail(error);

      } else {

        this.props.setFeaturedListSuccess(res.data.results);
      
      }

    });

  }

  searchRequest(value) {
    
    homepageHelper.searchFilms(this.options, value, this.props.home.resultPage, (res, error) => {

      if (error) {

        this.props.searchFilmsFail(error);

      } else {

        this.props.setShownListSuccess(res.data.results);
        this.props.setTotalPagesSuccess(res.data.total_pages);
        this.props.setTotalResultsSuccess(res.data.total_results); 

      }

    });

  }

  sortMovies(flag) {

    let options = flag === 'rate' ? 
      this.options.sortBy = 'popularity.desc' : 
      this.options.sortBy = 'release_date.desc';
    
    if (this.props.home.searchIsEmpty) {

      homepageHelper.getFeaturedMovies(this.options, (res, error)=>{
        if(error){
          this.props.setFeaturedListFail(error);
        } else {
          this.props.setFeaturedListSuccess(res.data.results);
        }
      });
      
    } else {
      
      homepageHelper.searchFilms(options, this.props.home.searchVal, this.props.home.resultPage, (res) => {

        this.props.setShownList(res.data.results);
      
      });

    }

  }

  flipSort(flag) {

    this.props.home.sortByRating ? this.props.flipSortByRating(false) : this.props.flipSortByRating(true);
    this.sortMovies(flag);

  }
  
  searchHandler = async (value) => {

    await this.props.setResultPage(1)
    value.length ? this.props.flipSearchIsEmpty(false) : this.props.flipSearchIsEmpty(true);
    value.length ? this.props.setSearchValue(value) : this.props.setSearchValue('');
    value.length ? this.searchRequest(value) : this.props.setShownList([]);

  }

  navigatePages = async (flag) => {
    
    document.getElementById("resultsElement").scrollIntoView({block:'start',behavior:'smooth'});
    
      if (flag === "back") {

        await this.props.setResultPage(this.props.home.resultPage - 1)

      } else if (flag === "forward") {

        await this.props.setResultPage(this.props.home.resultPage + 1)

      }
    
    this.searchRequest(this.props.home.searchVal);

  }

  render() {
    
    let movies;
    let selector = this.props.home.shownList.length ? this.props.home.shownList : this.props.home.featuredList;
    
    let getYear = ({movie}) => {

      let year_string = '' + movie.release_date;
      return year_string.substring(0, 4);

    }

    let getGenres = ({movie}) => {

      let genre_string = '';
      for (let genre_id in movie.genre_ids) {

        genre_string += this.props.home.genreMap[movie.genre_ids[genre_id]] + ", ";

      }

      return genre_string.substring(0, genre_string.length - 2);

    }

    movies = selector.map(function(movie, i) {

      return (
        <div className="resultItemStyle" key={i}>
          <Link to={`/details/${movie.id}`}>
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
      
    })

    return (
      
      <React.Fragment>
        <CssBaseline />
      
        <div className="App">
      
          <SearchHeader searchValue={this.searchHandler}/>
      
          <div className="resultsInfoStyle">
            <div className="resultsInfoWidth">
      
              <span className="moviesFoundStyle">
                {
                  this.props.home.searchIsEmpty ? 

                  <span>Featured Movies</span>
                  : 
                  <span>{this.props.home.totalResults} movies found</span>
                }
              </span>
      
              <div className="sortByStyle" style={{ visibility: this.props.home.searchIsEmpty ? 'visible' : 'hidden' }} >
                <div className="sortByLabelStyle">Sort by</div>
                {
                  this.props.home.sortByRating ? 
                  
                  <div className="inlineStyle">
                    <span className="disabledStyle" onClick={ () => this.flipSort('date') } >release date </span> | 
                    <span className="enabledStyle"> rating</span>
                  </div>
                  : 
                  <div className="inlineStyle">
                    <span className="enabledStyle">release date </span> | 
                    <span className="disabledStyle" onClick={ () => this.flipSort('rate') } > rating</span>
                  </div>
                }
              </div>
            </div>
            
          </div>
          {
            this.props.home.shownList.length === 0 && !this.props.home.searchIsEmpty ? 
          
            <div className="noMoviesStyle">
              <h1>No Films Found!! ʸ(➜◡ु⚈᷉)♡⃛</h1>
              <h2>Try another search</h2>
            </div>
            : 
            <div className="resultsStyle" id="resultsElement">
              {movies}
            </div>
          }
        </div>
          
        <div className="paginationStyle">
          {
            this.props.home.resultPage === 1  ? 
            null
            : 
            <Button className="displayNav" onClick={ () => this.navigatePages('back') }> back </Button>
          }
          Page {this.props.home.resultPage} of {this.props.home.totalPages ? this.props.home.totalPages : 1}
          {
            this.props.home.resultPage === this.props.home.totalPages  ? 
            null
            : 
            <Button className="displayNav" onClick={ () => this.navigatePages('forward') }> next </Button>
          }
        </div>
          
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    setGenreMapSuccess: (genreMap) => {dispatch(HomeActions.setGenreMapSuccess(genreMap))},
    setGenreMapFail: (error) => {dispatch(HomeActions.setGenreMapFail(error))},
    
    setFeaturedListSuccess: (featuredList) => {dispatch(HomeActions.setFeaturedListSuccess(featuredList))},
    setFeaturedListFail: (error) => {dispatch(HomeActions.setFeaturedListFail(error))},

    setShownListSuccess: (shownList) => {dispatch(HomeActions.setShownListSuccess(shownList))},
    setTotalPagesSuccess: (totalPages) => {dispatch(HomeActions.setTotalPagesSuccess(totalPages))},
    setTotalResultsSuccess: (totalResults) => {dispatch(HomeActions.setTotalResultsSuccess(totalResults))},

    searchFilmsFail: (error) => {dispatch(HomeActions.searchFilmsFail(error))},

    flipSearchIsEmpty: (searchIsEmpty) => {
      dispatch(HomeActions.flipSearchIsEmpty(searchIsEmpty));
    },
    flipSortByRating: (sortByRating) => {
      dispatch(HomeActions.flipSortByRating(sortByRating));
    },
    setSearchValue: (searchVal) => {
      dispatch(HomeActions.setSearchValue(searchVal));
    },
    setResultPage: (resultPage) => {
      dispatch(HomeActions.setResultPage(resultPage));
    },
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
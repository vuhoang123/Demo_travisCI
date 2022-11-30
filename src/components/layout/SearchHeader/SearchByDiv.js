import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    searchButton:{
      float: 'right',
      textDecoration: 'none',
      backgroundColor: '#EB5757',
      color: '#F5F5F5',
      border: 'none',
      padding: '5px 70px',
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: '20px',
      '&:hover': {
        backgroundColor: '#E86D6D',
      },
    },
    menu: {
      width: 200,
    },
    customTextunderline: {},
    disabled: {},
    focused: {},
    error: {},
});

class SearchByDiv extends Component {
    
    render () {

        const { classes } = this.props;

        return (

            <div className="searchByDiv">
                    
                <Button variant='contained' className={classes.searchButton} onClick={()=>this.props.searchValue(this.props.home.searchVal)}>
                    SEARCH
                </Button>

            </div>
        )
    }
}

export default withStyles(styles)(SearchByDiv)
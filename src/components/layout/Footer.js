import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';

function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <footer className="footerStyle">
        <span>filmSearch ⓒ 2022 built with</span>
        <img className="tmdbStyle" src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" alt="" />
      </footer>
    </React.Fragment>
  )
}

export default Footer;

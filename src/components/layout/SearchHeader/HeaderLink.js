import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderLink extends Component {

    render() {
        return (
            <Link to="/">
                <title className="filmSearchTitle">
                    filmSearch
                </title>
            </Link>
        )
    }
}

export default HeaderLink

import React, { Component } from 'react';
import './style/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='navbar-container'>
                <span className='icon-container'>
                    <img className='icon-img' src='./images/stopwatch.svg' alt='failed to load custom timer option' />
                </span>
            </div>
        );
    }
}

export default Navbar;
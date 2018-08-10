import React, { Component } from 'react';

class AppHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <header className='ui fixed menu'>
                <nav className='ui container'>
                    <a href='#' className='header item'>
                        Contact List
                    </a>
                    <div className='header item'>
                        <button className='ui button'>Add new contact</button>
                    </div>
                </nav>
            </header>
        );
    }
}
 
export default AppHeader;
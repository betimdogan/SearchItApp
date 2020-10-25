import React, { Component } from 'react';
import Header from '../components/home/HeaderHome';
import SearchBox from '../components/home/SearchBox';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Header />
                <SearchBox />
            </div>
        );
    }
}

export default Home;
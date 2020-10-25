import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import * as ImIcons from 'react-icons/im';
import Logo from '../../images/logo.png';
import SearchBox from './ResultsSearchBox';
import './HeaderResults.css';

class HeaderResults extends Component {
    static contextType = SearchContext;

    render() {

        return (
            <React.Fragment>
                <div className="mainContainer">
                    <div className='resultsHeader'>
                        <div className='rContainer'>
                            <img src={Logo} alt="" className='rLogo' />
                            <br></br>
                        </div>
                        <SearchBox />
                    </div>
                </div>
                <div className="orderContainer">
                    <div className='oContainer'>
                        <h2>Search Results</h2>
                    </div>
                    <Link style={{textDecoration: "none"}}>
                        <div className={this.context.orderByName ? "orderButtonGray" : "orderButton"}
                            onClick={() => {
                                this.context.setFilteredResults();
                                this.context.setOrderByName();
                            }}>
                            <ImIcons.ImSortAmountDesc
                                className="oIcon"
                            ></ImIcons.ImSortAmountDesc>
                            <p>Order By</p>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderResults;
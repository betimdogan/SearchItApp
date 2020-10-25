import React, { Component } from 'react'
import { SearchContext } from '../context/SearchContext';
import HeaderResults from '../components/results/HeaderResults';
import Items from '../components/results/Items';
import Pagination from '../components/results/Pagination';
import '../components/results/Results.css'

class Results extends Component {
    static contextType = SearchContext;
    render() {
        return (
            <div className='results'>
                <HeaderResults/>
                <Items />
                <div className= "pagination">
                    <Pagination
                resultsPerPage={this.context.resultsPerPage}
                totalResults={this.context.filteredResults.length}
                paginate={this.context.setCurrentPage}
                />
                </div>
            </div>
        );
    }
}

export default Results;

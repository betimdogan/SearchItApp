import React, { Component } from 'react';
import { SearchContext } from '../../context/SearchContext';
import './Items.css';

const returnItems = (myItems) => {
    return (
        <ul className='search-items'>
            {myItems.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <div className="itemContainer">
                            <span className={"title"}> {item.title} </span>
                            <br></br>
                            <br></br>
                            <span className="description">{item.description}</span>
                        </div>
                        <span className={"date"}>Created at {item.date}</span>
                    </li>
                )
            })}
        </ul>
    )
}

class Items extends Component {
    static contextType = SearchContext;
    state = {
        resultsPerPage: 3,

    };
    compareTitles(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    }


    render() {
        const indexOfLastPost = this.context.currentPage * this.state.resultsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.resultsPerPage;
        const currentResult = this.context.filteredResults.slice(indexOfFirstPost, indexOfLastPost);
        const dateSortedItems = currentResult.sort((a, b) => a.date.split('/').reverse().join().localeCompare(b.date.split('/').reverse().join()));
        return (
            <>
                {(this.context.orderByName ? returnItems(currentResult.sort(this.compareTitles)) : returnItems(dateSortedItems))}
            </>
        );
    }
}


export default Items;


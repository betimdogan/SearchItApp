import React, { Component } from 'react';
import * as BsIcons from 'react-icons/bs';
import './SearchBox.css';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { IconContext } from 'react-icons';

class SearchBox extends Component {
    static contextType = SearchContext;
    render() {
        return (
            <>
                <IconContext.Provider value={{ color: '#837f7f' }} >
                    <div className="searchbox">
                        <form className="sForm">
                            <Link to="/results">
                                <BsIcons.BsSearch
                                    type="submit"
                                    className="sButton"
                                    onClick={() => {
                                        this.context.setFilteredResults();
                                    }}
                                ></BsIcons.BsSearch>
                            </Link>
                            <label>
                                <input className="textArea"
                                    type="text"
                                    name="name"
                                    onChange={this.context.onChangeFilterText}
                                    placeholder="Search..." />
                            </label>
                        </form>
                    </div>

                </IconContext.Provider>
            </>
        );
    }
}

export default SearchBox;
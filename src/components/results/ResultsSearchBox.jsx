import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import * as BsIcons from 'react-icons/bs';
import './ResultsSearchBox.css';
import { IconContext } from 'react-icons';

class ResultsSearchBox extends Component {
    static contextType = SearchContext;
    render() {
        return (
            <>
                <IconContext.Provider value={{ color: '#837f7f' }} >
                    <div className="rSearchbox">
                        <form className="rForm">
                            <label>
                                <input className="rtextArea"
                                    type="text"
                                    value={this.context.areaText}
                                    onChange={this.context.onChangeFilterText}
                                    name="name"
                                    placeholder="Search..." />
                            </label>
                            <Link to="#">
                                <BsIcons.BsSearch
                                type="submit"
                                className="rButton"
                                onClick={() => {
                                    this.context.setFilteredResults();
                                    this.context.setCurrentPageToOne();
                                }}
                            ></BsIcons.BsSearch>
                            </Link>
                        </form>
                    </div>

                </IconContext.Provider>
            </>
        );
    }
}

export default ResultsSearchBox;
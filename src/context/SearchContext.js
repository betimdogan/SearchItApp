import React, { Component, createContext } from 'react';
import { ItemsData } from '../components/ItemsData';

export const SearchContext = createContext();
//** spread operatörüm ... yla state imin her bir elemanını açıp tek tek vermiş oluyorum */ 
// bunu index.js imde kullanacağım çünkü tüm uygulamamda kullanacağım 

class SearchContextProvider extends Component {
    state = {
        areaText: '',
        filterText: '',
        filteredResults: [],
        orderByName: false,
        resultsPerPage: 3,
        currentPage: 1,
    }

    onChangeFilterText = (e) => {
        this.setState({
            areaText: e.target.value,

        })
        this.setState({
            filterText: e.target.value,

        })
        console.log("filter text change is set");
    };

    setFilteredResults = () => {
        this.setState({
            filteredResults: ItemsData.filter(
                contact => {
                    return contact.title.toLowerCase().indexOf(
                        this.state.filterText.toLowerCase()
                    ) !== -1
                }
            )
        })
        console.log("filtered contaacts is set");
    }

    setOrderByName = () => {
        this.setState({ orderByName: !this.state.orderByName });
    }
    setCurrentPage = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    }
    setCurrentPageToOne = () => {
        this.setState({ currentPage: 1});
    }


    render() {
        return (
            < SearchContext.Provider value={{
                ...this.state,
                onChangeFilterText: this.onChangeFilterText,
                emptyInputArea: this.emptyInputArea,
                setFilteredResults: this.setFilteredResults,
                setOrderByName: this.setOrderByName,
                setCurrentPage: this.setCurrentPage,
                setCurrentPageToOne: this.setCurrentPageToOne,
            }}>
                { this.props.children}
            </SearchContext.Provider >
        );
    }
}
export default SearchContextProvider;
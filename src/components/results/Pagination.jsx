import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

const Pagination = ({ resultsPerPage, totalResults, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul class="pagination">
                {pageNumbers.map(number => (
                    <>
                        <li key={number} className="page-item">
                            <Link onClick={() => paginate(number)} className="page-link">{number}</Link>
                        </li>
                    </>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination
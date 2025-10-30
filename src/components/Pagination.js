import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { booksPerPage, totalBooks, paginate, currentPage } = this.props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          {pageNumbers.map(number => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? 'active' : ''}`}
            >
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;

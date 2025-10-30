import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import DeveloperPopup from './components/DeveloperPopup';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: '',
      loading: false,
      currentPage: 1,
      booksPerPage: 10,
      totalResults: 0,
      isVerified: false //  new state for popup verification
    };
  }

  // Called when popup success
  handlePopupSuccess = () => {
    this.setState({ isVerified: true });
  };

  handleSearch = async (term) => {
    this.setState({ searchTerm: term, loading: true, currentPage: 1 });
    const res = await fetch(`https://openlibrary.org/search.json?title=${term}`);
    const data = await res.json();
    this.setState({
      books: data.docs,
      totalResults: data.docs.length,
      loading: false
    });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const {
      books,
      loading,
      currentPage,
      booksPerPage,
      totalResults,
      isVerified
    } = this.state;

    // Pagination Logic
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    return (
      <div className="container my-4">
        {/* Show popup first */}
        {!isVerified && <DeveloperPopup onSuccess={this.handlePopupSuccess} />}

        {/* Show app content only after verification */}
        {isVerified && (
          <>
            <h1 className="text-center mb-4">📚 Book Finder</h1>
            <SearchBar onSearch={this.handleSearch} />
            {loading ? (
              <div className="text-center mt-5">Loading...</div>
            ) : (
              <>
                <BookList books={currentBooks} />
                {books.length > 0 && (
                  <Pagination
                    booksPerPage={booksPerPage}
                    totalBooks={totalResults}
                    paginate={this.handlePageChange}
                    currentPage={currentPage}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;

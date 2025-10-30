import React, { Component } from 'react';

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="row">
        {books.length === 0 && (
          <div className="text-center">No books found. Try a different search!</div>
        )}
        {books.map((book, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : 'https://via.placeholder.com/150x200?text=No+Cover'
                }
                className="card-img-top"
                alt={book.title}
              />
              <div className="card-body">
                <h6 className="card-title">{book.title}</h6>
                <p className="card-text text-muted">
                  {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
                </p>
                <p className="small text-secondary">
                  First published: {book.first_publish_year || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BookList;


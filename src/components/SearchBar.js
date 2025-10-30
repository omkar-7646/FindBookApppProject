import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.term.trim() === '') return;
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <form className="d-flex mb-4" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search for books..."
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;

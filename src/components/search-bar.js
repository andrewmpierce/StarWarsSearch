import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="center yellow-text">
        <h5> Search for a Different Character </h5>
        <input className='black-text search-bar'
          value = {this.state.term}
          placeholder="Darth Vader"
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }

  handleKeyPress = (e) => {
   if (e.key === 'Enter') {
     this.props.onPressEnter();
   }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;

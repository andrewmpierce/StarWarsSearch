import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar center">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={this.handleKeyPress} />
      </div>
    );
  }

  handleKeyPress = (e) => {
   if (e.key === 'Enter') {
     console.log('do validate');
     this.props.onPressEnter();
   }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;

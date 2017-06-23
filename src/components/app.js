import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './search-bar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCharacter: "Search for a character",
     };

     this.characterSearch('something');
  }


  characterSearch(type) {
    axios.get(`http://swapi.co/api/people/`).then((result) => {
      console.log(result);
      this.setState({selectedCharacter: result.data.results[0].name});

    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.characterSearch} />
        <div>{this.state.selectedCharacter}</div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './search-bar';
import _ from 'lodash';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.characterSearch = this.characterSearch.bind(this);

    this.state = {
      selectedCharacter: null,
     };

     this.characterSearch('r2');
  }


  characterSearch(type) {
    axios.get(`https://swapi.co/api/people/?search=${type}`).then((result)=>{
      console.log(result.data.results[0].name);
      this.setState({
        selectedCharacter: result.data.results[0].name
      });

    });
  }

  render() {
    const characterSearch = _.debounce((term) => {this.characterSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={this.characterSearch} />
        <div>{this.state.selectedCharacter}</div>
      </div>
    );
  }
}

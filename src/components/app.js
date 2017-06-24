import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './search-bar';
import CharacterList from './character-list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.characterSearch = this.characterSearch.bind(this);

    this.state = {
      selectedCharacter: null,
      characters: []
     };

     this.characterSearch('r2');
  }


  characterSearch(type) {
    axios.get(`https://swapi.co/api/people/?search=${type}`).then((result)=>{
      if (result.data.count != 0) {
        var name = result.data.results[0].name;
        console.log(name);
      }
      if (name) {
        this.setState({
          selectedCharacter: name,
          characters: result.data.results
        });
      }

    });
  }

  render() {

    return (
      <div>
        <SearchBar onSearchTermChange={this.characterSearch} />
        <div>{this.state.selectedCharacter}</div>
        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

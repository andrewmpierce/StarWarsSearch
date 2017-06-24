import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './search-bar';
import CharacterList from './character-list';
import CharacterDetail from './character-detail';
import HeaderLogo from './header-logo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.characterSearch = this.characterSearch.bind(this);
    this.characterSelect = this.characterSelect.bind(this);

    this.state = {
      selectedCharacter: null,
      characters: []
     };

     this.characterSearch('Luke', true);

  }


  characterSearch(type, initial=false) {
    axios.get(`https://swapi.co/api/people/?search=${type}`).then((result)=>{
      if (result.data.count != 0) {
        var name = result.data.results[0].name;
      }

      if (name && initial) {
        this.setState({
          selectedCharacter: result.data.results[0]
        })
      } else if (name) {
        this.setState({
          characters: result.data.results
        });
      }

    });
  }

  characterSelect() {
    if (this.state.characters) {
      this.setState({selectedCharacter: this.state.characters[0]});
    }
  }

  render() {

    return (
      <div>
        <HeaderLogo />
        <CharacterDetail selectedCharacter={this.state.selectedCharacter}  />
        <SearchBar onSearchTermChange={this.characterSearch}  onPressEnter={this.characterSelect} />
        <CharacterList characters={this.state.characters} onCharacterSelect={ selectedCharacter => this.setState({selectedCharacter}) } />
      </div>
    );
  }
}

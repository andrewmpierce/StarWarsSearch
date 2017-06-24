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

  }


  characterSearch(type) {
    axios.get(`https://swapi.co/api/people/?search=${type}`).then((result)=>{
      if (result.data.count != 0) {
        var name = result.data.results[0].name;
        console.log(name);
      }
      if (name) {
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
        <SearchBar onSearchTermChange={this.characterSearch}  onPressEnter={this.characterSelect}/>
        <CharacterDetail selectedCharacter={this.state.selectedCharacter}  />
        <CharacterList characters={this.state.characters} onCharacterSelect={ selectedCharacter => this.setState({selectedCharacter}) } />
      </div>
    );
  }
}

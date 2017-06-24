import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './search-bar';


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
      if (result.data.results) {
        var name = result.data.results[0].name;
        console.log(name);
      }
      if (name) {
        this.setState({
          selectedCharacter: name
        });
      }

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

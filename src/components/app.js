import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {

  
  componentDidMount() {
    axios.get('http://swapi.co/api/people/').then((result) => {
      console.log(result);
    });
  }
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}

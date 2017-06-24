import React, { Component } from 'react';
import CharacterDetail from './character-detail';

const CharacterList = (props) => {
  //console.log('character list: ' + props.characters);
  const characters = props.characters.map(character => {
    console.log(character);
    return (
        <CharacterDetail
          key={character.url}
          character={character}
        />
    );
  });
  return (
    <ul className="list-group">
      {characters}
    </ul>
  );

}

export default CharacterList;

import React, { Component } from 'react';
import CharacterListItem from './character-list-item';

const CharacterList = (props) => {
  //console.log('character list: ' + props.characters);
  const characters = props.characters.map(character => {
    //console.log(character);
    return (
        <CharacterListItem
          key={character.url}
          character={character}
          onCharacterSelect={props.onCharacterSelect}
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

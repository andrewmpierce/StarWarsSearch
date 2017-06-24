import React, { Component } from 'react';

const CharacterListItem = ({character, onCharacterSelect}) => {
  //console.log(character);
  if (!character) {
    return <div>No character yet</div>
  }

  return (
    <li className="list-group yellow-text center" onClick={() => onCharacterSelect(character)}>
      {character.name}
    </li>
  );

}

export default CharacterListItem;

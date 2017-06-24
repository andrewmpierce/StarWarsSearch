import React, { Component } from 'react';

const CharacterDetail = (character) => {
  if (!character.character) {
    return <div>No character yet</div>
  }
  console.log(character);
  console.log('character detail' + character.character.name);
  return (
    <ul className="col-md-4 list-group">
      {character.character.name}
    </ul>
  );

}

export default CharacterDetail;

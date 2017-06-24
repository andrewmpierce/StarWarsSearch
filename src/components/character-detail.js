import React, { Component } from 'react';

const CharacterDetail = (character) => {
  if (!character.character) {
    return <div>No character yet</div>
  }

  return (
    <li className="list-group">
      {character.character.name}
    </li>
  );

}

export default CharacterDetail;

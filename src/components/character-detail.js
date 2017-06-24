import React, { Component } from 'react';

const CharacterDetail = ({selectedCharacter}) => {
  if (!selectedCharacter) {
    return <div className="yellow-text center">Search for a character!</div>
  }
  console.log(selectedCharacter);
  return (
    <div className="yellow-text center">
      <h3>Name: {selectedCharacter.name} </h3>
      <p>Height: {selectedCharacter.height}</p>
      <p>Weight: {selectedCharacter.mass}</p>
      <p>Eye Color: {selectedCharacter.eye_color}</p>
      <p>Skin Color: {selectedCharacter.skin_color}</p>
    </div>
  );

}

export default CharacterDetail;

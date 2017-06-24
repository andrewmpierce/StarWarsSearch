import React, { Component } from 'react';

const CharacterDetail = ({selectedCharacter}) => {
  if (!selectedCharacter) {
    return <div>No selected character yet</div>
  }
  console.log(selectedCharacter);
  return (
    <div>
      {selectedCharacter.name}
      {selectedCharacter.url}
    </div>
  );

}

export default CharacterDetail;

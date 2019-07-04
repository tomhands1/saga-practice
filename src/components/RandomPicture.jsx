import React from 'react';

const RandomPicture = ({ randomPicture, getRandomPicture }) => {
  return (
    <div className="random-picture-container">
      <div className="picture-list-title" >Random Picture</div>
      <button onClick={() => getRandomPicture()}>Random Picture</button>
      {randomPicture ? <img alt="Random" src={randomPicture} /> : null}
    </div>
  );
};

export default RandomPicture;

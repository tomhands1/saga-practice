import React from 'react';

const PictureList = ({ pictureList, randomPicture, addToList }) => (
    <div className="random-picture-container">
        <div className="picture-list-title" >Pictures List</div>
        <div>
            <button onClick={() => addToList(randomPicture)}>+ My Pictures</button>
        </div>
        <div className="picture-list-columns">
            {pictureList.map((picture, index) => (
                <img key={index} alt="collection" src={picture} />
            ))}
        </div>
    </div>
);

export default PictureList;

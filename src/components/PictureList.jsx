import React from 'react';

const PictureList = ({ pictureList, randomPicture, addToList }) => {

    return (
        <div className="random-picture-container">
            <div className="picture-list-title" >Pictures List</div>
            <div>
                <button onClick={() => addToList(randomPicture)}>+ My Pictures</button>
            </div>
            <div className="picture-list-columns">
                {pictureList.map((picture, index) => (
                    <img key={index} alt="collection" src={picture} height="100" width="100" />
                ))}
            </div>
        </div>
    );
};

export default PictureList;

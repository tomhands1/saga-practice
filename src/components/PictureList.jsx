import React from 'react';

const PictureList = ({ pictureList, randomPicture, addToList }) => {

    return (
        <div className="random-picture-container">
            <div className="picture-list-title" >Pictures List</div>
            <div>
                <button onClick={() => addToList(randomPicture)}>+ My Pictures</button>
            </div>
            <div className="picture-list-columns">
                {pictureList.map((picture, index) => {
                    if ((index + 1) % 3 === 1) {
                        return (
                            <div className="column-1" key={index}>
                                <img alt="collection" src={picture} height="100" width="100" />
                            </div>
                        )
                    } else if ((index + 1) % 3 === 2) {
                        return (
                            <div className="column-2" key={index}>
                                <img alt="collection" src={picture} height="100" width="100" />
                            </div>
                        )
                    } else {
                        return (
                            <div className="column-3" key={index}>
                                <img alt="collection" src={picture} height="100" width="100" />
                            </div>
                        )
                    }
                })
                }
            </div>
        </div>
    );
};

export default PictureList;

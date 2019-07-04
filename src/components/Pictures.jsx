import React from 'react';
import { connect } from 'react-redux';
import RandomPicture from './RandomPicture';
import PictureList from './PictureList';
import { requestRandomPicture, addToPictureList } from '../actions/RandomPicture'

const Pictures = ({ randomPicture, getRandomPicture, pictureList, addToList }) => {
    return (
        <div className="pictures-container">
            <PictureList pictureList={pictureList} randomPicture={randomPicture} addToList={addToList}/>
            <RandomPicture randomPicture={randomPicture} getRandomPicture={getRandomPicture} />
        </div>
    );
};

const mapStateToProps = state => ({
    randomPicture: state.randomPicture.picture,
    pictureList: state.randomPicture.pictureList
});

const mapDispatchToProps = dispatch => ({
    getRandomPicture: () => dispatch(requestRandomPicture()),
    addToList: picture => dispatch(addToPictureList(picture))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);

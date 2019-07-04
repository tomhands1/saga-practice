import { RANDOM_PICTURE_RECEIVED, PICTURE_ADDED } from '../actions/RandomPicture';

const INITIAL_STATE = {
    picture: null,
    pictureList: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case RANDOM_PICTURE_RECEIVED:
            return {
                ...state,
                picture: payload
            }
        case PICTURE_ADDED:
            return {
                ...state,
                pictureList: state.pictureList.concat(payload)
            }
        default:
            return state;
    };
};
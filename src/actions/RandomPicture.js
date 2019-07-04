export const RANDOM_PICTURE_REQUEST = 'RANDOM_PICTURE_REQUEST';
export const RANDOM_PICTURE_RECEIVED = 'RANDOM_PICTURE_RECEIVED';
export const PICTURE_ADDED = 'PICTURE_ADDED';

export const requestRandomPicture = () => ({
    type: RANDOM_PICTURE_REQUEST
});

export const receivedRandomPicture = data => ({
    type: RANDOM_PICTURE_RECEIVED,
    payload: data
});

export const addToPictureList = url => ({
    type: PICTURE_ADDED,
    payload: url
});
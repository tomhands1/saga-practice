export const fetchRandomPicture = async () => {
    try {
        const response = await fetch("https://picsum.photos/600");
        const data = await response.url;
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const fetchThirtyPictures = async () => {
    try {
        const response = await fetch("https://picsum.photos/v2/list");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
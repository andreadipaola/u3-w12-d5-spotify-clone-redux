export const GET_SONGS = "GET_SONGS";

export const getSongs = query => {
    const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
    return async (dispatch) => {
        try {
            let res = await fetch(URL + query);
            let songsObj = await res.json();
            let songs = songsObj.data;
            dispatch({
                type: GET_SONGS,
                payload: songs
            });
        } catch (err) {
            console.log(err);
        }
    };
};


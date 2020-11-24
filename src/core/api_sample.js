export const search = ( query ) => {
    // const key = "YOUR_KEY_HERE";
    return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${ key }&q=${ query }&type=video&maxResults=10`,
    )
        .then( res => { return res.json(); } );
}

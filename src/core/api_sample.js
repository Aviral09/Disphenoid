export const search = ( query ) => {
    // const key = "YOUR_KEY_HERE";
    return fetch(
        "https://www.googleapis.com/youtube/v3/search?key=" + key,
        {
            "part": [ "snippet" ],
            "maxResults": 10,
            "q": query,
            "type": [ "video" ]
        }
    )
        .then( res => { return res.json() } );
}
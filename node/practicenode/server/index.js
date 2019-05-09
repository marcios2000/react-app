require express = require('express');

const app = express();


let songs = [];




app.use(express.json());
app.post('/api/songs', ( req, res ) => {
    let {title, artist, album} = req.body;
    // let title = req.body.title;
    // let artist = req.body.artist;
    // let album = req.body.album
    songs.push({
        
    })

})
// or let {title, artist, album} = req.body;
let testSong = {
    "title": "Lovesong",
    "Artist": 
}





const PORT = 5050;

app.listen(PORT, console.log(`Listening on port ${PORT}`))


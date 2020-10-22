/*
    Spotify API Token server
        Esta aplicación únicamente toma el CLIENTID y CLIENTSecret
        que brinda spotify, para obtener el token mediante una petición
        POST desde el front-end. 

*/

const express = require('express');
const request = require('request');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/spotify/fa6f7501e4f84c8cb40b9e787639765d/1200214b80344279b6b2ae885ad603fb', (req, resp) => {

    let client_id = req.params.client_id;
    let client_secret = req.params.client_secret;
    let spotifyUrl = 'https://accounts.spotify.com/api/token';

    var authOptions = {
        url: spotifyUrl,
        headers: {
            Authorization: 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64')
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };


    request.post(authOptions, (err, httpResponse, body) => {

        if (err) {
            return resp.status(400).json({
                ok: false,
                mensaje: 'No se pudo obtener el token',
                err
            })
        }

        resp.json(body);

    });

});

app.post('https://accounts.spotify.com/api/token',(req,res) => {

})

app.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
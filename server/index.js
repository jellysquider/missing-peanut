const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.sendFile('/index.html');
});

exports.app = functions.https.onRequest(app);

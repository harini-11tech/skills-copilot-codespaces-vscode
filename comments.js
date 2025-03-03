// create web server
const express = require('express');
const app = express();
const PORT = 3000;

// create a route for get request
app.get('/comments', (req, res) => {
    res.send('Comments Page');
});

// start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/Angular_Client'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/Angular_Client/index.html'));
});
ngApp.listen(process.env.PORT || 8080);

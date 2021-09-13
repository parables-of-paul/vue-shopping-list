const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const serveStatic = require('serve-static');

global.Item = require('./api/models/shoppingItemModel');
const routes = require('./api/routes/shoppingItemRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(
    `mongodb+srv://${process.env.MONGOOSECRED}@cluster0.tyj8d.mongodb.net/shoppingList?retryWrites=true&w=majority`, {
         useNewUrlParser: true,
        }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/dist'))

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send( {url: `${req.originalURL} not found`});
});

console.log(`server started on port ${port}`);
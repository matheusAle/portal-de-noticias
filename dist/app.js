'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _bdConnection = require('./config/bdConnection');

var _noticia = require('./routes/noticia');

var _home = require('./routes/home');

var _noticias = require('./controllers/noticias');

var _noticias2 = _interopRequireDefault(_noticias);

var _home2 = require('./controllers/home');

var _home3 = _interopRequireDefault(_home2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use((0, _bodyParser.urlencoded)({ extended: true }));
app.use((0, _expressValidator2.default)());
app.use(_express2.default.static('./app/public'));

app.config = { bd: (0, _bdConnection.createConnection)() };
app.controllers = {
    noticias: new _noticias2.default(app),
    home: new _home3.default(app)
};

new _noticia.NoticiaRoute(app);
new _home.HomeRoute(app);

app.listen(8080, function () {
    return console.log('open in 8080.');
});
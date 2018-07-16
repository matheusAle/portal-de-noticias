'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NoticiaRoute = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoticiaRoute = exports.NoticiaRoute = function NoticiaRoute(app) {
	(0, _classCallCheck3.default)(this, NoticiaRoute);

	app.post('/noticias/salvar', function (req, res) {
		return app.controllers.noticias.salvarNoticia(req, res);
	});
	app.get('/noticias', function (req, res) {
		return app.controllers.noticias.listarNoticias(req, res);
	});
	app.get('/noticias/nova', function (req, res) {
		return app.controllers.noticias.incluirNoticia(req, res);
	});
	app.get('/noticias/:id', function (req, res) {
		return app.controllers.noticias.getNoticia(req, res);
	});
};

;
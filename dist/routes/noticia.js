'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NoticiaRoute = exports.NoticiaRoute = function NoticiaRoute(app) {
	_classCallCheck(this, NoticiaRoute);

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
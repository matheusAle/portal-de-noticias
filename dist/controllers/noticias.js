'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NoticiaDAO = require('../models/NoticiaDAO');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NoticiaController = function () {
    function NoticiaController(app) {
        _classCallCheck(this, NoticiaController);

        this.dao = new _NoticiaDAO.NoticiaDAO(app.config.bd);
    }

    _createClass(NoticiaController, [{
        key: 'incluirNoticia',
        value: function incluirNoticia(req, res) {
            res.render('admin/form_add_noticia', { validation: undefined });
        }
    }, {
        key: 'getNoticia',
        value: function getNoticia(req, res) {
            var noticia;
            return regeneratorRuntime.async(function getNoticia$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return regeneratorRuntime.awrap(this.dao.getNoticia(req.params.id));

                        case 2:
                            noticia = _context.sent;

                            res.render('noticias/noticia', { noticia: noticia });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'listarNoticias',
        value: function listarNoticias(req, res) {
            var noticias;
            return regeneratorRuntime.async(function listarNoticias$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return regeneratorRuntime.awrap(this.dao.getNoticias());

                        case 2:
                            noticias = _context2.sent;

                            res.render('noticias/noticias', { noticias: noticias });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'salvarNoticia',
        value: function salvarNoticia(req, res) {
            var validationResult;
            return regeneratorRuntime.async(function salvarNoticia$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            req.assert('titulo', 'O titulo é obrigatório.').notEmpty();
                            req.assert('resumo', 'O resumo é obrigatório').notEmpty();
                            req.assert('resumo', 'O resumo deve ter entre 10 e 100 caracteres.').len(10, 100);
                            req.assert('autor', 'O autor é obrigatório.').notEmpty();
                            req.assert('noticia', 'A noticia é obrigatório.').notEmpty();
                            req.assert('data_noticia', 'A data é obrigatória.').notEmpty().isISO8601();

                            if (!req.validationErrors()) {
                                _context3.next = 12;
                                break;
                            }

                            _context3.next = 9;
                            return regeneratorRuntime.awrap(req.getValidationResult());

                        case 9:
                            validationResult = _context3.sent.mapped();

                            res.render('admin/form_add_noticia', { validation: validationResult });
                            return _context3.abrupt('return');

                        case 12:
                            _context3.next = 14;
                            return regeneratorRuntime.awrap(this.dao.salvarNovaNoticia([req.body.titulo, req.body.noticia, req.body.data_noticia, req.body.resumo, req.body.autor]));

                        case 14:
                            res.redirect('/noticias');

                        case 15:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, null, this);
        }
    }]);

    return NoticiaController;
}();

exports.default = NoticiaController;
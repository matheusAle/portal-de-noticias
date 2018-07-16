'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NoticiaDAO = exports.NoticiaDAO = function () {
    function NoticiaDAO(connection) {
        _classCallCheck(this, NoticiaDAO);

        this._connection = connection;
    }

    _createClass(NoticiaDAO, [{
        key: 'getNoticias',
        value: function getNoticias() {
            return regeneratorRuntime.async(function getNoticias$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return regeneratorRuntime.awrap(this.exec('SELECT * FROM noticias').then(function (r) {
                                return r.rows;
                            }));

                        case 2:
                            return _context.abrupt('return', _context.sent);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'getNoticia',
        value: function getNoticia(id) {
            return regeneratorRuntime.async(function getNoticia$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return regeneratorRuntime.awrap(this.exec('SELECT * FROM noticias WHERE id_noticia = $1', [id]).then(function (r) {
                                return r.rows[0];
                            }));

                        case 2:
                            return _context2.abrupt('return', _context2.sent);

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'salvarNovaNoticia',
        value: function salvarNovaNoticia(dados) {
            return regeneratorRuntime.async(function salvarNovaNoticia$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return regeneratorRuntime.awrap(this.exec('INSERT INTO noticias VALUES (DEFAULT, $1, $2, $3, $4, $5 )', dados));

                        case 2:
                            return _context3.abrupt('return', _context3.sent);

                        case 3:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'exec',
        value: function exec(query) {
            var _this = this;

            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            return new Promise(function (resolve, reject) {
                _this._connection.query(query, args, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        }
    }]);

    return NoticiaDAO;
}();
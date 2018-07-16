'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NoticiaDAO = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoticiaDAO = exports.NoticiaDAO = function () {
    function NoticiaDAO(connection) {
        (0, _classCallCheck3.default)(this, NoticiaDAO);

        this._connection = connection;
    }

    (0, _createClass3.default)(NoticiaDAO, [{
        key: 'getNoticias',
        value: function getNoticias() {
            return _regenerator2.default.async(function getNoticias$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _regenerator2.default.awrap(this.exec('SELECT * FROM noticias').then(function (r) {
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
            return _regenerator2.default.async(function getNoticia$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _regenerator2.default.awrap(this.exec('SELECT * FROM noticias WHERE id_noticia = $1', [id]).then(function (r) {
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
            return _regenerator2.default.async(function salvarNovaNoticia$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _regenerator2.default.awrap(this.exec('INSERT INTO noticias VALUES (DEFAULT, $1, $2, $3, $4, $5 )', dados));

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
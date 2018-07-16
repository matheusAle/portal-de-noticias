'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeController = function () {
    function HomeController() {
        (0, _classCallCheck3.default)(this, HomeController);
    }

    (0, _createClass3.default)(HomeController, [{
        key: 'getpaginaInicial',
        value: function getpaginaInicial(req, res) {
            res.render('home/index');
        }
    }]);
    return HomeController;
}();

exports.default = HomeController;
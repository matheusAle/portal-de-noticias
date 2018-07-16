'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HomeRoute = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeRoute = exports.HomeRoute = function HomeRoute(app) {
	(0, _classCallCheck3.default)(this, HomeRoute);

	app.get('/', app.controllers.home.getpaginaInicial);
};

;
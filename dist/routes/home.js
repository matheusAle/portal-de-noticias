'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeRoute = exports.HomeRoute = function HomeRoute(app) {
	_classCallCheck(this, HomeRoute);

	app.get('/', app.controllers.home.getpaginaInicial);
};

;
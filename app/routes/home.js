export class HomeRoute {
	
	constructor(app) {
		app.get('/', app.controllers.home.getpaginaInicial);
	}
};
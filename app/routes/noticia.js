
export class NoticiaRoute {
	
	constructor(app) {
		app.post('/noticias/salvar', (req, res) => app.controllers.noticias.salvarNoticia(req, res));
		app.get('/noticias', (req, res) => app.controllers.noticias.listarNoticias(req, res));
		app.get('/noticias/nova', (req, res) => app.controllers.noticias.incluirNoticia(req, res));
		app.get('/noticias/:id', (req, res) => app.controllers.noticias.getNoticia(req, res));
	}
	
};
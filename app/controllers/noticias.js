import { NoticiaDAO } from '../models/NoticiaDAO';

export default class NoticiaController {
    
    constructor(app) {
        this.dao = new NoticiaDAO(app.config.bd);        
    }
    
    incluirNoticia(req, res) {
        res.render('admin/form_add_noticia', { validation: undefined });
    }
    
    async getNoticia(req, res) {
        const noticia = await this.dao.getNoticia(req.params.id);
        console.log(noticia);
        res.render('noticias/noticia', { noticia });        
    }
    
    async listarNoticias(req, res) {
        const noticias = await this.dao.getNoticias();
        res.render('noticias/noticias', { noticias })
    }

    async salvarNoticia(req, res) {
        req.assert('titulo', 'O titulo é obrigatório.').notEmpty();
        req.assert('resumo', 'O resumo é obrigatório').notEmpty();
        req.assert('resumo', 'O resumo deve ter entre 10 e 100 caracteres.').len(10, 100);
        req.assert('autor', 'O autor é obrigatório.').notEmpty();
        req.assert('noticia', 'A noticia é obrigatório.').notEmpty();
        req.assert('data_noticia', 'A data é obrigatória.').notEmpty().isISO8601();

        if (req.validationErrors()) {
            const validationResult = (await req.getValidationResult()).mapped();
            res.render('admin/form_add_noticia', { validation: validationResult });
            return;
        }
        await this.dao.salvarNovaNoticia({
            titulo: req.body.titulo,
            noticia: req.body.noticia,
            resumo: req.body.resumo,
            data_criacao: req.body.data_noticia,
            autor: req.body.autor
        });
        res.redirect('/noticias');
    }
    


}
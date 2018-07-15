
export class NoticiaDAO {

    constructor(connection) {
        this._connection = connection
    }

    async getNoticias() {
        return await this.exec('SELECT * FROM noticias');
    }
    async getNoticia(id) {
        return await this.exec('SELECT * FROM noticias WHERE id_noticia = ?', [id])
            .then(r => r[0]);
    }

    async salvarNovaNoticia(dados) {
        return await this.exec('INSERT INTO noticias SET ?', dados);
    }
    
    exec(query, args = []) {
        return new Promise((resolve, reject) => {
            this._connection.query(query, args, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    }
}

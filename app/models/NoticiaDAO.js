
export class NoticiaDAO {

    constructor(connection) {
        this._connection = connection
    }

    async getNoticias() {
        return await this.exec('SELECT * FROM noticias').then(r => r.rows);
    }
    async getNoticia(id) {
        return await this.exec('SELECT * FROM noticias WHERE id_noticia = $1', [id])
            .then(r => r.rows[0]);
    }

    async salvarNovaNoticia(dados) {
        return await this.exec('INSERT INTO noticias VALUES (DEFAULT, $1, $2, $3, $4, $5 )', dados);
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

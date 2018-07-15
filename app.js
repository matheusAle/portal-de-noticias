/**
 * Modulo de carregamento inicia do servidor.
 * Carrega as configurações e inicia o servidor com a porta 3000.
 */

import app from './config/server';
app.listen(3000, () => console.log('open in 3000.'));
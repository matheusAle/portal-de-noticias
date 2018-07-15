import { createConnection as cc } from 'mysql';

export function createConnection() {
	return cc({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'portal_noticias'
	});	
}
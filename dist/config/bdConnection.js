'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createConnection = createConnection;

var _pg = require('pg');

function createConnection() {

	var conn = new _pg.Client({
		user: 'jgfnbmmdhtjbkz',
		host: 'ec2-184-73-174-171.compute-1.amazonaws.com',
		database: 'dc4ki9vje1ooac',
		password: 'd4de0b422e721f8d6b91997e379dc85cab88e9b74dc37da6060459a12fefa6da',
		port: 5432,
		connect_timeout: 0,
		ssl: {
			rejectUnauthorized: false
		}
	});
	conn.connect();
	return conn;
}
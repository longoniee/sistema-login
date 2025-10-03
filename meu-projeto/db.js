const mysql = require('mysql2');

const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'escola'
});

db.connect((err)  => {
    if (err) {
        console.error('erro de conexao:', err);
        return;
    }
    console.log('conectado ao mysql!');
});

module.exports = db;
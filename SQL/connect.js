let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'mjbenefiel',
    password: 'dur@cell15',
    database: 'todoapps'
})

connection.connect(function(err){
    if (err) {
        return console.error('error' + err.message)
    }

    console.log('Connected!')
});

connection.end(function(err) {
    if (err) {
        return console.log('error:' + err.message);
    }
    console.log('Close the database')
})
module.exports.set = function(app,conf) {
    mysql = require(conf.adapter);
    connection = mysql.createConnection({
        host     : conf.host,
        user     : conf.user,
        password : conf.password,
        database : conf.database
    });
};

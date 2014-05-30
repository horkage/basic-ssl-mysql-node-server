// Required modules for this node instance
var fs = require('fs');
var path = require('path');

// SSL Requirements
var hskey  = fs.readFileSync('horkage-key.pem');
var hscert = fs.readFileSync('horkage-cert.pem');
var options = {
    key:  hskey,
    cert: hscert
};

var express = require('express'),
    app     = express()
  , https   = require('https')
  , server  = https.createServer(options, app)
  , io      = require('socket.io').listen(server);

// Start the server
server.listen(8443);

// All requests get logged
app.use(express.logger(':method :url :status'));
app.use(express.urlencoded()) 
app.use(express.methodOverride())
app.use(app.router) 
app.use(express.static(path.join(__dirname, 'public')))


// Load database configuration
var db_config = require('./config/db.json');

// Get database connection
var db = require('./local/mysql.js');
    db.set(app,db_config);

// Load the APIs
var apis       = require('./local/api.js');
    apis.set(app)


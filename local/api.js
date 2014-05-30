module.exports.set = function(app) {

    app.get('/info', function( req, res ) {
        connection.query('show tables', function( err, rows, fields ) {
            if ( err ) throw err;
            //console.log( rows );
            res.send( rows );
        });
    });

    app.get('/', function(req, res) {
      res.send('Welcome to snazzy API thingie!<br /><a href="/splat">BLOWIE UPPIE</a><br />PARAM:');
    });

    app.get('/splat', function( req, res ) {
      res.send('SPLAT!<br /><a href="/">go home, noobsauce</a>');
    });
    
    app.get('/user/:id', function( req, res ) {
      res.send('<h1>User</h1>ID:' + req.params.id);
    });
};

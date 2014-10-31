var bouncy = require('bouncy');

var server = bouncy(function (req, res, bounce) {
    if (req.headers.host === 'print.ct') {
	console.log('print.ct');
        bounce(3000);
    }
    else if (req.headers.host === 'register.ct') {
	console.log('register.ct');
        bounce(3001);
    }
    else {
	console.log('no host');
        res.statusCode = 404;
        res.end('no such host');
    }
});
server.listen(8000);

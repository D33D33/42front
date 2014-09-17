var httpProxy = require('http-proxy')

var proxy = httpProxy.createProxy();

var options = {  
  'print.ct': 'http://127.0.0.1:3000',
  'login.ct': 'http://127.0.0.1:3001'
}

require('http').createServer(function(req, res) {  
  proxy.web(req, res, {
    target: options[req.headers.host]
  });
}).listen(8000);
 

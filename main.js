var http = require('http'),  
    httpProxy = require('http-proxy');

var options = {  
  hostnameOnly: true,
  router: {
    'print.ct': '127.0.0.1:3000',
    'login.ct': '127.0.0.1:3001'
  }
}

var proxyServer = httpProxy.createServer(options).listen(8000); 

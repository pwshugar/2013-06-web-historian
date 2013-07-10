var fs = require('fs');

exports.datadir = __dirname + "data/sites.txt"; // tests will need to override this.

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

exports.handleRequest = function (req, res) {

  var statusCode;

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "application/json";

  if(req.method === 'POST'){
    var body = '';
    req.on('data', function(data){
      body += data;
    });
    req.on('end', function(){
      fs.appendFile('/Users/hackreactor/code/Shugardude/2013-06-web-historian/data/sites.txt',", " + body.substr(4), function () {
          console.log(body.substr(4));
      });
    });
  }

  res.writeHead(200, headers);
  res.end('');
};

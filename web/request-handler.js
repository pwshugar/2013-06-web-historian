var fs = require('fs');

exports.datadir = '/Users/hackreactor/code/Shugardude/2013-06-web-historian/data/sites.txt'; // tests will need to override this.

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

exports.handleRequest = function (req, res) {

  var body = 'helloooo';
  var statusCode;

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "application/json";

  if(req.method === 'GET'){
    res.writeHead(200, headers);
    if (fs.existsSync('/Users/hackreactor/code/Shugardude/2013-06-web-historian/data/sites/' + req.url.substr(22))) {
      if (req.url.substr(22) === ''){
        res.end('<input></input>');
      } else {
        res.end(fs.readFileSync('/Users/hackreactor/code/Shugardude/2013-06-web-historian/data/sites/' + req.url.substr(22), 'utf8'));
      }
    } else {
      res.writeHead(404, headers);
      res.end('');
    }
  }

  if(req.method === 'POST'){
    body = '';
    req.on('data', function(data){
      body += data;
    });
    req.on('end', function(){
      fs.appendFileSync(exports.datadir,req._postData.url + "\n");
      // fs.appendFile(exports.datadir,", " + body.substr(4), function () {
      //     console.log(body.substr(4));
      // });
      res.writeHead(302, headers);
      console.log('testfile contents', fs.readFileSync(exports.datadir, 'utf8'));
      console.log(exports.datadir);
      res.end(req._postData.url + "\n");
    });
  }
};

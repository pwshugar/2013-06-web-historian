var fs = require('fs');

exports.datadir = __dirname + "data/sites.txt"; // tests will need to override this.

exports.handleRequest = function (req, res) {
  fs.writeFile('/Users/hackreactor/code/Shugardude/2013-06-web-historian/data/sites.txt', 'Hello Node', function () {
      console.log('It\'s saved!');
  });
};

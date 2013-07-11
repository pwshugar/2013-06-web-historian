var fs = require('fs');
var helpers = require("../workers/lib/html-fetcher-helpers");


var urls = fs.readFileSync('/Users/hackreactor/code/Shugardude/2013-06-web-historian/data/sites.txt', 'utf8');
urls = urls.split('\n');
urls.splice(urls.length - 1);

exports.runOnce = function(){
  helpers.readUrls(urls, function(value){
    helpers.downloadUrls(value);
  });
};
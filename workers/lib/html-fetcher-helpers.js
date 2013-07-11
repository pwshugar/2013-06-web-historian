var httpGet = require('http-get');

exports.readUrls = function(filePath, cb){
  for (var i = 0; i < filePath.length; i++){
    cb(filePath[i]);
  }
};

exports.downloadUrls = function(url){
  httpGet.get(url, '/Users/hackreactor/code/Shugardude/2013-06-web-historian/data/sites/' + url, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log('File downloaded at: ' + result.file);
    }
  });
  return true;
};
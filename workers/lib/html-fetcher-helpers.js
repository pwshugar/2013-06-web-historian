exports.readUrls = function(filePath, cb){
  for (var i = 0; i < filePath.length; i++){
    cb(filePath[i]);
  }
};

exports.downloadUrls = function(urls){
  // fixme
};
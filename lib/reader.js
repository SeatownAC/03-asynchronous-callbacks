'use strict';

const fs = require('fs');

const = function(files) {


}

// Wrap the fs.readFile method with our interface so that we can properly test it modularly.
module.exports = exports = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(null, data.toString().trim()); }
  });
};
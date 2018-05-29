'use strict';

const fs = require('fs');



// Wrap the fs.readFile method with our interface so that we can properly test it modularly.
module.exports = exports = (paths, callback) => {

  var resultsArr = [];

  for(let i = 0; i < paths.length; i++) {

    fs.readFile(paths[i], (err, contents) => {
      if(err) {callback(err);
      }
    else {
      resultsArr[i] = data.toString().trim();
    if (resultsArr.length === paths.length) 
    
      callback(undefined, resultsArr);
     }
    });
  }
};
const fs = require('fs');

const breedDetailsFromFile = function(breed, doneRead) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) { 
      doneRead(data);
    } else {
      doneRead(data);
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

module.exports = breedDetailsFromFile;


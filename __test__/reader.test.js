'use strict';


//jest.mock('fs');

const reader = require('../../lib/reader.js');

describe('Reader Module', () => {

  it('should callback with error for file that does not exist', (done) => {
    read(['missing.txt'], (err) => {
      expect(err).not.undefined();

      done();
    });
  });

  it('should callback with file contents of one file', (done) => {
    const expected = 'all things kittens';
    read([__dirname + '/../data/kittens.txt'], (err, contents) => {
      expect(err).toBeNull();
      const actual = contents.toString();
      expect(actual).toBe(expected);
      done();
    });
  });
  it('should callback all the contents of the files in order', (done) => {
    let paths = [];
    for(let item of ['kittens.txt', 'monkeys.txt', 'puppies.txt']) {
      paths.push(__dirname + '/../data/' + item);
    }
    let expected, actual;
    read(paths, (err, contents) => {
      expected = 'all things kittens';
      expect(err).toBeNull();
      actual = contents[0];
      expect(actual).toBe(expected);

      expected = 'all things monkeys';
      actual = contents[1];
      expect(actual).toBe(expected);

      expected = 'all things puppies';
      actual = contents[2];
      expect(actual).toBe(expected);
        
      done();

    });

  });

});


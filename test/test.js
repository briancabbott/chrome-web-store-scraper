const scraper = require('../src/chrome-web-store-scraper');

var assert = require('assert');

describe('Scraper Constructor', function() {
  describe('#constructor()', function() {
    it('Scraper should have constructeed.', function() {
      assert.equal(scraper.constructed);
    });
  });
});
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf() false', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    
   
  });
  
  describe('#indexOf() true', function() {
    it('should return 0 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(2), 1);
    });
    
   
  });
});
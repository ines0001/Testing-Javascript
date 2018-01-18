var assert = require('assert');
var operation = require('../module/interface.js');

describe('Interface Opérations', function() {
  describe('Addition(a,b)', function() {
    it('#Addition(3,2)=5', function() {
      assert.equal(operation.addition(3,2), 5);
    });
    
    it('#Addition(3,2)=6 #error', function() {
      assert.notEqual(operation.addition(3,2), 6);
    });
    
   
  });
  
  describe('Multiplication(a,b)', function() {
    it('#Multiplication(3,2)=6', function() {
      assert.equal(operation.multiplication(3,2), 6);
    });
    
    it('#Multiplication(4,2)=6 #error', function() {
      assert.notEqual(operation.multiplication(4,2), 6);
    });
    
   
  });
  
  
});
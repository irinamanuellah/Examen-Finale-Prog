import { describe } from 'mocha';
import { assert } from 'chai';
import{ findUnique } from './findUnique.js'; 
describe('Find Unique Number', function() {
    it('should return the unique number', function() {
      assert.equal(findUnique([10, 10, 15, 10, 10]), 15);
    });
    it('should return void', function() {
      assert.equal(findUnique([]),undefined);
    });
    it('should return the number', function() {
      assert.equal(findUnique([10]), 10);
    });
  });
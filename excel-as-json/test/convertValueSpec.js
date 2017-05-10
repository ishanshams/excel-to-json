// Generated by CoffeeScript 1.10.0
(function() {
  var chai, convertValue, expect;

  convertValue = require('../lib/excel-as-json').convertValue;

  chai = require('chai');

  chai.should();

  expect = chai.expect;

  describe('convert value', function() {
    it('should convert text integers to literal numbers', function() {
      convertValue('1000').should.equal(1000);
      return convertValue('-999').should.equal(-999);
    });
    it('should convert text floats to literal numbers', function() {
      convertValue('999.0').should.equal(999.0);
      return convertValue('-100.0').should.equal(-100.0);
    });
    it('should convert text exponential numbers to literal numbers', function() {
      return convertValue('2e32').should.equal(2e+32);
    });
    it('should not convert things that are not numbers', function() {
      return convertValue('test').should.equal('test');
    });
    it('should true and false to Boolean', function() {
      convertValue('true').should.equal(true);
      convertValue('TRUE').should.equal(true);
      convertValue('TrUe').should.equal(true);
      convertValue('false').should.equal(false);
      convertValue('FALSE').should.equal(false);
      return convertValue('fAlSe').should.equal(false);
    });
    return it('should return blank strings as strings', function() {
      convertValue('').should.equal('');
      return convertValue(' ').should.equal(' ');
    });
  });

}).call(this);

// Generated by CoffeeScript 1.10.0
(function() {
  var TEST_OPTIONS, _validateOptions, chai, expect;

  _validateOptions = require('../lib/excel-as-json')._validateOptions;

  chai = require('chai');

  chai.should();

  expect = chai.expect;

  TEST_OPTIONS = {
    sheet: '1',
    isColOriented: false,
    omitEmptyFields: false
  };

  describe('validate options', function() {
    it('should provide default options when none are specified', function(done) {
      var options;
      options = _validateOptions(null);
      options.sheet.should.equal('1');
      options.isColOriented.should.equal(false);
      options.omitEmptyFields.should.equal(false);
      options = _validateOptions(void 0);
      options.sheet.should.equal('1');
      options.isColOriented.should.equal(false);
      options.omitEmptyFields.should.equal(false);
      return done();
    });
    it('should fill in missing sheet id', function(done) {
      var o, options;
      o = {
        isColOriented: false,
        omitEmptyFields: false
      };
      options = _validateOptions(o);
      options.sheet.should.equal('1');
      options.isColOriented.should.equal(false);
      options.omitEmptyFields.should.equal(false);
      return done();
    });
    it('should fill in missing isColOriented', function(done) {
      var o, options;
      o = {
        sheet: '1',
        omitEmptyFields: false
      };
      options = _validateOptions(o);
      options.sheet.should.equal('1');
      options.isColOriented.should.equal(false);
      options.omitEmptyFields.should.equal(false);
      return done();
    });
    it('should fill in missing omitEmptyFields', function(done) {
      var o, options;
      o = {
        sheet: '1',
        isColOriented: false
      };
      options = _validateOptions(o);
      options.sheet.should.equal('1');
      options.isColOriented.should.equal(false);
      options.omitEmptyFields.should.equal(false);
      return done();
    });
    it('should convert a numeric sheet id to text', function(done) {
      var o, options;
      o = {
        sheet: 3,
        isColOriented: false,
        omitEmptyFields: true
      };
      options = _validateOptions(o);
      options.sheet.should.equal('3');
      options.isColOriented.should.equal(false);
      options.omitEmptyFields.should.equal(true);
      return done();
    });
    return it('should detect invalid sheet ids and replace with the default', function(done) {
      var o, options;
      o = {
        sheet: 'one',
        isColOriented: false,
        omitEmptyFields: true
      };
      options = _validateOptions(o);
      options.sheet.should.equal('1');
      options.isColOriented.should.equal(false);
      options.omitEmptyFields.should.equal(true);
      o.sheet = 0;
      options = _validateOptions(o);
      options.sheet.should.equal('1');
      o.sheet = true;
      options = _validateOptions(o);
      options.sheet.should.equal('1');
      o.sheet = isNaN;
      options = _validateOptions(o);
      options.sheet.should.equal('1');
      return done();
    });
  });

}).call(this);

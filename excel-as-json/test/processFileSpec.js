// Generated by CoffeeScript 1.10.0
(function() {
  var COL_JSON, COL_JSON_NESTED, COL_SHEET_1_JSON, COL_SHEET_2_JSON, COL_XLSX, ROW_JSON, ROW_SHEET_1_JSON, ROW_SHEET_2_JSON, ROW_XLSX, TEST_OPTIONS, chai, expect, fs, processFile;

  processFile = require('../lib/excel-as-json').processFile;

  fs = require('fs');

  chai = require('chai');

  chai.should();

  expect = chai.expect;

  ROW_XLSX = 'data/row-oriented.xlsx';

  ROW_JSON = 'build/row-oriented.json';

  COL_XLSX = 'data/col-oriented.xlsx';

  COL_JSON = 'build/col-oriented.json';

  COL_JSON_NESTED = 'build/newDir/col-oriented.json';

  ROW_SHEET_1_JSON = '[{"firstName":"Jihad","lastName":"Saladin","address":{"street":"12 Beaver Court","city":"Snowmass","state":"CO","zip":81615}},{"firstName":"Marcus","lastName":"Rivapoli","address":{"street":"16 Vail Rd","city":"Vail","state":"CO","zip":81657}}]';

  ROW_SHEET_2_JSON = '[{"firstName":"Max","lastName":"Irwin","address":{"street":"123 Fake Street","city":"Rochester","state":"NY","zip":99999}}]';

  COL_SHEET_1_JSON = '[{"firstName":"Jihad","lastName":"Saladin","address":{"street":"12 Beaver Court","city":"Snowmass","state":"CO","zip":81615},"isEmployee":true,"phones":[{"type":"home","number":"123.456.7890"},{"type":"work","number":"098.765.4321"}],"aliases":["stormagedden","bob"]},{"firstName":"Marcus","lastName":"Rivapoli","address":{"street":"16 Vail Rd","city":"Vail","state":"CO","zip":81657},"isEmployee":false,"phones":[{"type":"home","number":"123.456.7891"},{"type":"work","number":"098.765.4322"}],"aliases":["mac","markie"]}]';

  COL_SHEET_2_JSON = '[{"firstName":"Max","lastName":"Irwin","address":{"street":"123 Fake Street","city":"Rochester","state":"NY","zip":99999},"isEmployee":false,"phones":[{"type":"home","number":"123.456.7890"},{"type":"work","number":"505-505-1010"}],"aliases":["binarymax","arch"]}]';

  TEST_OPTIONS = {
    sheet: '1',
    isColOriented: false,
    omitEmptyFields: false
  };

  describe('process file', function() {
    it('should notify on file does not exist', function(done) {
      return processFile('data/doesNotExist.xlsx', null, TEST_OPTIONS, function(err, data) {
        err.should.be.a('string');
        expect(data).to.be.an('undefined');
        return done();
      });
    });
    it('should not blow up when a file does not exist and no callback is provided', function(done) {
      processFile('data/doesNotExist.xlsx', function() {});
      return done();
    });
    it('should not blow up on read error when no callback is provided', function(done) {
      processFile('data/row-oriented.csv', function() {});
      return done();
    });
    it('should notify on read error', function(done) {
      return processFile('data/row-oriented.csv', null, TEST_OPTIONS, function(err, data) {
        err.should.be.a('string');
        expect(data).to.be.an('undefined');
        return done();
      });
    });
    it('should use defaults when caller specifies no options', function(done) {
      return processFile(ROW_XLSX, null, null, function(err, data) {
        expect(err).to.be.an('undefined');
        JSON.stringify(data).should.equal(ROW_SHEET_1_JSON);
        return done();
      });
    });
    it('should process row oriented Excel files, write the result, and return the parsed object', function(done) {
      var options;
      options = {
        sheet: '1',
        isColOriented: false,
        omitEmptyFields: false
      };
      return processFile(ROW_XLSX, ROW_JSON, options, function(err, data) {
        var result;
        expect(err).to.be.an('undefined');
        result = JSON.parse(fs.readFileSync(ROW_JSON, 'utf8'));
        JSON.stringify(result).should.equal(ROW_SHEET_1_JSON);
        JSON.stringify(data).should.equal(ROW_SHEET_1_JSON);
        return done();
      });
    });
    it('should process sheet 2 of row oriented Excel files, write the result, and return the parsed object', function(done) {
      var options;
      options = {
        sheet: '2',
        isColOriented: false,
        omitEmptyFields: false
      };
      return processFile(ROW_XLSX, ROW_JSON, options, function(err, data) {
        var result;
        expect(err).to.be.an('undefined');
        result = JSON.parse(fs.readFileSync(ROW_JSON, 'utf8'));
        JSON.stringify(result).should.equal(ROW_SHEET_2_JSON);
        JSON.stringify(data).should.equal(ROW_SHEET_2_JSON);
        return done();
      });
    });
    it('should process col oriented Excel files, write the result, and return the parsed object', function(done) {
      var options;
      options = {
        sheet: '1',
        isColOriented: true,
        omitEmptyFields: false
      };
      return processFile(COL_XLSX, COL_JSON, options, function(err, data) {
        var result;
        expect(err).to.be.an('undefined');
        result = JSON.parse(fs.readFileSync(COL_JSON, 'utf8'));
        JSON.stringify(result).should.equal(COL_SHEET_1_JSON);
        JSON.stringify(data).should.equal(COL_SHEET_1_JSON);
        return done();
      });
    });
    it('should process sheet 2 of col oriented Excel files, write the result, and return the parsed object', function(done) {
      var options;
      options = {
        sheet: '2',
        isColOriented: true,
        omitEmptyFields: false
      };
      return processFile(COL_XLSX, COL_JSON, options, function(err, data) {
        var result;
        expect(err).to.be.an('undefined');
        result = JSON.parse(fs.readFileSync(COL_JSON, 'utf8'));
        JSON.stringify(result).should.equal(COL_SHEET_2_JSON);
        JSON.stringify(data).should.equal(COL_SHEET_2_JSON);
        return done();
      });
    });
    it('should create the destination directory if it does not exist', function(done) {
      var options;
      options = {
        sheet: '1',
        isColOriented: true,
        omitEmptyFields: false
      };
      return processFile(COL_XLSX, COL_JSON_NESTED, options, function(err, data) {
        var result;
        expect(err).to.be.an('undefined');
        result = JSON.parse(fs.readFileSync(COL_JSON_NESTED, 'utf8'));
        JSON.stringify(result).should.equal(COL_SHEET_1_JSON);
        JSON.stringify(data).should.equal(COL_SHEET_1_JSON);
        return done();
      });
    });
    it('should return a parsed object without writing a file', function(done) {
      var error, options;
      try {
        fs.unlinkSync(ROW_JSON);
      } catch (error) {

      }
      options = {
        sheet: '1',
        isColOriented: false,
        omitEmptyFields: false
      };
      return processFile(ROW_XLSX, void 0, options, function(err, data) {
        expect(err).to.be.an('undefined');
        fs.existsSync(ROW_JSON).should.equal(false);
        JSON.stringify(data).should.equal(ROW_SHEET_1_JSON);
        return done();
      });
    });
    return it('should notify on write error', function(done) {
      return processFile(ROW_XLSX, 'build', TEST_OPTIONS, function(err, data) {
        expect(err).to.be.an('string');
        return done();
      });
    });
  });

}).call(this);

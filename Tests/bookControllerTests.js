var should = require('should'),
    sinon = require('sinon'),
    gulpMocha = require('gulp-mocha');

describe('Book Controller Tests: ', function () {
    describe('POST', function () {
        it('shout not allow an empty on post', function () {
            var Book = function (book) {
                this.save = function () {}
            };

            var req = {
                body: {
                    author: 'Jon Snow'
                }
            }
            var res = {
                status: sinon.spy(),
                send: sinon.spy(),
            }

            var bookController = require('../Controllers/bookController')(Book);

            bookController.post(req, res);

            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0]);
            res.send.calledWith('Title is required').should.equal(true);
        })
    })
})
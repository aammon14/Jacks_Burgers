'use strict';

var path = require('path');
var request = require('supertest');
var express = require('express');
var expressPackageJson = require('../index');

describe('express-package-json', function () {

    it('should expose package.json data to the view engine', function (done) {

        var app = express();

        app.set('views', __dirname);
        app.set('view engine', 'hbs');

        app.use(expressPackageJson(path.join(__dirname, 'package.json')));

        app.get('/', function (req, res) {
            res.render('example');
        });

        request(app).get('/').expect(200, 'example v1.2.3\n').end(done);

    });

});

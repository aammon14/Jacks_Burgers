"use strict";

var path = require('path');

module.exports = function expressPackageJson(path, propertyName) {
    var pjson = require(path || path.join('.', 'package.json'));
    return function expressPackageJsonMiddleware(req, res, next) {
        res.locals = res.locals || {};
        res.locals[propertyName || 'pkg'] = pjson;
        next();
    };
};

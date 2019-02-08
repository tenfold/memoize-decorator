"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_decorators_1 = require("core-decorators");
var core_decorators_2 = require("core-decorators");
exports.AutoBind = core_decorators_2.autobind;
var memoizee = require("memoizee");
var moment_1 = require("moment");
var memoizee_rx_1 = require("memoizee-rx");
function Memoize(options) {
    var wrapperFunction = options.observable ?
        memoizee_rx_1.memoizeeRx : memoizee;
    if (options.ttl) {
        options = __assign({}, options, { maxAge: moment_1.duration.apply(void 0, options.ttl).asMilliseconds() });
    }
    return core_decorators_1.decorate.call(this, wrapperFunction, options);
}
exports.Memoize = Memoize;

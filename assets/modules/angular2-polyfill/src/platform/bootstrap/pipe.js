"use strict";
var injector = require('../utils/injector');
function bootstrap(ngModule, target) {
    var pipe = target.__annotations__.pipe;
    injector.inject(ngModule, target);
    var filter = target.$inject || [];
    filter.push(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        // Create a new instance and inject the dependencies
        var instance = new (target.bind.apply(target, [void 0].concat(args)))();
        // Create the filter function
        var filter = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return instance.transform(value, args);
        };
        // If pure is set to false, it's a stateful filter
        filter.$stateful = pipe.pure === false;
        return filter;
    });
    ngModule.filter(pipe.name, filter);
    return pipe.name;
}
exports.bootstrap = bootstrap;

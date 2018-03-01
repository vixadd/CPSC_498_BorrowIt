"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var rxjs_1 = require('rxjs');
var core_1 = require('../../core');
var Http = (function () {
    // Inject good old `$http`
    function Http(http) {
        this.http = http;
    }
    // // TODO IMPLEMENT
    // request(url: string | Request, options?: RequestOptionsArgs): Promise<Response> {
    //
    // }
    Http.prototype.get = function (url, options) {
        return rxjs_1.Observable.fromPromise(this.http.get(url, options));
    };
    Http.prototype.post = function (url, body, options) {
        return rxjs_1.Observable.fromPromise(this.http.post(url, body, options));
    };
    Http.prototype.put = function (url, body, options) {
        return rxjs_1.Observable.fromPromise(this.http.put(url, body, options));
    };
    Http.prototype.delete = function (url, options) {
        return rxjs_1.Observable.fromPromise(this.http.delete(url, options));
    };
    Http.prototype.patch = function (url, body, options) {
        return rxjs_1.Observable.fromPromise(this.http.patch(url, body, options));
    };
    Http.prototype.head = function (url, options) {
        return rxjs_1.Observable.fromPromise(this.http.head(url, options));
    };
    Http = __decorate([
        __param(0, core_1.Inject('$http'))
    ], Http);
    return Http;
}());
exports.Http = Http;

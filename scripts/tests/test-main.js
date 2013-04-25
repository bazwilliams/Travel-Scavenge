/*global require, window*/
var tests = Object.keys(window.__karma__.files).filter(function (file) {
    "use strict";
    return (/Specs\.js$/).test(file);
});

require({
    baseUrl: '/base/src',
    paths: {
        jquery: '../libs/jquery-1.9.1.min',
        underscore: '../libs/underscore-min',
        handlebars: '../libs/handlebars',
        backbone: '../libs/backbone-min',
        localstorage: '../libs/backbone.localStorage-min',
        modaldialog: '../libs/Backbone.ModalDialog',
        require: '../libs/require',
        text: '../libs/text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        localstorage: {
            deps: ['backbone'],
            exports: 'Backbone.localStorage'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        modaldialog: {
            deps: ['backbone'],
            exports: 'Backbone.ModalDialog'
        }
    },
    deps: tests,
    callback: window.__karma__.start
});

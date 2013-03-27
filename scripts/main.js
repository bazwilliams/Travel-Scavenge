/*global require*/
require.config({
    baseUrl: 'scripts/src',
    paths: {
        jquery: '../libs/jquery-1.9.1.min',
        underscore: '../libs/underscore-min',
        handlebars: '../libs/handlebars',
        backbone: '../libs/backbone-min',
        localstorage: '../libs/backbone.localStorage-min',
        modaldialog: '../libs/Backbone.ModalDialog',
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
    }
});

require(['app'], function (app) {
    "use strict";
    app.initialize();
});
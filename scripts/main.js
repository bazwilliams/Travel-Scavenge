require.config({
    baseUrl: 'scripts/src',
    paths: {
        jquery: '../libs/jquery-1.9.1.min',
        underscore: '../libs/underscore-min',
        handlebars: '../libs/handlebars',
        backbone: '../libs/backbone-min'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['app'], function(app) {
	app.initialize();
});
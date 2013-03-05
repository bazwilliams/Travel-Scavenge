require.config({
    paths: {
        jquery: 'jquery-1.9.1.min',
        underscore: 'underscore-min',
        handlebars: 'handlebars.runtime',
        backbone: 'backbone-min'
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

require(['app'], function(App) {
	App.initialize();
});
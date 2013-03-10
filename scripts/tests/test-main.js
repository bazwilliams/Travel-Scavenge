var tests = Object.keys(window.__testacular__.files).filter(function (file) {
    return /Specs\.js$/.test(file);
});

require({
    baseUrl: '/base/src',
    paths: {
        jquery: '../libs/jquery-1.9.1.min',
        underscore: '../libs/underscore-min',
        handlebars: '../libs/handlebars',
        backbone: '../libs/backbone-min',
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
        handlebars: {
            exports: 'Handlebars'
        }
    },
    deps: tests,
    callback: window.__testacular__.start
});
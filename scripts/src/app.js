/*global define, document*/
define([
    'jquery',
    'backbone',
    'data',
    'models/Config',
    'models/Game',
    'views/TilesView',
    'extensions',
    'bootstrap'
], function ($, Backbone, data, Config, Game, TilesView) {
    "use strict";
    var initialize = function () {
        var config, game, view;

        config = new Config();

        game = new Game({
            config: config
        });

        view = new TilesView({
            collection: game.getTileSet(data.getTiles())
        });
        view.render();

        $(document).find('section').append(view.el);
    };

    return {
        initialize: initialize
    }
});
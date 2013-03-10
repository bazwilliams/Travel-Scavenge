/*global define, document*/
define([
    'jquery',
    'backbone',
    'data',
    'models/Config',
    'models/Game',
    'views/GameView',
    'extensions'
], function ($, Backbone, data, Config, Game, GameView) {
    "use strict";
    var initialize = function () {
        var config, game, view;

        config = new Config();

        game = new Game({
            config: config
        });

        view = new GameView({
            collection: game.getTileSet(data.getTiles()),
            config: config
        });
        view.render();

        $(document).find('section').append(view.el);
    };

    return {
        initialize: initialize
    }
});
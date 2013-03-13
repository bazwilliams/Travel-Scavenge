/*global define, document*/
define([
    'jquery',
    'backbone',
    'data',
    'models/Config',
    'models/Game',
    'views/ConfigView',
    'views/GameView',
    'colletions/Tags',
    'extensions'
], function ($, Backbone, data, Config, Game, ConfigView, GameView) {
    "use strict";
    var initialize = function () {
        var config, configView, game, gameView;

        config = new Config({
            gameHeight: 2,
            gameWidth: 3,
            tags: new Tags())
        });

        data.getTiles().forEach( function (tagName) {
            config.addTag(tagName);
        });

        configView = new ConfigView({
            model: config
        });
        configView.render();
        $(document).find('section').append(configView.el);

        game = new Game({
            config: config,
            gameTiles: data.getTiles()
        });

        gameView = new GameView({
            collection: game.getActiveTileSet(),
            config: config
        });
        gameView.render();
        $(document).find('section').append(gameView.el);
    };

    return {
        initialize: initialize
    }
});
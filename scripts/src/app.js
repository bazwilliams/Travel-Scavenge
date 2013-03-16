/*global define, document*/
define([
    'underscore',
    'jquery',
    'backbone',
    'data',
    'models/Config',
    'models/Game',
    'views/ConfigView',
    'views/GameView',
    'extensions'
], function (_, $, Backbone, data, Config, Game, ConfigView, GameView) {
    "use strict";
    var initialize = function () {
        var config, configView, game, gameView, tags;

        tags = [];
        _.uniq(_.flatten(_.pluck(data.getTiles(), 'tags'))).forEach(function (tagName) {
            tags.push({
                'id': tagName,
                'selected': true
            });
        });

        config = new Config({
            gameHeight: 2,
            gameWidth: 3,
            tags: tags
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
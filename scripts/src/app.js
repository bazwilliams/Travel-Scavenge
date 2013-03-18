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
        var config, configView, game, gameView, tags, tiles;

        tags = [];
        _.uniq(_.flatten(_.pluck(data.getTiles(), 'tags'))).forEach(function (tagName) {
            tags.push({
                'id': tagName,
                'selected': true
            });
        });

        config = new Config({
            tags: tags
        });

        config.fetch();

        configView = new ConfigView({
            model: config
        });
        configView.render();
        $(document).find('#config').append(configView.el);

        game = new Game({
            config: config,
            gameTiles: data.getTiles()
        });

        tiles = game.getActiveTileSet();

        gameView = new GameView({
            collection: tiles,
            config: config
        });
        gameView.render();
        $(document).find('.container').append(gameView.el);
    };

    return {
        initialize: initialize
    };
});
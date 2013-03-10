/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'jquery',
    'models/Config',
    'collections/Tiles',
    'views/GameView'
], function ($, Config, Tiles, GameView) {
    "use strict";
    describe('GameView', function () {
        var el, config, collection, view;

        beforeEach(function () {
            el = $('<div>');
            collection = new Tiles([
                { description: 'alice' },
                { description: 'bob' },
                { description: 'dave' }
            ]);
            config = new Config({
                gameWidth: 1,
                gameHeight: 3
            });
            view = new GameView({
                el: el,
                config: config,
                collection: collection
            });
            view.render();
        });

        it('Should not add a game-complete class', function () {
            expect(el.find('.game-complete').size()).toBe(0);
        });

        it('Should add a game-complete class when score reaches the number of tiles in collection', function () {
            collection.at(0).set('selected', true);
            collection.at(1).set('selected', true);
            collection.at(2).set('selected', true);
            expect(el.find('.game-complete').size()).toBe(1);
        });

        it('Should have 3 tiles', function () {
            expect(el.find('.tile').size()).toBe(3);
        });

        it('Should have 3 rows', function () {
            expect(el.find('.game-row').size()).toBe(3);
        });
    });
});
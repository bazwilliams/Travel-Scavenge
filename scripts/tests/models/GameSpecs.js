/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'models/Game',
    'models/Config'
], function (Game, Config) {
    "use strict";
    describe('Game', function () {
        var sut, config, tiles;

        beforeEach(function () {
            tiles = [
                {
                    "description": "one"
                },
                {
                    "description": "two"
                },
                {
                    "description": "three"
                },
                {
                    "description": "four"
                },
                {
                    "description": "five"
                },
                {
                    "description": "six"
                },
                {
                    "description": "seven"
                },
                {
                    "description": "eight"
                }
            ];
            config = new Config({
                gameWidth: 2,
                gameHeight: 2
            });
            sut = new Game({
                config: config
            });
        });

        it('Should generate a TileSet containing 4 tiles', function () {
            var tileSet = sut.getTileSet(tiles);
            expect(tileSet.size()).toBe(4);
        });
    });
});
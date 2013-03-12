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
                    "description": "one",
                    "tags": ["a", "b"]
                },
                {
                    "description": "two",
                    "tags": ["a", "b"]
                },
                {
                    "description": "three",
                    "tags": ["a", "b"]
                },
                {
                    "description": "four",
                    "tags": ["a", "c"]
                },
                {
                    "description": "five",
                    "tags": ["b", "c"]
                },
                {
                    "description": "six",
                    "tags": ["b", "c"]
                },
                {
                    "description": "seven",
                    "tags": ["b", "c"]
                },
                {
                    "description": "eight",
                    "tags": ["b", "c"]
                },
                {
                    "description": "nine",
                    "tags": ["b"]
                },
                {
                    "description": "ten",
                    "tags": ["d", "b"]
                }
            ];
            config = new Config({
                gameWidth: 2,
                gameHeight: 2,
                tags: ['a']
            });
            sut = new Game({
                config: config
            });
        });

        it('Should generate a TileSet containing 4 tiles', function () {
            var tileSet = sut.getTileSet(tiles);
            expect(tileSet.size()).toBe(4);
        });

        it('Should generate a TileSet only containing tiles tagged with A', function () {
            var tileSet = sut.getTileSet(tiles);
            tileSet.each(function (model) {
                expect(model.get('tags').indexOf('a')).not.toBe(-1);
            });
        });
    });
});
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
                    "tags": ["a", "c"]
                },
                {
                    "description": "six",
                    "tags": ["a", "c"]
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
                    "tags": ["a", "b"]
                },
                {
                    "description": "ten",
                    "tags": ["a", "b"]
                }
            ];
            config = new Config({
                gameWidth: 2,
                gameHeight: 2,
                tags: ['a', 'b']
            });
            sut = new Game({
                config: config
            });
        });

        it('Should generate a TileSet containing 4 tiles', function () {
            var tileSet = sut.getTileSet(tiles);
            expect(tileSet.size()).toBe(4);
        });

        it('Should generate a TileSet not containing tiles tagged with C', function () {
            var tileSet = sut.getTileSet(tiles);
            tileSet.each(function (model) {
                model.get('tags').forEach(function (tag) {
                    expect(tag).not.toBe('c');
                });
            });
        });
    });
});
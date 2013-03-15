/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'models/Game',
    'models/Config'
], function (Game, Config) {
    "use strict";
    describe('Game', function () {
        var sut, config, gameTiles;

        beforeEach(function () {
            gameTiles = [
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
                tags: [
                    {
                        id: 'a',
                        selected: true
                    }
                ]
            });
            sut = new Game({
                config: config,
                gameTiles: gameTiles
            });
        });

        it('Repeat calls to getActiveTileSet should return the same set', function () {
            var tileSet, repeatTileSet;
            tileSet = sut.getActiveTileSet();
            repeatTileSet = sut.getActiveTileSet();
            expect(repeatTileSet).toBe(tileSet);
        });

        it('Should generate a TileSet containing 4 tiles', function () {
            var tileSet = sut.getActiveTileSet();
            expect(tileSet.size()).toBe(4);
        });

        it('Should generate a TileSet only containing tiles tagged with A', function () {
            var tileSet = sut.getActiveTileSet();
            tileSet.each(function (model) {
                expect(model.get('tags').indexOf('a')).not.toBe(-1);
            });
        });

        it('Should generate a new TileSet when config is changed', function () {
            config.set('tags', [
                { id: 'd', selected: true}
            ]);
            var tileSet = sut.getActiveTileSet();
            expect(tileSet.size()).toBe(1);
        });
    });
});
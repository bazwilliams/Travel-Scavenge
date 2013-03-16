/*global define, it, toBe, beforeEach, describe, spyOn, expect*/
define([
    'underscore',
    'models/Config'
], function (_, Config) {
    "use strict";
    describe('Config', function () {
        var sut, tags;

        beforeEach(function () {
            tags = [
                {
                    id: 'tag1',
                    selected: false
                },
                {
                    id: 'tag2',
                    selected: false
                },
                {
                    id: 'tag3',
                    selected: false
                },
                {
                    id: 'tag4',
                    selected: false
                }
            ];
            sut = new Config({
                tags: tags
            });
        });

        it('Has default value for gameSize', function () {
            expect(sut.get('gameWidth')).toBe(2);
            expect(sut.get('gameHeight')).toBe(4);
        });

        it('Should specify how many tiles are required', function () {
            expect(sut.tilesRequired()).toBe(8);
        });

        it('Should specify the selected tags', function () {
            sut.setTags(['tag3']);
            expect(sut.getRequestedTags().length).toBe(1);
            expect(sut.getRequestedTags()[0]).toBe('tag3');
        });
    });
});